import { useEffect, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import heroBg from "@/assets/hero-bg.png";
import hardwood1 from "@/assets/hardwood-1.jpg";
import hardwood2 from "@/assets/hardwood-2.jpg";
import hardwood3 from "@/assets/hardwood-3.jpg";
import hardwood4 from "@/assets/hardwood-4.jpg";
import hardwood5 from "@/assets/hardwood-5.jpg";
import hardwood6 from "@/assets/hardwood-6.jpg";
import hardwood7 from "@/assets/hardwood-7.jpg";
import hardwood8 from "@/assets/hardwood-8.jpg";
import hardwood9 from "@/assets/hardwood-9.jpg";
import hardwood10 from "@/assets/hardwood-10.jpg";
import hardwood11 from "@/assets/hardwood-11.jpg";
import hardwood12 from "@/assets/hardwood-12.jpg";
import hardwood13 from "@/assets/hardwood-13.jpg";
import hardwood14 from "@/assets/hardwood-14.jpg";
import hardwood15 from "@/assets/hardwood-15.jpg";
import hardwood16 from "@/assets/hardwood-16.jpg";
import hardwood17 from "@/assets/hardwood-17.jpg";
import hardwood18 from "@/assets/hardwood-18.jpg";
import hardwood19 from "@/assets/hardwood-19.jpg";
import hardwood20 from "@/assets/hardwood-20.jpg";
import hardwood21 from "@/assets/hardwood-21.jpg";
import hardwood22 from "@/assets/hardwood-22.jpg";
import hardwood23 from "@/assets/hardwood-23.jpg";
import hardwood24 from "@/assets/hardwood-24.jpg";
import tile1 from "@/assets/tile-1.jpg";
import tile2 from "@/assets/tile-2.jpg";
import tile3 from "@/assets/tile-3.jpg";
import tile4 from "@/assets/tile-4.jpg";
import tile5 from "@/assets/tile-5.jpg";
import tile6 from "@/assets/tile-6.jpg";
import tile7 from "@/assets/tile-7.jpg";
import tile8 from "@/assets/tile-8.jpg";
import tile9 from "@/assets/tile-9.jpg";
import tile10 from "@/assets/tile-10.jpg";
import tile11 from "@/assets/tile-11.jpg";
import tile12 from "@/assets/tile-12.jpg";
import wood1 from "@/assets/wood-1.jpg";
import wood2 from "@/assets/wood-2.jpg";
import roof1 from "@/assets/roof-1.jpg";
import roof2 from "@/assets/roof-2.jpg";
import demo1 from "@/assets/demo-1.jpg";
import demo2 from "@/assets/demo-2.jpg";
import demo3 from "@/assets/demo-3.jpg";
import demo4 from "@/assets/demo-4.jpg";
import demo5 from "@/assets/demo-5.jpg";
import demo6 from "@/assets/demo-6.jpg";
import demo7 from "@/assets/demo-7.jpg";
import demo8 from "@/assets/demo-8.jpg";
import demo9 from "@/assets/demo-9.jpg";
import demo10 from "@/assets/demo-10.jpg";
import stairs1 from "@/assets/stairs-1.jpg";
import stairs2 from "@/assets/stairs-2.jpg";
import stairs3 from "@/assets/stairs-3.jpg";
import stairs4 from "@/assets/stairs-4.jpg";
import stairs5 from "@/assets/stairs-5.jpg";
import stairs6 from "@/assets/stairs-6.jpg";
import stairs7 from "@/assets/stairs-7.jpg";
import stairs8 from "@/assets/stairs-8.jpg";
import stairs9 from "@/assets/stairs-9.jpg";
import stairs10 from "@/assets/stairs-10.jpg";
import stairs11 from "@/assets/stairs-11.jpg";
import stairs12 from "@/assets/stairs-12.jpg";
import stairs13 from "@/assets/stairs-13.jpg";
import stairs14 from "@/assets/stairs-14.jpg";

type Category = "all" | "hardwood" | "tile" | "wood" | "roof" | "demo" | "stairs";

interface Project {
  id: string;
  src: string;
  category: Exclude<Category, "all">;
  title: string;
}

const PROJECTS: Project[] = [
  { id: "h1", src: hardwood1, category: "hardwood", title: "Red Oak Refinishing" },
  { id: "h2", src: hardwood2, category: "hardwood", title: "Glossy Oak Bedroom" },
  { id: "h3", src: hardwood3, category: "hardwood", title: "Natural Oak Finish" },
  { id: "h4", src: hardwood4, category: "hardwood", title: "Wide Plank Laminate" },
  { id: "h5", src: hardwood5, category: "hardwood", title: "Rustic Stained Hallway" },
  { id: "h6", src: hardwood6, category: "hardwood", title: "Wide Plank Kitchen Floor" },
  { id: "h7", src: hardwood7, category: "hardwood", title: "Dark Oak Dining Room" },
  { id: "h8", src: hardwood8, category: "hardwood", title: "Glossy Oak Kitchen" },
  { id: "h9", src: hardwood9, category: "hardwood", title: "Reclaimed Pine Plank" },
  { id: "h10", src: hardwood10, category: "hardwood", title: "Polished Red Oak Living Room" },
  { id: "h11", src: hardwood11, category: "hardwood", title: "Commercial Laminate Hallway" },
  { id: "h12", src: hardwood12, category: "hardwood", title: "Rustic Pine Bedroom" },
  { id: "h13", src: hardwood13, category: "hardwood", title: "Light Oak Workspace" },
  { id: "h14", src: hardwood14, category: "hardwood", title: "Golden Oak Hallway" },
  { id: "h15", src: hardwood15, category: "hardwood", title: "Fresh Coat Refinishing" },
  { id: "h16", src: hardwood16, category: "hardwood", title: "Glossy Kitchen Oak" },
  { id: "h17", src: hardwood17, category: "hardwood", title: "Bathroom Oak Transition" },
  { id: "h18", src: hardwood18, category: "hardwood", title: "Sunlit Red Oak Room" },
  { id: "h19", src: hardwood19, category: "hardwood", title: "Stained Pine Open Floor" },
  { id: "h20", src: hardwood20, category: "hardwood", title: "Modern Light Vinyl Plank" },
  { id: "h21", src: hardwood21, category: "hardwood", title: "Acacia Plank Great Room" },
  { id: "h22", src: hardwood22, category: "hardwood", title: "Acacia Open Floor Plan" },
  { id: "h23", src: hardwood23, category: "hardwood", title: "Red Oak by the Windows" },
  { id: "h24", src: hardwood24, category: "hardwood", title: "Acacia Sunroom Install" },
  { id: "t1", src: tile1, category: "tile", title: "Slate Bathroom Tile" },
  { id: "t2", src: tile2, category: "tile", title: "Kitchen Backsplash" },
  { id: "t3", src: tile3, category: "tile", title: "Marble Walk-in Shower" },
  { id: "t4", src: tile4, category: "tile", title: "White Subway Shower" },
  { id: "t5", src: tile5, category: "tile", title: "Onyx Spa Bathroom" },
  { id: "t6", src: tile6, category: "tile", title: "Black Hexagon Shower" },
  { id: "t7", src: tile7, category: "tile", title: "Art Deco Star Tile" },
  { id: "t8", src: tile8, category: "tile", title: "Carrara Marble Master" },
  { id: "t9", src: tile9, category: "tile", title: "Pebble Floor Shower" },
  { id: "t10", src: tile10, category: "tile", title: "Hexagon Mosaic Inlay" },
  { id: "t11", src: tile11, category: "tile", title: "Geometric Star Detail" },
  { id: "t12", src: tile12, category: "tile", title: "Vertical Stack Tile" },
  { id: "w1", src: wood1, category: "wood", title: "Outdoor Wood Deck" },
  { id: "w2", src: wood2, category: "wood", title: "Custom Wood Framing" },
  { id: "r1", src: roof1, category: "roof", title: "Shingle Roof Replacement" },
  { id: "r2", src: roof2, category: "roof", title: "Roof Repair" },
  { id: "d1", src: demo1, category: "demo", title: "Full Subfloor Demolition" },
  { id: "d2", src: demo2, category: "demo", title: "Sanctuary Floor Tear-Out" },
  { id: "d3", src: demo2, category: "demo", title: "Tile & Subfloor Removal" },
  { id: "d4", src: demo3, category: "demo", title: "Joist Exposure & Prep" },
  { id: "d5", src: demo4, category: "demo", title: "Structural Floor Rebuild" },
  { id: "d6", src: demo5, category: "demo", title: "Church Hall Demolition" },
  { id: "d7", src: demo6, category: "demo", title: "Kitchen Floor Demo" },
  { id: "d8", src: demo7, category: "demo", title: "Joist Replacement Cutout" },
  { id: "d9", src: demo8, category: "demo", title: "Water Damage Tear-Out" },
  { id: "d10", src: demo9, category: "demo", title: "Sunroom Adhesive Removal" },
  { id: "d11", src: demo10, category: "demo", title: "Concrete Surface Prep" },
  { id: "s1", src: stairs1, category: "stairs", title: "Two-Story Oak Staircase" },
  { id: "s2", src: stairs2, category: "stairs", title: "Industrial Reclaimed Wood Stairs" },
  { id: "s3", src: stairs3, category: "stairs", title: "Red Oak Treads & White Risers" },
  { id: "s4", src: stairs4, category: "stairs", title: "Unfinished Oak Tread Install" },
  { id: "s5", src: stairs5, category: "stairs", title: "New Pressure-Treated Front Steps" },
  { id: "s6", src: stairs6, category: "stairs", title: "Refinished Oak Foyer Stairs" },
  { id: "s7", src: stairs7, category: "stairs", title: "Exterior Stair Rebuild" },
  { id: "s8", src: stairs8, category: "stairs", title: "Porch Landing & Steps" },
  { id: "s9", src: stairs9, category: "stairs", title: "Pine Deck Detail" },
  { id: "s10", src: stairs10, category: "stairs", title: "Custom Side Entry Stairs" },
  { id: "s11", src: stairs11, category: "stairs", title: "Two-Story Oak Foyer Staircase" },
  { id: "s12", src: stairs12, category: "stairs", title: "Dark Stained Oak Treads" },
  { id: "s13", src: stairs13, category: "stairs", title: "Walnut Stained Risers" },
  { id: "s14", src: stairs14, category: "stairs", title: "Pressure-Treated Porch Stairs" },
];

const FILTERS: { id: Category; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "hardwood", label: "Hardwood Flooring" },
  { id: "tile", label: "Tile & Ceramic" },
  { id: "wood", label: "Green Wood" },
  { id: "roof", label: "Roofing" },
  { id: "demo", label: "Demolition" },
  { id: "stairs", label: "Stairs" },
];

