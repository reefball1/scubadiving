"use client";

import { useState, useRef } from "react";

type FormState = "idle" | "loading" | "success" | "error";

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  const chars: Record<number, string> = { 0: "(", 3: ") ", 6: "-" };
  let result = "";
  for (let i = 0; i < digits.length; i++) {
    result += (chars[i] ?? "") + digits[i];
  }
  return result;
}

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [phone, setPhone] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  function validate(data: FormData) {
    const errs: Record<string, string> = {};
    const firstName = (data.get("name") as string)?.trim();
    const lastName = (data.get("last_name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const ph = (data.get("phone") as string)?.trim();
    const message = (data.get("message") as string)?.trim();

    if (!firstName) errs.name = "Please provide your first name.";
    if (!lastName) errs.last_name = "Please provide your last name.";
    if (!email) {
      errs.email = "Please provide your email address.";
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      errs.email = "Please provide a valid email address.";
    }
    if (!ph) {
      errs.phone = "Please provide your phone number.";
    } else if (!/^\(\d{3}\) \d{3}-\d{4}$/.test(ph)) {
      errs.phone = "Please provide a valid phone number.";
    }
    if (!message) errs.message = "Please enter your message.";
    return errs;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const errs = validate(data);

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setFormState("loading");

    try {
      const obj = Object.fromEntries(data);
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(obj),
      });
      if (res.status === 200) {
        setFormState("success");
        form.reset();
        setPhone("");
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  if (formState === "success") {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 flex flex-col items-center justify-center gap-4 min-h-[400px]">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-[#0f2232]">Message Sent!</h3>
        <p className="text-[#4a5568] text-center">
          Thanks for reaching out. We&apos;ll get back to you shortly.
        </p>
        <button
          onClick={() => setFormState("idle")}
          className="mt-4 px-6 py-3 bg-[#1a6b9a] hover:bg-[#0f2232] text-white font-semibold rounded-full transition-colors duration-200"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
      <h2 className="text-2xl font-extrabold text-[#0f2232] mb-2">Contact Us</h2>
      <p className="text-[#4a5568] text-sm mb-8">Complete the form below to send us a message.</p>

      <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-5">
        <input type="hidden" name="access_key" value="39f82801-903c-4ae3-a930-feef85e56d5a" />
        <input type="hidden" name="subject" value="New Form Submission from FTL Scuba Diving" />
        <input type="checkbox" name="botcheck" style={{ display: "none" }} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="first_name" className="block text-sm font-semibold text-[#0f2232] mb-1.5">
              First Name
            </label>
            <input
              type="text"
              name="name"
              id="first_name"
              autoComplete="given-name"
              placeholder="John"
              className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 focus:border-[#1a6b9a] focus:ring-2 focus:ring-[#1a6b9a]/20 ${
                errors.name ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50"
              }`}
            />
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
          </div>
          <div>
            <label htmlFor="last_name" className="block text-sm font-semibold text-[#0f2232] mb-1.5">
              Last Name
            </label>
            <input
              type="text"
              name="last_name"
              id="last_name"
              autoComplete="family-name"
              placeholder="Doe"
              className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 focus:border-[#1a6b9a] focus:ring-2 focus:ring-[#1a6b9a]/20 ${
                errors.last_name ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50"
              }`}
            />
            {errors.last_name && <p className="mt-1 text-xs text-red-500">{errors.last_name}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-[#0f2232] mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              placeholder="you@example.com"
              className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 focus:border-[#1a6b9a] focus:ring-2 focus:ring-[#1a6b9a]/20 ${
                errors.email ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50"
              }`}
            />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-[#0f2232] mb-1.5">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              autoComplete="tel"
              placeholder="(123) 456-7890"
              value={phone}
              onChange={(e) => setPhone(formatPhone(e.target.value))}
              className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 focus:border-[#1a6b9a] focus:ring-2 focus:ring-[#1a6b9a]/20 ${
                errors.phone ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50"
              }`}
            />
            {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-[#0f2232] mb-1.5">
            Your Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={5}
            placeholder="e.g., I am interested in learning to scuba dive in Florida between August 5th and August 10th"
            className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 focus:border-[#1a6b9a] focus:ring-2 focus:ring-[#1a6b9a]/20 resize-none ${
              errors.message ? "border-red-400 bg-red-50" : "border-gray-200 bg-gray-50"
            }`}
          />
          {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
        </div>

        {formState === "error" && (
          <p className="text-center text-red-500 text-sm font-medium">
            Something went wrong. Please try again.
          </p>
        )}

        <button
          type="submit"
          disabled={formState === "loading"}
          className="w-full py-4 bg-gradient-to-r from-[#0f2232] to-[#1a6b9a] hover:from-[#1a3a52] hover:to-[#2a8fc9] text-white font-bold rounded-xl transition-all duration-300 shadow hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {formState === "loading" ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending...
            </span>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
}
