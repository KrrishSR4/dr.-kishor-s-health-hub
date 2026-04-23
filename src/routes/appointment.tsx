import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CalendarCheck, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { clinics } from "@/lib/clinics";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/appointment")({
  head: () => ({
    meta: [
      { title: "Book Appointment — Dr. Naval Kishor" },
      { name: "description", content: "Book a personal consultation or medical checkup with Dr. Naval Kishor online." },
      { property: "og:title", content: "Book an Appointment — Dr. Naval Kishor" },
      { property: "og:description", content: "Online appointment booking for orthopedic consultation." },
    ],
  }),
  component: AppointmentPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(100),
  phone: z.string().trim().regex(/^[+\d\s-]{7,15}$/, "Enter a valid phone number"),
  email: z.string().trim().email("Invalid email").max(255).optional().or(z.literal("")),
  type: z.enum(["consultation", "checkup"]),
  clinic: z.string().min(1, "Please select a clinic"),
  date: z.string().min(1, "Please pick a date"),
  time: z.string().min(1, "Please pick a time slot"),
  notes: z.string().trim().max(500).optional().or(z.literal("")),
});

const slots = ["10:30 AM", "11:30 AM", "12:30 PM", "06:00 PM", "07:00 PM", "08:00 PM"];

function AppointmentPage() {
  const [submitted, setSubmitted] = useState(false);
  const [type, setType] = useState<"consultation" | "checkup">("consultation");
  const [clinic, setClinic] = useState<string>(clinics[0].id);
  const [time, setTime] = useState<string>(slots[0]);
  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      phone: fd.get("phone"),
      email: fd.get("email") || "",
      type,
      clinic,
      date: fd.get("date"),
      time,
      notes: fd.get("notes") || "",
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setSubmitted(true);
  };

  return (
    <SiteLayout>
      <Toaster richColors position="top-center" />
      <section className="bg-[image:var(--gradient-hero)]">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center md:py-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">Book Appointment</h1>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Choose a personal consultation or a medical checkup. We’ll confirm your slot via phone.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-12">
        {submitted ? (
          <Card className="p-10 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-foreground">Request received</h2>
            <p className="mx-auto mt-2 max-w-md text-muted-foreground">
              Thank you. Our team will call you shortly to confirm your appointment with Dr. Naval Kishor.
            </p>
            <Button className="mt-6" variant="outline" onClick={() => setSubmitted(false)}>
              Book another
            </Button>
          </Card>
        ) : (
          <Card className="p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label className="text-sm font-medium">Appointment Type</Label>
                <RadioGroup
                  value={type}
                  onValueChange={(v) => setType(v as "consultation" | "checkup")}
                  className="mt-3 grid gap-3 sm:grid-cols-2"
                >
                  <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-border p-4 hover:border-primary has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-secondary">
                    <RadioGroupItem value="consultation" className="mt-1" />
                    <div>
                      <div className="font-medium text-foreground">Personal Consultation</div>
                      <div className="text-xs text-muted-foreground">One-on-one with Dr. Kishor</div>
                    </div>
                  </label>
                  <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-border p-4 hover:border-primary has-[[data-state=checked]]:border-primary has-[[data-state=checked]]:bg-secondary">
                    <RadioGroupItem value="checkup" className="mt-1" />
                    <div>
                      <div className="font-medium text-foreground">Medical Checkup</div>
                      <div className="text-xs text-muted-foreground">Comprehensive orthopedic checkup</div>
                    </div>
                  </label>
                </RadioGroup>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" name="name" required placeholder="Your full name" className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" required placeholder="+91 ..." className="mt-1.5" />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email (optional)</Label>
                <Input id="email" name="email" type="email" placeholder="you@example.com" className="mt-1.5" />
              </div>

              <div>
                <Label htmlFor="clinic">Preferred Clinic</Label>
                <Select value={clinic} onValueChange={setClinic}>
                  <SelectTrigger id="clinic" className="mt-1.5">
                    <SelectValue placeholder="Select clinic" />
                  </SelectTrigger>
                  <SelectContent>
                    {clinics.map((c) => (
                      <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="date">Preferred Date</Label>
                  <Input id="date" name="date" type="date" min={today} required className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="time">Time Slot</Label>
                  <Select value={time} onValueChange={setTime}>
                    <SelectTrigger id="time" className="mt-1.5">
                      <SelectValue placeholder="Pick a slot" />
                    </SelectTrigger>
                    <SelectContent>
                      {slots.map((s) => (
                        <SelectItem key={s} value={s}>{s}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="notes">Reason / Symptoms (optional)</Label>
                <Textarea id="notes" name="notes" rows={4} placeholder="Briefly describe your concern" className="mt-1.5" />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-[image:var(--gradient-primary)] shadow-[var(--shadow-soft)] hover:opacity-95"
              >
                <CalendarCheck className="mr-2 h-5 w-5" /> Request Appointment
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Our team will call you to confirm your slot.
              </p>
            </form>
          </Card>
        )}
      </section>
    </SiteLayout>
  );
}
