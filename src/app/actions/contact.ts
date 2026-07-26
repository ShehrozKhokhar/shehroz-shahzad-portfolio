"use server";

import { getResendClient } from "@/lib/resend";
import { contactFormSchema, type ContactFormSchema } from "@/lib/validations";
import { SITE_CONFIG } from "@/constants/site";

export type ContactActionResult =
  | { success: true }
  | { success: false; error: string; fieldErrors?: Partial<Record<keyof ContactFormSchema, string>> };

function buildEmailHtml(data: ContactFormSchema) {
  const escape = (value: string) =>
    value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  return `
    <div style="font-family: sans-serif; line-height: 1.6; color: #111;">
      <h2>New project enquiry from ${escape(data.name)}</h2>
      <p><strong>Email:</strong> ${escape(data.email)}</p>
      ${data.company ? `<p><strong>Company:</strong> ${escape(data.company)}</p>` : ""}
      <p><strong>Budget:</strong> ${escape(data.budget)}</p>
      <p><strong>Project Type:</strong> ${escape(data.projectType)}</p>
      <p><strong>Message:</strong></p>
      <p>${escape(data.message).replace(/\n/g, "<br />")}</p>
    </div>
  `;
}

export async function submitContactForm(
  values: ContactFormSchema,
): Promise<ContactActionResult> {
  const parsed = contactFormSchema.safeParse(values);

  if (!parsed.success) {
    const fieldErrors: Partial<Record<keyof ContactFormSchema, string>> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof ContactFormSchema;
      fieldErrors[key] = issue.message;
    }
    return { success: false, error: "Please fix the highlighted fields.", fieldErrors };
  }

  const to = process.env.CONTACT_EMAIL_TO ?? SITE_CONFIG.email;

  try {
    const resend = getResendClient();
    await resend.emails.send({
      from: `${SITE_CONFIG.name} Website <onboarding@resend.dev>`,
      to,
      replyTo: parsed.data.email,
      subject: `New enquiry: ${parsed.data.projectType} — ${parsed.data.name}`,
      html: buildEmailHtml(parsed.data),
    });
    return { success: true };
  } catch (error) {
    console.error("Failed to send contact form email", error);
    return {
      success: false,
      error: "Something went wrong sending your message. Please email us directly instead.",
    };
  }
}
