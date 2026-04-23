import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bone, Activity, HeartPulse, Stethoscope, ClipboardList, Baby, Accessibility, Syringe } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Orthopedic Services — Dr. Naval Kishor" },
      { name: "description", content: "Fracture care, joint pain, arthritis, sports injuries, geriatric orthopedics, medical checkups and personal consultations." },
      { property: "og:title", content: "Orthopedic Services — Dr. Naval Kishor" },
      { property: "og:description", content: "Comprehensive orthopedic and consultation services." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Bone, title: "Fracture & Trauma Care", desc: "Assessment, casting, follow-up and rehabilitation guidance for fractures and orthopedic trauma." },
  { icon: Activity, title: "Joint Pain & Arthritis", desc: "Knee, hip, shoulder and back pain — diagnosis, medication management and lifestyle advice." },
  { icon: HeartPulse, title: "Geriatric Orthopedics", desc: "Osteoporosis evaluation, fall prevention and mobility care for elderly patients." },
  { icon: Accessibility, title: "Sports Injury Consultation", desc: "Ligament, tendon and muscle injuries — clinical evaluation and recovery planning." },
  { icon: Stethoscope, title: "Personal Consultation", desc: "Unhurried one-on-one consultations focused on your history and concerns." },
  { icon: ClipboardList, title: "Medical Checkup", desc: "Comprehensive orthopedic checkup with bone & joint health evaluation." },
  { icon: Baby, title: "Pediatric Orthopedics", desc: "Growth-related concerns, posture, gait issues and minor pediatric orthopedic problems." },
  { icon: Syringe, title: "Post-Operative Follow-up", desc: "Recovery review, dressing guidance and physiotherapy referrals after surgery." },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="bg-[image:var(--gradient-hero)]">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center md:py-20">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">Services & Treatments</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            A full spectrum of orthopedic consultation and checkup services — delivered with warmth,
            patience and decades of clinical judgment.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Card key={s.title} className="group p-6 transition-[var(--transition-smooth)] hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-[image:var(--gradient-primary)] group-hover:text-primary-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-[image:var(--gradient-soft)] p-8 text-center">
          <h3 className="text-2xl font-semibold text-foreground">Not sure what you need?</h3>
          <p className="mx-auto mt-2 max-w-xl text-muted-foreground">
            Book a personal consultation — Dr. Kishor will guide you on the right next step.
          </p>
          <Link to="/appointment" className="mt-5 inline-block">
            <Button size="lg" className="bg-[image:var(--gradient-primary)] shadow-[var(--shadow-soft)] hover:opacity-95">
              Book Appointment
            </Button>
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
