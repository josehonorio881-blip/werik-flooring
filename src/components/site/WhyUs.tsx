import { Check } from "lucide-react";
import { Reveal } from "./Reveal";

const REASONS = [
  "More than 20 years of experience",
  "Fair and competitive prices",
  "Professional and clean work",
  "Local service in Charleston",
  "Flooring, tile, wood, and roofing solutions",
  "Free estimates available",
];

export function WhyUs() {
  return (
    <section className="relative py-24 lg:py-32 bg-surface/30 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute -top-40 -right-40 size-[500px] rounded-full bg-neon/10 blur-3xl animate-float-pulse" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl mb-14">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon mb-4">
            / Why us
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gradient">
            Why Choose WERIK FLOORING LLC?
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {REASONS.map((reason, i) => (
            <Reveal key={reason} delay={i * 80}>
              <div className="card-hover h-full rounded-2xl border border-border bg-surface p-6 flex items-start gap-4">
                <div className="size-10 shrink-0 rounded-lg bg-neon/10 border border-neon/40 flex items-center justify-center">
                  <Check className="size-5 text-neon" />
                </div>
                <p className="text-base font-medium leading-snug pt-1.5">
                  {reason}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
