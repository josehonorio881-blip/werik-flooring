import { useState, type FormEvent } from "react";
import { Phone, Mail, Instagram, Send, CheckCircle2, Upload } from "lucide-react";
import { SITE } from "@/lib/site";
import { Reveal } from "./Reveal";
import heroBg from "@/assets/hero-bg.png";

const SERVICES = [
  "Hardwood Flooring",
  "Tile & Ceramic",
  "Green Wood",
  "Roofing",
  "Other",
];

export function Contact() {
  const [sent, setSent] = useState(false);
  const [files, setFiles] = useState<File[]>([]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    const service = String(data.get("service") || "").trim();
    const location = String(data.get("location") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !phone) return;

    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Service Needed: ${service}`,
      `Project Location: ${location}`,
      "",
      "Message:",
      message,
      "",
      files.length > 0
        ? `(${files.length} photo(s) attached - please attach manually in your email client)`
        : "",
    ].join("\n");

    const subject = `New Estimate Request — ${name}`;
    const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSent(true);
    setTimeout(() => setSent(false), 6000);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-background/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/25 to-background/85" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 size-[700px] rounded-full bg-neon/10 blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Left column */}
          <Reveal className="lg:col-span-2">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon mb-4">
              / Contact
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-gradient leading-tight">
              Request Your Free Estimate
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Tell us about your project. We'll get back to you with a fair,
              honest quote — no obligation.
            </p>

            <div className="mt-10 space-y-3">
              <a
                href={SITE.phoneHref}
                className="btn-tech group flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 hover:border-neon transition-colors"
              >
                <span className="size-11 shrink-0 rounded-xl bg-neon/10 border border-neon/30 flex items-center justify-center group-hover:bg-neon group-hover:text-primary-foreground transition-colors">
                  <Phone className="size-5 text-neon group-hover:text-primary-foreground" />
                </span>
                <div>
                  <p className="text-[10px] uppercase font-mono tracking-[0.2em] text-muted-foreground">
                    Call Now
                  </p>
                  <p className="text-sm font-semibold">{SITE.phone}</p>
                </div>
              </a>
              <a
                href={SITE.emailHref}
                className="btn-tech group flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 hover:border-neon transition-colors"
              >
                <span className="size-11 shrink-0 rounded-xl bg-neon/10 border border-neon/30 flex items-center justify-center group-hover:bg-neon group-hover:text-primary-foreground transition-colors">
                  <Mail className="size-5 text-neon group-hover:text-primary-foreground" />
                </span>
                <div>
                  <p className="text-[10px] uppercase font-mono tracking-[0.2em] text-muted-foreground">
                    Send Email
                  </p>
                  <p className="text-sm font-semibold break-all">{SITE.email}</p>
                </div>
              </a>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noreferrer"
                className="btn-tech group flex items-center gap-4 rounded-2xl border border-border bg-surface p-5 hover:border-neon transition-colors"
              >
                <span className="size-11 shrink-0 rounded-xl bg-neon/10 border border-neon/30 flex items-center justify-center group-hover:bg-neon group-hover:text-primary-foreground transition-colors">
                  <Instagram className="size-5 text-neon group-hover:text-primary-foreground" />
                </span>
                <div>
                  <p className="text-[10px] uppercase font-mono tracking-[0.2em] text-muted-foreground">
                    Visit Instagram
                  </p>
                  <p className="text-sm font-semibold">@werikflooring</p>
                </div>
              </a>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-border bg-surface/80 backdrop-blur p-6 sm:p-8 lg:p-10 space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full Name" name="name" required />
                <Field label="Phone Number" name="phone" type="tel" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Email" name="email" type="email" required />
                <SelectField label="Service Needed" name="service" options={SERVICES} />
              </div>
              <Field label="Project Location" name="location" placeholder="Charleston, SC" />

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  maxLength={1000}
                  required
                  className="w-full rounded-xl bg-background border border-border px-4 py-3 text-sm focus:border-neon focus:outline-none focus:ring-2 focus:ring-neon/20 transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* Upload */}
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  Upload Photos (optional)
                </label>
                <label className="flex items-center gap-3 rounded-xl border border-dashed border-border bg-background px-4 py-4 cursor-pointer hover:border-neon transition-colors">
                  <Upload className="size-5 text-neon" />
                  <span className="text-sm text-muted-foreground">
                    {files.length > 0
                      ? `${files.length} file(s) selected`
                      : "Click to add photos of your project"}
                  </span>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    className="hidden"
                    onChange={(e) => setFiles(Array.from(e.target.files || []))}
                  />
                </label>
              </div>

              <button
                type="submit"
                className="btn-tech w-full inline-flex items-center justify-center gap-2 rounded-full bg-neon text-primary-foreground font-semibold py-4 hover:glow-strong transition-shadow"
              >
                {sent ? (
                  <>
                    <CheckCircle2 className="size-5" /> Opening your email...
                  </>
                ) : (
                  <>
                    Send Request <Send className="size-4" />
                  </>
                )}
              </button>

              <p className="text-[11px] text-muted-foreground text-center">
                Submitting will open your email app addressed to {SITE.email}.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}

function Field({ label, name, type = "text", required, placeholder }: FieldProps) {
  return (
    <div>
      <label className="block text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-2">
        {label} {required && <span className="text-neon">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        maxLength={255}
        placeholder={placeholder}
        className="w-full rounded-xl bg-background border border-border px-4 py-3 text-sm focus:border-neon focus:outline-none focus:ring-2 focus:ring-neon/20 transition-all"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label className="block text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-2">
        {label}
      </label>
      <select
        name={name}
        defaultValue=""
        className="w-full rounded-xl bg-background border border-border px-4 py-3 text-sm focus:border-neon focus:outline-none focus:ring-2 focus:ring-neon/20 transition-all appearance-none cursor-pointer"
      >
        <option value="" disabled>
          Select a service...
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
