import { Mail, Phone, Instagram, MapPin } from "lucide-react";
import { SITE } from "@/lib/site";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-surface/50">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neon to-transparent opacity-50" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="" className="h-10 w-auto" width={40} height={40} />
              <div>
                <p className="font-display font-bold tracking-wider">WERIK FLOORING LLC</p>
                <p className="text-xs text-muted-foreground tracking-wide">
                  {SITE.tagline}
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed max-w-md">
              Skilled hardwood, tile, custom wood, and roofing professionals
              serving Charleston and the surrounding area for over 20 years.
            </p>
          </div>

          <div>
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-neon mb-4">
              Contact
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={SITE.phoneHref}
                  className="flex items-center gap-3 text-muted-foreground hover:text-neon transition-colors"
                >
                  <Phone className="size-4" /> {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={SITE.emailHref}
                  className="flex items-center gap-3 text-muted-foreground hover:text-neon transition-colors break-all"
                >
                  <Mail className="size-4 shrink-0" /> {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-neon transition-colors"
                >
                  <Instagram className="size-4" /> @werikflooring
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=WERIK%20FLOORING%20LLC%20Charleston%20SC"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-neon transition-colors"
                >
                  <MapPin className="size-4" /> Find us on Google Maps
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-mono uppercase tracking-[0.25em] text-neon mb-4">
              Services
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Hardwood Flooring</li>
              <li>Tile &amp; Ceramic</li>
              <li>Green Wood</li>
              <li>Roofing</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} WERIK FLOORING LLC. All rights reserved.</p>
          <p className="font-mono tracking-wider">CHARLESTON · SC</p>
        </div>
      </div>
    </footer>
  );
}
