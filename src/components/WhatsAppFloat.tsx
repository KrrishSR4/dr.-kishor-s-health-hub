import { MessageCircle } from "lucide-react";
import { buildWhatsAppUrl } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={buildWhatsAppUrl("Hi Dr. Naval Kishor's clinic, I'd like to inquire about an appointment.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-110"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute -top-1 -right-1 flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
        <span className="relative inline-flex h-3 w-3 rounded-full bg-accent" />
      </span>
    </a>
  );
}
