import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageCircle, Clock } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { LocationMap } from "@/components/LocationMap";
import { SITE, buildWhatsAppUrl } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Dr. Naval Kishor" },
      { name: "description", content: "Reach Dr. Naval Kishor's clinic by phone, WhatsApp, email, or send an inquiry online." },
      { property: "og:title", content: "Contact Dr. Naval Kishor" },
      { property: "og:description", content: "Phone, WhatsApp, email and inquiry form for orthopedic consultation." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().regex(/^[+\d\s-]{7,15}$/, "Enter a valid phone number"),
  message: z.string().trim().min(5).max(1000),
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      message: String(fd.get("message") || ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    const msg =
      `*New Inquiry — Dr. Naval Kishor Website*\n` +
      `Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\n\n${data.message}`;
    window.open(buildWhatsAppUrl(msg), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  return (
    <SiteLayout>
      <Toaster richColors position="top-center" />
      <section className="bg-[image:var(--gradient-hero)]">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center md:py-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">Contact Us</h1>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Have a question or need guidance? Reach out by phone, WhatsApp or email — we usually
            respond within a few hours during clinic days.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-14 md:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Phone</h3>
                <a href={`tel:${SITE.phoneRaw}`} className="text-sm text-muted-foreground hover:text-primary">{SITE.phone}</a>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">WhatsApp</h3>
                <a
                  href={buildWhatsAppUrl("Hi Dr. Naval Kishor's clinic, I'd like to inquire about a consultation.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Chat instantly — {SITE.phone}
                </a>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Email</h3>
                <a href={`mailto:${SITE.email}`} className="text-sm text-muted-foreground hover:text-primary">{SITE.email}</a>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Location</h3>
                <p className="text-sm text-muted-foreground">
                  {SITE.location.lat}, {SITE.location.lng}
                </p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Consultation Hours</h3>
                <p className="text-sm text-muted-foreground">Mon – Sat • 10:00 AM – 1:30 PM &amp; 5:30 PM – 8:30 PM</p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-6 md:p-8">
          {sent ? (
            <div className="py-8 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-foreground">Message sent on WhatsApp</h3>
              <p className="mt-2 text-sm text-muted-foreground">We’ll respond to your inquiry shortly.</p>
              <Button variant="outline" className="mt-5" onClick={() => setSent(false)}>Send another</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <h2 className="text-2xl font-semibold text-foreground">Send us a message</h2>
                <p className="mt-1 text-sm text-muted-foreground">Your inquiry will be delivered to our clinic on WhatsApp.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label htmlFor="cname">Name</Label>
                  <Input id="cname" name="name" required className="mt-1.5" />
                </div>
                <div>
                  <Label htmlFor="cphone">Phone</Label>
                  <Input id="cphone" name="phone" required className="mt-1.5" />
                </div>
              </div>
              <div>
                <Label htmlFor="cemail">Email</Label>
                <Input id="cemail" name="email" type="email" required className="mt-1.5" />
              </div>
              <div>
                <Label htmlFor="cmsg">Message</Label>
                <Textarea id="cmsg" name="message" rows={5} required className="mt-1.5" />
              </div>
              <Button
                type="submit"
                className="w-full bg-[image:var(--gradient-primary)] shadow-[var(--shadow-soft)] hover:opacity-95"
              >
                <Send className="mr-2 h-4 w-4" /> Send Inquiry
              </Button>
            </form>
          )}
        </Card>
      </section>

      <LocationMap title="Visit Our Clinic" />
    </SiteLayout>
  );
}
