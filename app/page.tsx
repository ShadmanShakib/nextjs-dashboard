import React from "react";
import { Hero, Pricing, FAQ, CTA } from "./components/landing";
import { Header, Footer } from "@/app/components/shared";

export default function Home() {
  return (
    <div className="">
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Header />
        <Hero />
        <Pricing />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}
