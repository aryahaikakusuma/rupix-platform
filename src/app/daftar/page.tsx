"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { Input, Select } from "@/components/ui/Input";
import { Stepper } from "@/components/ui/Stepper";

const formSteps = [
  { title: "Data Diri", description: "Informasi kontak dan identitas" },
  { title: "Metode Pembayaran", description: "Hubungkan rekening atau e-wallet" },
  { title: "Scan Biometrik", description: "Registrasi telapak tangan" },
];

const paymentOptions = [
  { value: "", label: "Pilih metode pembayaran" },
  { value: "bca", label: "BCA" },
  { value: "mandiri", label: "Bank Mandiri" },
  { value: "gopay", label: "GoPay" },
  { value: "ovo", label: "OVO" },
  { value: "dana", label: "DANA" },
];

export default function DaftarPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    payment: "",
  });

  const update = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="flex min-h-screen flex-col bg-neutral-50">
        <header className="border-b border-neutral-200 bg-white">
          <div className="section-container flex h-16 items-center">
            <Logo />
          </div>
        </header>
        <main className="flex flex-1 items-center justify-center px-4 py-16">
          <div className="w-full max-w-md text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
              <CheckCircle2 className="h-8 w-8" aria-hidden />
            </div>
            <h1 className="mt-6 text-2xl font-bold text-neutral-900">
              Registrasi Berhasil!
            </h1>
            <p className="mt-3 text-neutral-600">
              Data biometrik untuk <strong>{form.name}</strong> telah terdaftar.
              Anda akan menerima konfirmasi via {form.email || form.phone}.
            </p>
            <dl className="mt-8 rounded-[var(--radius-card)] border border-neutral-200 bg-white p-6 text-left text-sm">
              <div className="flex justify-between py-2">
                <dt className="text-neutral-500">Nama</dt>
                <dd className="font-medium text-neutral-900">{form.name}</dd>
              </div>
              <div className="flex justify-between border-t border-neutral-100 py-2">
                <dt className="text-neutral-500">Kontak</dt>
                <dd className="font-medium text-neutral-900">{form.phone || form.email}</dd>
              </div>
              <div className="flex justify-between border-t border-neutral-100 py-2">
                <dt className="text-neutral-500">Pembayaran</dt>
                <dd className="font-medium text-neutral-900">
                  {paymentOptions.find((o) => o.value === form.payment)?.label ?? form.payment}
                </dd>
              </div>
            </dl>
            <Button href="/" className="mt-8 w-full">
              Kembali ke Beranda
            </Button>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-neutral-50">
      <header className="border-b border-neutral-200 bg-white">
        <div className="section-container flex h-16 items-center justify-between">
          <Logo />
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-600 hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Beranda
          </Link>
        </div>
      </header>

      <main className="section-container flex-1 py-10 lg:py-16">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900">
            Daftar Biometrik
          </h1>
          <p className="mt-2 text-neutral-600">
            Lengkapi data di bawah untuk mendaftarkan telapak tangan Anda.
          </p>

          <div className="mt-10">
            <Stepper steps={formSteps} currentStep={step} orientation="vertical" />
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-10 rounded-[var(--radius-card)] border border-neutral-200 bg-white p-6 shadow-sm sm:p-8"
          >
            {step === 1 && (
              <div className="space-y-5">
                <Input
                  label="Nama Lengkap"
                  name="name"
                  value={form.name}
                  onChange={update("name")}
                  required
                  placeholder="Masukkan nama sesuai KTP"
                  autoComplete="name"
                />
                <Input
                  label="Nomor HP"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={update("phone")}
                  required
                  placeholder="08xxxxxxxxxx"
                  autoComplete="tel"
                />
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="nama@email.com"
                  autoComplete="email"
                />
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5">
                <Select
                  label="Metode Pembayaran"
                  name="payment"
                  value={form.payment}
                  onChange={update("payment")}
                  options={paymentOptions}
                  required
                />
                <p className="text-sm text-neutral-500">
                  Metode ini akan digunakan sebagai default saat Anda melakukan
                  pembayaran dengan telapak tangan.
                </p>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-5 text-center">
                <div className="mx-auto flex h-48 w-48 items-center justify-center rounded-[var(--radius-card)] border-2 border-dashed border-primary/30 bg-primary/5">
                  <div>
                    <div className="mx-auto h-20 w-20 rounded-full border-4 border-primary/20 border-t-primary animate-spin" aria-hidden />
                    <p className="mt-4 text-sm font-medium text-primary">
                      Arahkan telapak tangan ke sensor
                    </p>
                  </div>
                </div>
                <p className="text-sm text-neutral-600">
                  Pastikan telapak tangan bersih dan tidak terhalang. Proses scan
                  membutuhkan sekitar 10 detik.
                </p>
              </div>
            )}

            <div className="mt-8 flex gap-3">
              {step > 1 && (
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => setStep(step - 1)}
                  className="flex-1"
                >
                  Kembali
                </Button>
              )}
              <Button type="submit" className="flex-1">
                {step === 3 ? "Selesai" : "Lanjut"}
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
