import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";

export const metadata: Metadata = {
  title: "Contact — Herman Kande",
  description:
    "Contact Herman Kande — email, phone, and studio address.",
};

export default function ContactRoute() {
  return <ContactPage />;
}
