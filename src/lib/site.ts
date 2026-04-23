export const SITE = {
  phone: "+91 77392 91292",
  phoneRaw: "+917739291292",
  whatsappNumber: "917739291292", // E.164 without + for wa.me
  email: "aditya@gmail.com",
  experienceYears: 30,
  location: {
    lat: 21.227465,
    lng: 81.762430,
    label: "Dr. Naval Kishor's Clinic",
  },
} as const;

export const mapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${SITE.location.lat},${SITE.location.lng}`;
export const mapsViewUrl = `https://www.google.com/maps/search/?api=1&query=${SITE.location.lat},${SITE.location.lng}`;
// Satellite embed (no API key needed) using Google Maps embed with t=k (satellite/hybrid)
export const mapsEmbedSatelliteUrl = `https://www.google.com/maps?q=${SITE.location.lat},${SITE.location.lng}&z=18&t=k&output=embed`;

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
