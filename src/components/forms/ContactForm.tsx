"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send, CheckCircle2, AlertCircle } from "lucide-react";
import {
  contactFormSchema,
  type ContactFormSchema,
  BUDGET_OPTIONS,
  PROJECT_TYPE_OPTIONS,
} from "@/lib/validations";
import { submitContactForm } from "@/app/actions/contact";
import { ButtonEl } from "@/components/ui/Button";
import { cn } from "@/utils/cn";

const inputClasses =
  "w-full rounded-xl border border-border bg-surface/60 px-4 py-3 text-sm text-foreground placeholder:text-muted/60 transition-colors focus:border-accent-green";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      budget: "",
      projectType: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormSchema) => {
    setStatus("idle");
    setServerError(null);
    const result = await submitContactForm(values);

    if (result.success) {
      setStatus("success");
      reset();
      return;
    }

    setStatus("error");
    setServerError(result.error);
    if (result.fieldErrors) {
      for (const [field, message] of Object.entries(result.fieldErrors)) {
        setError(field as keyof ContactFormSchema, { message });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Name" htmlFor="name" error={errors.name?.message}>
          <input id="name" type="text" autoComplete="name" className={inputClasses} {...register("name")} />
        </Field>
        <Field label="Email" htmlFor="email" error={errors.email?.message}>
          <input id="email" type="email" autoComplete="email" className={inputClasses} {...register("email")} />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Company (optional)" htmlFor="company" error={errors.company?.message}>
          <input id="company" type="text" autoComplete="organization" className={inputClasses} {...register("company")} />
        </Field>
        <Field label="Budget" htmlFor="budget" error={errors.budget?.message}>
          <select id="budget" className={inputClasses} {...register("budget")} defaultValue="">
            <option value="" disabled>
              Select a range
            </option>
            {BUDGET_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Project Type" htmlFor="projectType" error={errors.projectType?.message}>
        <select id="projectType" className={inputClasses} {...register("projectType")} defaultValue="">
          <option value="" disabled>
            Select a project type
          </option>
          {PROJECT_TYPE_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Message" htmlFor="message" error={errors.message?.message}>
        <textarea
          id="message"
          rows={5}
          className={cn(inputClasses, "resize-none")}
          {...register("message")}
        />
      </Field>

      <ButtonEl type="submit" disabled={isSubmitting} className="self-start">
        {isSubmitting ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        ) : (
          <Send className="h-4 w-4" aria-hidden="true" />
        )}
        {isSubmitting ? "Sending..." : "Send Message"}
      </ButtonEl>

      <div role="status" aria-live="polite">
        {status === "success" ? (
          <p className="flex items-center gap-2 text-sm text-accent-green">
            <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
            Thanks — your message has been sent. I&apos;ll get back to you soon.
          </p>
        ) : null}
        {status === "error" && serverError ? (
          <p className="flex items-center gap-2 text-sm text-red-400">
            <AlertCircle className="h-4 w-4" aria-hidden="true" />
            {serverError}
          </p>
        ) : null}
      </div>
    </form>
  );
}

interface FieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}

function Field({ label, htmlFor, error, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-foreground">
        {label}
      </label>
      {children}
      {error ? (
        <p className="text-xs text-red-400" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
