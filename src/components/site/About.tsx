import { Award, Users, DollarSign, MapPin, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const TRUST = [
  { icon: Award, label: "20+ Years of Experience" },
  { icon: Users, label: "Skilled Professionals" },
  { icon: DollarSign, label: "Best Prices in the Area" },
  { icon: MapPin, label: "Charleston Based" },
  { icon: ShieldCheck, label: "Quality Workmanship" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon mb-4">
              / About the company
            </p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold leading-tight text-gradient">
              Built on craft, trust, and Charleston roots.
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
              At <span className="text-foreground font-semibold">WERIK FLOORING LLC</span>,
              we bring more than 20 years of experience in flooring and construction
              services across the Charleston area. Our team is formed by skilled
              professionals committed to delivering clean work, strong finishes,
              reliable timelines, and competitive prices.
            </p>
            <p className="mt-4 text-muted-foreground text-base lg:text-lg leading-relaxed">
              Whether you need hardwood flooring, tile installation, green wood,
              or roofing services, we are ready to help you transform your
              property with quality and precision.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {TRUST.map((item, i) => (
            <Reveal key={item.label} delay={i * 80}>
              <div className="card-hover h-full rounded-2xl border border-border bg-surface/70 p-5 backdrop-blur">
                <div className="size-10 rounded-lg bg-neon/10 border border-neon/30 flex items-center justify-center mb-4">
                  <item.icon className="size-5 text-neon" />
                </div>
                <p className="text-sm font-medium leading-tight text-green-400">{item.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
