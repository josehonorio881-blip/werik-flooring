import { TreePine, Grid3x3, Hammer, Home, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const SERVICES = [
  {
    id: "hardwood",
    icon: TreePine,
    title: "Hardwood Flooring",
    desc: "Professional hardwood floor installation, repair, refinishing, and replacement for residential and commercial spaces.",
  },
  {
    id: "tile",
    icon: Grid3x3,
    title: "Tile & Ceramic",
    desc: "High-quality ceramic and tile installation for bathrooms, kitchens, floors, backsplashes, and more.",
  },
  {
    id: "wood",
    icon: Hammer,
    title: "Green Wood",
    desc: "Green wood and custom wood solutions with durable materials and professional finishing.",
  },
  {
    id: "roof",
    icon: Home,
    title: "Roofing",
    desc: "Reliable roofing services focused on durability, protection, and clean execution.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32 bg-surface/30">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl mb-14">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon mb-4">
            / What we do
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gradient">
            Services engineered for lasting results.
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service, i) => (
            <Reveal key={service.id} delay={i * 100}>
              <article className="card-hover group relative h-full rounded-2xl border border-border bg-surface p-7 overflow-hidden">
                {/* corner accent */}
                <div className="absolute top-0 right-0 size-24 bg-neon/5 blur-2xl group-hover:bg-neon/20 transition-colors" />

                <div className="relative">
                  <div className="size-12 rounded-xl bg-neon/10 border border-neon/30 flex items-center justify-center mb-6">
                    <service.icon className="size-6 text-neon" />
                  </div>
                  <h3 className="font-display text-xl font-bold mb-2 text-emerald-500">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <a
                    href="#gallery"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-neon hover:gap-3 transition-all"
                  >
                    View Gallery
                    <ArrowUpRight className="size-4" />
                  </a>
                </div>

                {/* bottom border line */}
                <div className="absolute inset-x-7 bottom-0 h-px bg-gradient-to-r from-transparent via-neon to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
