import { Resend } from "resend";

let client: Resend | null = null;

export function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error(
      "RESEND_API_KEY is not set. Add it to your environment before submitting the contact form (see .env.example).",
    );
  }
  client ??= new Resend(apiKey);
  return client;
}
