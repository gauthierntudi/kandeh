export const NAV_LINKS = [
  { href: "/", label: "Home", index: "01" },
  { href: "/#methode", label: "Method", index: "02" },
  { href: "/#clients", label: "Clients", index: "03" },
  { href: "/projets", label: "Projects", index: "04" },
  { href: "/contact", label: "Contact", index: "05" },
] as const;

export const SOCIALS = [
  {
    href: "https://www.instagram.com/herman.kande/",
    label: "Instagram",
  },
  {
    href: "https://www.youtube.com/@hermankande",
    label: "YouTube",
  },
  {
    href: "https://www.facebook.com/profile.php?id=100088313190299",
    label: "Facebook",
  },
] as const;

export const CONTACT = {
  emails: ["hermankande21@gmail.com"],
  phones: [{ label: "+1 217 377 5814", href: "tel:+12173775814" }],
  address: ["Noblesville, IN", "46060", "United States"],
  tagline: "From concept to delivery.",
} as const;
