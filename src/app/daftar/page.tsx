import type { Metadata } from "next";
import { DaftarForm } from "./DaftarForm";

export const metadata: Metadata = {
  title: "Daftar Biometrik — Rupix",
  description:
    "Daftarkan telapak tangan Anda untuk pembayaran biometrik. Tanpa kartu, tanpa HP, tanpa kontak fisik. Cukup scan palm vein Anda.",
  robots: "index, follow",
  openGraph: {
    title: "Daftar Biometrik — Rupix",
    description:
      "Daftarkan telapak tangan Anda untuk pembayaran biometrik. Tanpa kartu, tanpa HP, tanpa kontak fisik.",
    type: "website",
    locale: "id_ID",
    siteName: "Rupix",
  },
};

export default function DaftarPage() {
  return <DaftarForm />;
}
