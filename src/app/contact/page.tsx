"use client";

import { useState, FormEvent } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Footer from "@/components/Footer";

// --- Sanitization & Validation Helpers ---

/** Strip all HTML tags from a string to prevent XSS */
function stripHtml(str: string): string {
  return str.replace(/<[^>]*>/g, "");
}

/** Sanitize a text input: trim and strip HTML */
function sanitize(value: string): string {
  return stripHtml(value).trim();
}

/** Name regex: letters, spaces, hyphens, apostrophes only */
const NAME_REGEX = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s'-]+$/;

/** Basic but robust email regex */
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** URL must start with http:// or https:// */
const URL_REGEX = /^https?:\/\/.+/;

type FormErrors = {
  firstName?: string;
  lastName?: string;
  email?: string;
  website?: string;
  message?: string;
};

function validate(fields: {
  firstName: string;
  lastName: string;
  email: string;
  website: string;
  message: string;
}): FormErrors {
  const errors: FormErrors = {};

  // First Name
  if (!fields.firstName) {
    errors.firstName = "First name is required.";
  } else if (fields.firstName.length < 2) {
    errors.firstName = "First name must be at least 2 characters.";
  } else if (fields.firstName.length > 50) {
    errors.firstName = "First name must be 50 characters or less.";
  } else if (!NAME_REGEX.test(fields.firstName)) {
    errors.firstName = "First name can only contain letters, spaces, and hyphens.";
  }

  // Last Name
  if (!fields.lastName) {
    errors.lastName = "Last name is required.";
  } else if (fields.lastName.length < 2) {
    errors.lastName = "Last name must be at least 2 characters.";
  } else if (fields.lastName.length > 50) {
    errors.lastName = "Last name must be 50 characters or less.";
  } else if (!NAME_REGEX.test(fields.lastName)) {
    errors.lastName = "Last name can only contain letters, spaces, and hyphens.";
  }

  // Email
  if (!fields.email) {
    errors.email = "Email is required.";
  } else if (!EMAIL_REGEX.test(fields.email)) {
    errors.email = "Please enter a valid email address.";
  }

  // Website (optional)
  if (fields.website && !URL_REGEX.test(fields.website)) {
    errors.website =
      "Please enter a valid URL starting with http:// or https://.";
  }

  // Message
  if (!fields.message) {
    errors.message = "Message is required.";
  } else if (fields.message.length < 10) {
    errors.message = "Message must be at least 10 characters.";
  } else if (fields.message.length > 2000) {
    errors.message = "Message must be 2000 characters or less.";
  }

  return errors;
}

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMessage("");

    // Rate-limit: block re-submissions within 5 seconds
    const now = Date.now();
    if (now - lastSubmitTime < 5000) {
      setErrors({
        firstName: "Please wait a few seconds before submitting again.",
      });
      return;
    }

    // Sanitize inputs
    const sanitized = {
      firstName: sanitize(firstName),
      lastName: sanitize(lastName),
      email: sanitize(email),
      website: sanitize(website),
      message: sanitize(message),
    };

    // Validate
    const validationErrors = validate(sanitized);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    // All good — submit
    setIsSubmitting(true);
    setLastSubmitTime(now);

    // Simulate async submission (replace with real API call)
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage(
        "Your message has been sent successfully! We'll get back to you soon."
      );
      setFirstName("");
      setLastName("");
      setEmail("");
      setWebsite("");
      setMessage("");
      setErrors({});
    }, 800);
  };

  const inputBase =
    "w-full bg-white border rounded-xl px-6 py-4 outline-none transition-colors text-[#111111]";
  const inputNormal = `${inputBase} border-[#EBE1D5] focus:border-[#FF6A00]`;
  const inputError = `${inputBase} border-red-400 focus:border-red-500`;

  return (
    <main className="min-h-screen bg-[#F6F2EF] flex flex-col">
      <section className="pt-32 lg:pt-56 pb-16 px-6 flex-grow flex items-start">
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-12 lg:gap-32 items-start">
          {/* Left Side: Contact Info */}
          <div className="w-full lg:w-2/5">
            <h1
              className="text-[48px] sm:text-[64px] md:text-[80px] font-bold text-[#FF6A00] leading-none mb-8"
              style={{ fontFamily: "'Cal Sans', sans-serif" }}
            >
              Contact Us
            </h1>
            <p
              className="text-[#111111] text-xl font-medium leading-relaxed max-w-sm mb-16"
              style={{ fontFamily: "var(--font-poppins), sans-serif" }}
            >
              Let&apos;s discuss your goals and build something meaningful
              together.
            </p>

            <div className="space-y-10">
              <div className="flex items-center gap-6">
                <Mail size={24} className="text-[#FF6A00]" />
                <span
                  className="text-[#111111] text-lg font-medium"
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  softlabs300@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-6">
                <Phone size={24} className="text-[#FF6A00]" />
                <span
                  className="text-[#111111] text-lg font-medium"
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  +250 788888888
                </span>
              </div>

              <div className="flex items-center gap-6">
                <MapPin size={24} className="text-[#FF6A00]" />
                <span
                  className="text-[#111111] text-lg font-medium"
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  Based in Kigali, Rwanda
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="w-full lg:w-3/5">
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* First Name */}
                <div className="space-y-2">
                  <label
                    className="text-[12px] font-bold text-[#111111]/60 uppercase tracking-widest"
                    style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    maxLength={50}
                    className={errors.firstName ? inputError : inputNormal}
                    style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                {/* Last Name */}
                <div className="space-y-2">
                  <label
                    className="text-[12px] font-bold text-[#111111]/60 uppercase tracking-widest"
                    style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    maxLength={50}
                    className={errors.lastName ? inputError : inputNormal}
                    style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label
                  className="text-[12px] font-bold text-[#111111]/60 uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={errors.email ? inputError : inputNormal}
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Website */}
              <div className="space-y-2">
                <label
                  className="text-[12px] font-bold text-[#111111]/60 uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  Website (Optional)
                </label>
                <input
                  type="url"
                  placeholder="https://yourcompany.com"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className={errors.website ? inputError : inputNormal}
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                />
                {errors.website && (
                  <p className="text-red-500 text-sm mt-1">{errors.website}</p>
                )}
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label
                  className="text-[12px] font-bold text-[#111111]/60 uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                >
                  Message
                </label>
                <textarea
                  rows={6}
                  placeholder="Your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  maxLength={2000}
                  className={`${
                    errors.message ? inputError : inputNormal
                  } resize-none`}
                  style={{ fontFamily: "var(--font-poppins), sans-serif" }}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Success Message */}
              {successMessage && (
                <div className="bg-green-50 border border-green-300 text-green-700 rounded-xl px-6 py-4 text-center font-medium">
                  {successMessage}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-bold py-5 rounded-full transition-all text-lg shadow-xl shadow-orange-500/10 ${
                  isSubmitting
                    ? "bg-[#FF6A00]/60 text-white/80 cursor-not-allowed"
                    : "bg-[#FF6A00] text-white hover:scale-[1.02] active:scale-95"
                }`}
                style={{ fontFamily: "var(--font-poppins), sans-serif" }}
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
