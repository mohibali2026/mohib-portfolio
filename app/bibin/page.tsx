import { Metadata } from "next";
import BibinHero from "@/components/BibinHero";

export const metadata: Metadata = {
  title: "Bibin Photography Magazine , Mohib Ali Altaf",
  description: "Bibin is a triannual photography magazine bridging contemporary and fine art photography.",
};

export default function BibinPage() {
  return <BibinHero />;
}
