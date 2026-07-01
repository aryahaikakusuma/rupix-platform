"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Plus } from "lucide-react";

const items = [
  {
    question: "Apakah data saya aman?",
    answer:
      "Ya — data biometrik tidak disimpan dalam bentuk mentah. Rupix menggunakan kriptografi Zero Knowledge dan hashing berbasis blockchain, jadi pola telapak tangan diubah menjadi identitas digital yang aman, bukan disimpan sebagai gambar. Data disimpan di infrastruktur Data Center Indonesia (DCI), artinya data tetap berada di dalam negeri.",
  },
  {
    question: "Seberapa aman Rupix?",
    answer:
      "Keamanan bertumpu pada tiga pilar: autentikasi privacy-first (tanda tangan vena telapak tangan, tanpa kartu atau input manual berulang), infrastruktur aman (hosting di DCI), dan perlindungan identitas biometrik berbasis ZK. Pola vena telapak tangan juga lebih sulit dipalsukan dibanding sidik jari atau wajah, karena polanya berada di bawah kulit.",
  },
  {
    question: "Bagaimana jika saya butuh bantuan?",
    answer:
      "Jika anda mengalmami masalah maka anda dapat mengkontak email hello@rupix.id",
  },
  {
    question: "Bisa dipakai di luar negeri?",
    answer:
      "Untuk sekarang Rupix fokus murni ke Indonesia (menyasar gap pembayaran digital di Indonesia, infrastruktur DCI, kantor pusat di Jakarta).",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="bg-neutral-50 py-20 lg:py-28"
      aria-labelledby="faq-heading"
    >
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="faq-heading"
            className="text-[42px] font-bold tracking-tight text-neutral-900 sm:text-[48px]"
          >
            Pertanyaan yang Sering Diajukan
          </h2>
        </div>

        <div className="mt-14 divide-y divide-neutral-200 rounded-2xl border border-neutral-200 bg-white">
          {items.map((item, i) => (
            <FAQItem
              key={i}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        <div className="mt-12 mb-16 flex items-center justify-between rounded-full border-2 border-primary bg-white px-8 py-4">
          <span className="text-lg font-semibold text-neutral-900 sm:text-xl">
            Punya pertanyaan lain?
          </span>
          <Button
            className="rounded-full px-6 py-2 text-sm sm:text-base"
          >
            Tanya Sesuatu
          </Button>
        </div>
      </div>
    </section>
  );
}

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [answer]);

  return (
    <div>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-200 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset sm:px-8 sm:py-6"
      >
        <span className="text-lg font-semibold text-neutral-900 sm:text-xl">
          {question}
        </span>
        <Plus
          aria-hidden
          className={`h-5 w-5 shrink-0 text-neutral-500 transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        />
      </button>

      <motion.div
        animate={{ height: isOpen ? height : 0 }}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        className="overflow-hidden"
      >
        <div ref={contentRef}>
          <div className="px-6 pb-6 text-[17px] leading-relaxed text-neutral-600 sm:px-8 sm:text-lg">
            {answer}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
