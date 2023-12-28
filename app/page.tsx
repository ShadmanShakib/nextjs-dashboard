import React from "react";
import { Hero, Pricing, FAQ, CTA } from "./components/landing";
import { Header, Footer } from "@/app/components/shared";

export default function Home() {
  return (
    <div className="">
      <main className="">
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