export function Gallery() {
  const [filter, setFilter] = useState<Category>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(
    () =>
      setLightboxIndex((i) =>
        i === null ? null : (i - 1 + filtered.length) % filtered.length,
      ),
    [filtered.length],
  );
  const next = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length)),
    [filtered.length],
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, close, prev, next]);

  return (
    <section id="gallery" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-background/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/55 via-background/25 to-background/85" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-10">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon mb-4">
            / Project gallery
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gradient max-w-2xl">
            Real projects. Real results.
          </h2>
        </Reveal>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={cn(
                "px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider border transition-all",
                filter === f.id
                  ? "bg-neon text-primary-foreground border-neon glow"
                  : "bg-surface border-border text-muted-foreground hover:border-neon hover:text-neon",
              )}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project, i) => (
            <Reveal key={project.id} delay={i * 60}>
              <button
                onClick={() => setLightboxIndex(i)}
                className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-border bg-surface block"
              >
                <img
                  src={project.src}
                  alt={project.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="absolute inset-0 size-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                <div className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-full flex items-end justify-between gap-3">
                    <div>
                      <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-neon">
                        {project.category}
                      </p>
                      <p className="text-sm font-semibold mt-1">{project.title}</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neon text-primary-foreground text-[11px] font-semibold">
                      <ZoomIn className="size-3" />
                      View Project
                    </span>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute top-4 right-4 size-11 rounded-full bg-surface border border-border flex items-center justify-center hover:border-neon hover:text-neon transition-colors"
            aria-label="Close"
          >
            <X className="size-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 size-12 rounded-full bg-surface border border-border flex items-center justify-center hover:border-neon hover:text-neon transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 size-12 rounded-full bg-surface border border-border flex items-center justify-center hover:border-neon hover:text-neon transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="size-5" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl max-h-[85vh] w-full"
          >
            <img
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].title}
              className="w-full h-full max-h-[80vh] object-contain rounded-xl"
            />
            <div className="text-center mt-4">
              <p className="text-[10px] font-mono uppercase tracking-[0.3em] text-neon">
                {filtered[lightboxIndex].category}
              </p>
              <p className="font-display text-lg font-semibold mt-1">
                {filtered[lightboxIndex].title}
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                {lightboxIndex + 1} / {filtered.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
