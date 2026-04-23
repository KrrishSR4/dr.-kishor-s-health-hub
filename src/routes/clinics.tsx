import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, CalendarCheck, Navigation } from "lucide-react";
import { clinics } from "@/lib/clinics";
import { LocationMap } from "@/components/LocationMap";
import { mapsDirectionsUrl } from "@/lib/site";

export const Route = createFileRoute("/clinics")({
  head: () => ({
    meta: [
      { title: "Our Clinics — Dr. Naval Kishor" },
      { name: "description", content: "Two personal orthopedic clinics in Darbhanga. Find addresses, timings and contact numbers." },
      { property: "og:title", content: "Clinics — Dr. Naval Kishor" },
      { property: "og:description", content: "Visit Dr. Naval Kishor at his Darbhanga clinics." },
    ],
  }),
  component: ClinicsPage,
});

function ClinicsPage() {
  return (
    <SiteLayout>
      <section className="bg-[image:var(--gradient-hero)]">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center md:py-20">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">Our Clinics</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Dr. Naval Kishor consults at two personal clinics in Darbhanga, Bihar. Walk in during
            consultation hours or book online for a guaranteed slot.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {clinics.map((c) => (
            <Card key={c.id} className="p-7 transition-[var(--transition-smooth)] hover:shadow-[var(--shadow-card)]">
              <h2 className="text-xl font-semibold text-foreground">{c.name}</h2>
              <ul className="mt-5 space-y-3 text-sm text-foreground">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{c.address}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{c.timing}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <a href={`tel:${c.phone.replace(/\s/g, "")}`} className="hover:text-primary">{c.phone}</a>
                </li>
              </ul>
              <div className="mt-6 flex gap-3">
                <Link to="/appointment" className="flex-1">
                  <Button className="w-full bg-[image:var(--gradient-primary)] shadow-[var(--shadow-soft)] hover:opacity-95">
                    <CalendarCheck className="mr-2 h-4 w-4" /> Book Here
                  </Button>
                </Link>
                <a
                  href={mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button variant="outline" className="w-full">
                    <Navigation className="mr-2 h-4 w-4" /> View Directions
                  </Button>
                </a>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <LocationMap title="Clinic Location — Satellite View" />
    </SiteLayout>
  );
}
