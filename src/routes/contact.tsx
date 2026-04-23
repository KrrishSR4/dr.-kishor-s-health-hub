import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Dr. Naval Kishor" },
      { name: "description", content: "Reach Dr. Naval Kishor's clinic by phone, email, or send an inquiry online." },
      { property: "og:title", content: "Contact Dr. Naval Kishor" },
      { property: "og:description", content: "Phone, email and inquiry form for orthopedic consultation." },
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
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setSent(true);
  };

  return (
    <SiteLayout>
      <Toaster richColors position="top-center" />
      <section className="bg-[image:var(--gradient-hero)]">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center md:py-16">
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">Contact Us</h1>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Have a question or need guidance? Reach out and our team will get back to you quickly.
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
                <a href="tel:+919876543210" className="text-sm text-muted-foreground hover:text-primary">+91 98765 43210</a>
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
                <a href="mailto:care@drnavalkishor.in" className="text-sm text-muted-foreground hover:text-primary">care@drnavalkishor.in</a>
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
                <p className="text-sm text-muted-foreground">Darbhanga, Bihar — 2 personal clinics</p>
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
              <h3 className="mt-4 text-xl font-semibold text-foreground">Message sent</h3>
              <p className="mt-2 text-sm text-muted-foreground">We’ll respond to your inquiry shortly.</p>
              <Button variant="outline" className="mt-5" onClick={() => setSent(false)}>Send another</Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
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
    </SiteLayout>
  );
}
