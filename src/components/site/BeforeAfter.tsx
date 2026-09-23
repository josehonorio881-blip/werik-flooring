import { Reveal } from "./Reveal";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";

const PAIRS = [
  { id: "1", before: before1, after: after1, title: "Hardwood Refinishing" },
  { id: "2", before: before2, after: after2, title: "Bathroom Tile Renovation" },
];

export function BeforeAfter() {
  return (
    <section className="relative py-24 lg:py-32 bg-surface/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl mb-14">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon mb-4">
            / Before &amp; after
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gradient mb-4">
            See the transformation.
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg">
            From old surfaces to clean, modern, and durable results.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-6">
          {PAIRS.map((pair, i) => (
            <Reveal key={pair.id} delay={i * 120}>
              <div className="rounded-2xl border border-border bg-surface overflow-hidden card-hover">
                <div className="grid grid-cols-2 gap-px bg-border">
                  <figure className="relative aspect-[4/3] bg-background">
                    <img
                      src={pair.before}
                      alt={`${pair.title} before`}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="absolute inset-0 size-full object-cover"
                    />
                    <figcaption className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-background/80 backdrop-blur text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground border border-border">
                      Before
                    </figcaption>
                  </figure>
                  <figure className="relative aspect-[4/3] bg-background">
                    <img
                      src={pair.after}
                      alt={`${pair.title} after`}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="absolute inset-0 size-full object-cover"
                    />
                    <figcaption className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-neon text-primary-foreground text-[10px] font-mono uppercase tracking-[0.2em] font-bold">
                      After
                    </figcaption>
                  </figure>
                </div>
                <div className="px-5 py-4 border-t border-border">
                  <p className="font-display font-semibold">{pair.title}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
