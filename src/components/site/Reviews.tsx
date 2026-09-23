import { Star, Quote, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";
import client1 from "@/assets/client-1.jpg";
import client2 from "@/assets/client-2.jpg";
import client3 from "@/assets/client-3.jpg";
import client4 from "@/assets/client-4.jpg";
import { SITE } from "@/lib/site";

function GoogleMark({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47a5.57 5.57 0 0 1-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09A11.99 11.99 0 0 0 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.29A7.2 7.2 0 0 1 4.89 12c0-.8.14-1.57.38-2.29V6.62H1.29a12 12 0 0 0 0 10.76l3.98-3.09z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.69 1.29 6.62l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z"
      />
    </svg>
  );
}

const REVIEWS = [
  {
    name: "Michael R.",
    photo: client1,
    rating: 5,
    source: "Google",
    text: "WERIK FLOORING LLC did an amazing job on our hardwood floors. The team was professional, fast, and the final result looks beautiful.",
  },
  {
    name: "Amanda S.",
    photo: client2,
    rating: 5,
    source: "Google",
    text: "Great price, great communication, and excellent tile work. I highly recommend them for anyone in the Charleston area.",
  },
  {
    name: "Robert J.",
    photo: client3,
    rating: 5,
    source: "Google",
    text: "They replaced our old flooring and the difference is incredible. Very clean work and reliable professionals.",
  },
  {
    name: "Jessica M.",
    photo: client4,
    rating: 5,
    source: "Google",
    text: "Our roof repair was done quickly and professionally. The team explained everything and delivered exactly what they promised.",
  },
];

const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "WERIK FLOORING LLC Charleston SC"
)}`;

const REVIEW_URL = "https://share.google/jexeAvft6hZP3oMjR";

export function Reviews() {
  return (
    <section id="reviews" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl mb-14">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon mb-4">
            / Testimonials
          </p>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-gradient">
            What Our Clients Say
          </h2>
        </Reveal>

        {/* Google My Business / Maps banner */}
        <Reveal className="mb-10">
          <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8 backdrop-blur card-hover">
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="flex items-center gap-4 shrink-0">
                <GoogleMark className="size-12" />
                <div>
                  <p className="text-4xl font-display font-bold text-foreground">
                    4.9
                  </p>
                  <div className="flex gap-0.5 mt-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-neon text-neon" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex-1 sm:border-l sm:border-border sm:pl-6">
                <p className="font-display text-lg font-bold text-foreground">
                  Find us on Google My Business &amp; Google Maps
                </p>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                  We are also on Google — check our profile, see real customer
                  reviews, photos of our work, and leave your own review. Serving
                  {` ${SITE.region}`} and surrounding areas.
                </p>
              </div>
              <div className="shrink-0 flex flex-col sm:flex-row items-stretch gap-3">
                <a
                  href={REVIEW_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-neon text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  <Star className="size-4 fill-current" />
                  Leave a Review
                </a>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-border text-sm font-semibold text-foreground hover:bg-accent transition-colors"
                >
                  <MapPin className="size-4 text-neon" />
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.name} delay={i * 90}>
              <article className="card-hover h-full rounded-2xl border border-border bg-surface p-6 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <Quote className="size-6 text-neon/40" />
                  {r.source === "Google" && <GoogleMark className="size-4" />}
                </div>
                <p className="text-sm text-foreground/90 leading-relaxed flex-1">
                  “{r.text}”
                </p>
                <div className="mt-5 flex items-center gap-3 pt-5 border-t border-border">
                  <img
                    src={r.photo}
                    alt={r.name}
                    width={48}
                    height={48}
                    loading="lazy"
                    className="size-11 rounded-full object-cover border border-border"
                  />
                  <div>
                    <p className="text-sm font-semibold">{r.name}</p>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <div className="flex gap-0.5">
                        {Array.from({ length: r.rating }).map((_, idx) => (
                          <Star
                            key={idx}
                            className="size-3 fill-neon text-neon"
                          />
                        ))}
                      </div>
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                        via Google
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Rated{" "}
            <span className="text-foreground font-semibold">4.9 / 5</span> by our
            customers on{" "}
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="text-neon hover:underline inline-flex items-center gap-1"
            >
              <GoogleMark className="size-3.5" /> Google
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
