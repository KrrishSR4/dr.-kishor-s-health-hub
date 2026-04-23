import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Hospital, Award, ShieldCheck, Stethoscope, CalendarCheck } from "lucide-react";
import doctorPortrait from "@/assets/doctor-portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dr. Naval Kishor — Orthopedic Ex-Surgeon" },
      { name: "description", content: "Learn about Dr. Naval Kishor — MBBS, retired orthopedic surgeon and former Prabhari (In-Charge) at Darbhanga Anumandal Hospital." },
      { property: "og:title", content: "About Dr. Naval Kishor" },
      { property: "og:description", content: "Decades of orthopedic experience in government & private practice." },
    ],
  }),
  component: AboutPage,
});

const milestones = [
  { icon: GraduationCap, title: "MBBS, Orthopedics", desc: "Trained in general medicine with specialization in orthopedic surgery." },
  { icon: Hospital, title: "Government Service", desc: "Served the public health system across multiple postings in Bihar." },
  { icon: Award, title: "Prabhari (In-Charge)", desc: "Led Darbhanga Anumandal Hospital as In-Charge, overseeing patient care and operations." },
  { icon: ShieldCheck, title: "Private Practice", desc: "Now consulting at two personal clinics, offering unhurried one-on-one care." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="bg-[image:var(--gradient-hero)]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-[1fr_1.2fr] md:py-20">
          <div className="overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-elegant)]">
            <img src={doctorPortrait} alt="Dr. Naval Kishor" width={1024} height={1280} className="h-full w-full object-cover" />
          </div>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-primary">
              <Stethoscope className="h-3.5 w-3.5" /> About the Doctor
            </span>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Dr. Naval Kishor
            </h1>
            <p className="mt-2 text-lg text-primary">MBBS • Orthopedic Ex-Surgeon</p>
            <p className="mt-5 text-muted-foreground">
              Dr. Naval Kishor is a retired orthopedic surgeon with
              <strong className="text-foreground"> over 30 years</strong> of clinical and surgical experience across
              India’s public health system. He previously served as
              <strong className="text-foreground"> Prabhari (In-Charge) at Darbhanga Anumandal Hospital</strong>,
              where he led patient care, surgical services and hospital operations.
            </p>
            <p className="mt-4 text-muted-foreground">
              Today, Dr. Kishor focuses on personal consultations and medical checkups at his two
              private clinics. His patients value his calm bedside manner, careful diagnostic approach
              and refusal to recommend anything that isn’t truly needed.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="rounded-xl border border-border bg-card p-3 text-center">
                <div className="text-2xl font-bold text-primary">30+</div>
                <div className="text-[11px] text-muted-foreground">Years</div>
              </div>
              <div className="rounded-xl border border-border bg-card p-3 text-center">
                <div className="text-2xl font-bold text-primary">50k+</div>
                <div className="text-[11px] text-muted-foreground">Patients</div>
              </div>
              <div className="rounded-xl border border-border bg-card p-3 text-center">
                <div className="text-2xl font-bold text-primary">2</div>
                <div className="text-[11px] text-muted-foreground">Clinics</div>
              </div>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/appointment">
                <Button className="bg-[image:var(--gradient-primary)] shadow-[var(--shadow-soft)] hover:opacity-95">
                  <CalendarCheck className="mr-2 h-4 w-4" /> Book Consultation
                </Button>
              </Link>
              <Link to="/clinics"><Button variant="outline">Visit a Clinic</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">A Career in Service</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          A timeline of dedication to orthopedic care, public health leadership and patient wellbeing.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {milestones.map((m) => (
            <Card key={m.title} className="p-6 transition-[var(--transition-smooth)] hover:shadow-[var(--shadow-card)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
                <m.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{m.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{m.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center">
          <h2 className="text-2xl font-semibold text-foreground">Our Promise to Patients</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Every patient deserves time, honesty and clarity. Dr. Kishor’s practice is built on these
            three principles — listen carefully, diagnose accurately, treat conservatively whenever possible.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
