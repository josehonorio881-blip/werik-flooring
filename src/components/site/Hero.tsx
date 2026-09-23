import { ArrowRight, Phone, Mail, Instagram, Star } from "lucide-react";
import { SITE } from "@/lib/site";
import heroImg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt=""
          className="w-full h-full object-cover object-center opacity-100"
          width={1920}
          height={1080}
        />
        {/* subtle overlay for text legibility */}
        <div className="absolute inset-0 bg-background/15" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-transparent" />
        <div className="absolute inset-0 grid-bg opacity-15" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-neon/10 blur-3xl animate-float-pulse" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        {/* Quick contact bar */}
        <div className="hidden md:flex items-center justify-end gap-6 mb-12 text-xs">
          <a
            href={SITE.phoneHref}
            className="flex items-center gap-2 text-muted-foreground hover:text-neon transition-colors"
          >
            <Phone className="size-3.5" /> {SITE.phone}
          </a>
          <a
            href={SITE.emailHref}
            className="flex items-center gap-2 text-muted-foreground hover:text-neon transition-colors"
          >
            <Mail className="size-3.5" /> {SITE.email}
          </a>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-neon transition-colors"
          >
            <Instagram className="size-3.5" /> @werikflooring
          </a>
        </div>

        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface/60 backdrop-blur text-xs font-mono uppercase tracking-[0.25em] text-neon mb-8 animate-in fade-in slide-in-from-top-4 duration-700">
            <span className="size-1.5 rounded-full bg-neon animate-pulse" />
            Charleston · 20+ years experience
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight animate-in fade-in slide-in-from-bottom-6 duration-700 [text-shadow:0_2px_20px_rgba(0,0,0,0.6)]">
            <span className="text-white">Reliable Flooring &amp;</span>
            <br />
            <span className="text-white">Construction Services in </span>
            <span className="text-white">Charleston</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/90 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 [text-shadow:0_2px_12px_rgba(0,0,0,0.5)]">
            Over 20 years of experience delivering high-quality flooring, tile,
            wood, and roofing services with skilled professionals and fair prices.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
            <a
              href="#contact"
              className="btn-tech group inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-neon text-primary-foreground font-semibold text-sm hover:glow-strong transition-shadow"
            >
              Get a Free Estimate
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-border bg-surface/60 backdrop-blur text-foreground hover:border-neon hover:text-neon transition-all text-sm font-semibold"
            >
              View Our Work
            </a>
          </div>

          {/* Stat strip */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden border border-border max-w-3xl">
            {[
              { value: "20+", label: "Years" },
              { value: "500+", label: "Projects" },
              { value: "4.9", label: "Rating", icon: true },
              { value: "100%", label: "Local" },
            ].map((s) => (
              <div key={s.label} className="bg-surface px-5 py-4">
                <div className="flex items-center gap-1.5 text-2xl font-display font-bold text-foreground text-emerald-500">
                  {s.value}
                  {s.icon && <Star className="size-4 fill-neon text-neon" />}
                </div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background pointer-events-none" />
    </section>
  );
}
