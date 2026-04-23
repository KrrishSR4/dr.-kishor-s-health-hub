import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Bone, HeartPulse, Stethoscope, ShieldCheck, Award, Users, Clock,
  CalendarCheck, Activity, Hospital, ArrowRight, Quote, MessageCircle, Phone,
} from "lucide-react";
import doctorPortrait from "@/assets/doctor-portrait.jpg";
import clinicHero from "@/assets/clinic-hero.jpg";
import { LocationMap } from "@/components/LocationMap";
import { SITE, buildWhatsAppUrl } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Naval Kishor — Orthopedic Ex-Surgeon | Trusted Bone & Joint Care" },
      { name: "description", content: "Book consultations with Dr. Naval Kishor, retired orthopedic surgeon (Ex In-Charge, Darbhanga Anumandal Hospital). Decades of trusted bone & joint care." },
      { property: "og:title", content: "Dr. Naval Kishor — Orthopedic Ex-Surgeon" },
      { property: "og:description", content: "Decades of trusted orthopedic care. Book your appointment online." },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Bone, title: "Joint & Bone Care", desc: "Expert evaluation and treatment of fractures, joint pain and arthritis." },
  { icon: Activity, title: "Sports Injuries", desc: "Diagnosis and rehabilitation for ligament, tendon and muscle injuries." },
  { icon: HeartPulse, title: "Geriatric Orthopedics", desc: "Specialized care for elderly patients — osteoporosis, mobility & pain." },
  { icon: Stethoscope, title: "Personal Consultation", desc: "One-on-one private consultation tailored to your medical history." },
];

const stats = [
  { icon: Award, value: "30+", label: "Years of Experience" },
  { icon: Users, value: "50,000+", label: "Patients Cared For" },
  { icon: Hospital, value: "2", label: "Personal Clinics" },
  { icon: ShieldCheck, value: "Ex In-Charge", label: "Govt. Hospital, Darbhanga" },
];

const whyUs = [
  { icon: Award, title: "30+ Years of Expertise", desc: "Three decades of orthopedic surgery and consultation across government and private practice." },
  { icon: ShieldCheck, title: "Govt. Hospital Leadership", desc: "Former Prabhari (In-Charge) at Darbhanga Anumandal Hospital — trusted by thousands." },
  { icon: HeartPulse, title: "Patient-First Approach", desc: "Conservative treatment, no unnecessary procedures, and time for every question." },
  { icon: Clock, title: "Easy Booking", desc: "Book in 30 seconds — your request is sent directly via WhatsApp for instant confirmation." },
];

const testimonials = [
  {
    name: "Ramesh Kumar",
    role: "Patient, Darbhanga",
    text: "Dr. Kishor diagnosed my knee problem when no one else could. His treatment helped me walk pain-free again after years.",
  },
  {
    name: "Sunita Devi",
    role: "Patient's Daughter",
    text: "He treated my mother's hip fracture with such patience. We are forever grateful for his honest advice and care.",
  },
  {
    name: "Ajay Singh",
    role: "Sports Injury Patient",
    text: "Recovered from a ligament tear in months. Dr. Kishor explains everything clearly and never rushes the consultation.",
  },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[image:var(--gradient-hero)]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-primary shadow-sm">
              <ShieldCheck className="h-3.5 w-3.5" /> 30+ Years of Trusted Orthopedic Care
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl">
              Dr. Naval Kishor
              <span className="mt-2 block bg-[image:var(--gradient-primary)] bg-clip-text text-2xl font-semibold text-transparent md:text-3xl">
                Orthopedic Ex-Surgeon • MBBS
              </span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Retired Orthopedic Surgeon and former Prabhari (In-Charge) at Darbhanga Anumandal
              Hospital. Now providing personal consultations and medical checkups at his private clinics —
              with the same care, precision and patience patients have trusted for decades.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/appointment">
                <Button size="lg" className="bg-[image:var(--gradient-primary)] shadow-[var(--shadow-soft)] hover:opacity-95">
                  <CalendarCheck className="mr-2 h-5 w-5" /> Book Appointment
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline">
                  View Services <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-accent" /> Same-day slots</div>
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-accent" /> Govt. hospital experience</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-[image:var(--gradient-primary)] opacity-20 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-elegant)]">
              <img
                src={doctorPortrait}
                alt="Dr. Naval Kishor, Orthopedic Ex-Surgeon"
                width={1024}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <s.icon className="mx-auto h-6 w-6 text-primary" />
              <div className="mt-2 text-2xl font-bold text-foreground">{s.value}</div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services preview */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Comprehensive Orthopedic Services
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            From routine checkups to complex consultations, every patient receives personal attention
            and an evidence-based treatment plan.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Card key={s.title} className="group p-6 transition-[var(--transition-smooth)] hover:-translate-y-1 hover:shadow-[var(--shadow-card)]">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-[image:var(--gradient-primary)] group-hover:text-primary-foreground">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">{s.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/services">
            <Button variant="outline">All Services <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </Link>
        </div>
      </section>

      {/* Clinic banner */}
      <section className="bg-[image:var(--gradient-soft)]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
            <img
              src={clinicHero}
              alt="Modern orthopedic clinic interior"
              width={1600}
              height={1024}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Care that puts you first
            </h2>
            <p className="mt-4 text-muted-foreground">
              Dr. Kishor’s clinics are designed for comfort, dignity and unhurried consultations. Every
              patient gets time to be heard and a clear plan to feel better.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-foreground">
              <li className="flex items-start gap-3"><ShieldCheck className="mt-0.5 h-5 w-5 text-accent" /> Decades of surgical & clinical experience</li>
              <li className="flex items-start gap-3"><ShieldCheck className="mt-0.5 h-5 w-5 text-accent" /> Personalised, evidence-based recommendations</li>
              <li className="flex items-start gap-3"><ShieldCheck className="mt-0.5 h-5 w-5 text-accent" /> Transparent advice — no unnecessary procedures</li>
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/clinics"><Button variant="outline">View Clinics</Button></Link>
              <Link to="/appointment">
                <Button className="bg-[image:var(--gradient-primary)] shadow-[var(--shadow-soft)] hover:opacity-95">
                  Book Appointment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
