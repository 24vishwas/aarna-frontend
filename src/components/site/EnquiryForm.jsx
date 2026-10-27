import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { base44 } from "@/api/base44Client";
import { projectTypes, budgetBands } from "@/content/site";
import { cn } from "@/lib/utils";

const EMPTY = {
  name: "",
  email: "",
  phone: "",
  project_type: "",
  location: "",
  budget: "",
  message: "",
};

const fieldClass =
  "w-full border-0 border-b border-ivory/25 bg-transparent py-4 text-ivory placeholder:text-ivory/35 transition-colors duration-500 focus:border-bronze focus:outline-none";

function Field({ label, children, error, className }) {
  return (
    <label className={cn("block", className)}>
      <span className="eyebrow block text-ivory/45">{label}</span>
      {children}
      {error && <span className="mt-2 block text-xs text-bronze">{error}</span>}
    </label>
  );
}

export default function EnquiryForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [serverError, setServerError] = useState("");

  const update = (key) => (event) => {
    setValues((prev) => ({ ...prev, [key]: event.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = "Please tell us your name.";
    if (!values.email.trim() && !values.phone.trim()) {
      next.email = "An email or a phone number, so we can reply.";
      next.phone = "An email or a phone number, so we can reply.";
    }
    if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
      next.email = "That email address looks incomplete.";
    }
    if (!values.message.trim()) {
      next.message = "A few lines about the project helps us respond well.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const submit = async (event) => {
    event.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    setServerError("");
    try {
      await base44.entities.Enquiry.create({
        name: values.name.trim(),
        email: values.email.trim(),
        phone: values.phone.trim(),
        project_type: values.project_type,
        location: values.location.trim(),
        budget: values.budget,
        message: values.message.trim(),
        status: "new",
      });
      base44.analytics.track({
        eventName: "enquiry_submitted",
        properties: { project_type: values.project_type || "unspecified" },
      });
      setStatus("sent");
    } catch (error) {
      setStatus("error");
      setServerError(
        "We couldn't send your enquiry just now. Please try again, or call the studio directly."
      );
    }
  };

  if (status === "sent") {
    return (
      <div className="border border-ivory/20 p-8 md:p-12">
        <span className="inline-flex h-10 w-10 items-center justify-center border border-bronze text-bronze">
          <Check className="h-5 w-5" strokeWidth={1.25} />
        </span>
        <h3 className="display mt-6 text-3xl text-ivory">Thank you, {values.name.split(" ")[0]}.</h3>
        <p className="mt-4 max-w-md text-base leading-relaxed text-ivory/65">
          Your enquiry has reached the studio. We'll review the details and come back to you
          personally — usually within one working day.
        </p>
        <button
          type="button"
          onClick={() => { setValues(EMPTY); setStatus("idle"); }}
          className="btn-outline-light mt-8"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate className="space-y-8">
      <div className="grid gap-8 md:grid-cols-2">
        <Field label="Your name *" error={errors.name}>
          <input
            type="text"
            value={values.name}
            onChange={update("name")}
            placeholder="Name"
            autoComplete="name"
            className={fieldClass}
          />
        </Field>

        <Field label="Phone or email *" error={errors.phone || errors.email}>
          <div className="grid gap-6 md:grid-cols-2">
            <input
              type="tel"
              value={values.phone}
              onChange={update("phone")}
              placeholder="Phone"
              autoComplete="tel"
              className={fieldClass}
            />
            <input
              type="email"
              value={values.email}
              onChange={update("email")}
              placeholder="Email"
              autoComplete="email"
              className={fieldClass}
            />
          </div>
        </Field>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <Field label="Project type">
          <select
            value={values.project_type}
            onChange={update("project_type")}
            style={{ colorScheme: "dark" }}
            className={fieldClass}
          >
            <option value="">Select</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </Field>

        <Field label="Location">
          <input
            type="text"
            value={values.location}
            onChange={update("location")}
            placeholder="Site / area"
            className={fieldClass}
          />
        </Field>

        <Field label="Indicative budget">
          <select
            value={values.budget}
            onChange={update("budget")}
            style={{ colorScheme: "dark" }}
            className={fieldClass}
          >
            <option value="">Select</option>
            {budgetBands.map((band) => (
              <option key={band} value={band}>{band}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Tell us about the project *" error={errors.message}>
        <textarea
          rows={4}
          value={values.message}
          onChange={update("message")}
          placeholder="Plot size, number of floors, what you have in mind…"
          className={cn(fieldClass, "resize-none")}
        />
      </Field>

      {status === "error" && (
        <p className="border border-bronze/40 px-5 py-4 text-sm text-bronze">{serverError}</p>
      )}

      <div className="flex flex-wrap items-center gap-6 pt-2">
        <button type="submit" disabled={status === "sending"} className="btn-outline-light disabled:opacity-50">
          {status === "sending" ? "Sending…" : "Send enquiry"}
          {status !== "sending" && <ArrowRight className="h-4 w-4" strokeWidth={1.25} />}
        </button>
        <p className="max-w-xs text-xs leading-relaxed text-ivory/40">
          No obligation. We reply with next steps, not a sales call.
        </p>
      </div>
    </form>
  );
}