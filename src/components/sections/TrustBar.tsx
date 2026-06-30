import { StatCounter } from "@/components/ui/StatCounter";

const stats = [
  { value: 99.9, suffix: "%", label: "Akurasi Verifikasi", decimals: 1 },
  { value: 200, suffix: "ms", label: "Response Time", decimals: 0 },
  { value: 50000, suffix: "+", label: "Pengguna Terdaftar", decimals: 0 },
  { value: 1000, suffix: "+", label: "Merchant Partner", decimals: 0 },
];

export function TrustBar() {
  return (
    <section
      className="gradient-primary py-16 lg:py-20"
      aria-labelledby="trust-heading"
    >
      <div className="section-container">
        <h2 id="trust-heading" className="sr-only">
          Statistik kepercayaan Rupix
        </h2>
        <div className="grid grid-cols-2 gap-10 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat) => (
            <StatCounter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
