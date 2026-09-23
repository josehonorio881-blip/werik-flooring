import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site";
import logo from "@/assets/logo.png";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 lg:h-20 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Werik Flooring LLC"
            className="h-9 lg:h-11 w-auto opacity-95 group-hover:opacity-100 transition-opacity"
            width={44}
            height={44}
          />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-sm font-bold tracking-wider">
              WERIK FLOORING
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              LLC · Charleston
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {item.label}
              <span className="absolute left-3 right-3 -bottom-0.5 h-px bg-neon scale-x-0 group-hover:scale-x-100 origin-left transition-transform" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={SITE.phoneHref}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon text-primary-foreground font-medium text-sm btn-tech hover:glow-strong transition-shadow"
          >
            <Phone className="size-4" />
            <span>Call Now</span>
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 rounded-md border border-border bg-surface"
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-[max-height] duration-300 bg-background/95 backdrop-blur-xl border-b border-border",
          open ? "max-h-96" : "max-h-0",
        )}
      >
        <nav className="flex flex-col px-4 py-4 gap-1">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="px-3 py-3 text-sm border-b border-border/50 text-foreground/90 hover:text-neon transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href={SITE.phoneHref}
            className="mt-3 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-neon text-primary-foreground font-medium text-sm"
          >
            <Phone className="size-4" /> Call {SITE.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
