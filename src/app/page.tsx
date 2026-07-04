import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";

const Features = dynamic(() =>
  import("@/components/sections/Features").then((m) => m.Features)
);
const HowItWorks = dynamic(() =>
  import("@/components/sections/HowItWorks").then((m) => m.HowItWorks)
);
const UseCases = dynamic(() =>
  import("@/components/sections/UseCases").then((m) => m.UseCases)
);
const FAQ = dynamic(() =>
  import("@/components/sections/FAQ").then((m) => m.FAQ)
);
const Footer = dynamic(() =>
  import("@/components/layout/Footer").then((m) => m.Footer)
);

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Features />
        <HowItWorks />
        <UseCases />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
