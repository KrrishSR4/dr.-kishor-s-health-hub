import { Button } from "@/components/ui/button";
import { MapPin, Navigation } from "lucide-react";
import { SITE, mapsDirectionsUrl, mapsEmbedSatelliteUrl } from "@/lib/site";

export function LocationMap({ title = "Find Us on the Map" }: { title?: string }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">{title}</h2>
          <p className="mt-2 max-w-xl text-muted-foreground">
            Satellite view of our exact clinic location. Tap the button below for turn-by-turn directions.
          </p>
          <p className="mt-2 inline-flex items-center gap-2 text-sm text-foreground">
            <MapPin className="h-4 w-4 text-primary" />
            {SITE.location.lat}, {SITE.location.lng}
          </p>
        </div>
        <a href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer">
          <Button size="lg" className="bg-[image:var(--gradient-primary)] shadow-[var(--shadow-soft)] hover:opacity-95">
            <Navigation className="mr-2 h-5 w-5" /> View Directions
          </Button>
        </a>
      </div>
      <div className="mt-6 overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
        <iframe
          title="Clinic location — satellite view"
          src={mapsEmbedSatelliteUrl}
          width="100%"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: 0, display: "block" }}
          allowFullScreen
        />
      </div>
    </section>
  );
}
