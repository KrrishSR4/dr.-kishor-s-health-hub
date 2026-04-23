import { Link } from "@tanstack/react-router";
import { Stethoscope, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { SITE, buildWhatsAppUrl } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-[image:var(--gradient-soft)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[image:var(--gradient-primary)] text-primary-foreground">
              <Stethoscope className="h-5 w-5" />
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">Dr. Naval Kishor</div>
              <div className="text-xs text-muted-foreground">MBBS, Orthopedic Ex-Surgeon</div>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Compassionate orthopedic care backed by 30+ years of clinical and surgical experience.
            Formerly Prabhari (In-Charge), Darbhanga Anumandal Hospital.
          </p>
          <a
            href={buildWhatsAppUrl("Hi, I'd like to book an appointment with Dr. Naval Kishor.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent/15 px-3 py-1.5 text-xs font-medium text-accent hover:bg-accent/25"
          >
            <MessageCircle className="h-3.5 w-3.5" /> Chat on WhatsApp
          </a>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary">About</Link></li>
            <li><Link to="/services" className="hover:text-primary">Services</Link></li>
            <li><Link to="/clinics" className="hover:text-primary">Clinics</Link></li>
            <li><Link to="/appointment" className="hover:text-primary">Book Appointment</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 text-primary" /> <a href={`tel:${SITE.phoneRaw}`} className="hover:text-primary">{SITE.phone}</a></li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 text-primary" /> <a href={`mailto:${SITE.email}`} className="hover:text-primary">{SITE.email}</a></li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 text-primary" /> {SITE.location.lat}, {SITE.location.lng}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Dr. Naval Kishor. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
