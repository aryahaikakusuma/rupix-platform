import { Logo } from "@/components/ui/Logo";

const footerLinks = {
  Produk: [
    { label: "Pembayaran Biometrik", href: "#produk" },
    { label: "Cara Kerja", href: "#cara-kerja" },
    { label: "Perbandingan QRIS", href: "#perbandingan" },
  ],
  Perusahaan: [
    { label: "Tentang Kami", href: "#tentang" },
    { label: "Karir", href: "#" },
    { label: "Blog", href: "#" },
  ],
  Kontak: [
    { label: "hello@rupix.id", href: "mailto:hello@rupix.id" },
    { label: "Jakarta, Indonesia", href: "#" },
  ],
  "Media Sosial": [
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "X (Twitter)", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer id="kontak" className="bg-neutral-950 text-neutral-200">
      <div className="section-container py-16 lg:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-200/80">
              Revolutionizing Payments, One Palm at a Time.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                {title}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-neutral-200/80 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-neutral-200/60 sm:text-left">
          © {new Date().getFullYear()} Rupix. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
