import React from "react";
import PricingCard from "./components/PricingCard";

type Props = {};

function Pricing({}: Props) {
  return (
    <div className="flex min-h-screen">
      <main className="w-full p-5 bg-[#010314] text-white">
        <div className="my-20 text-center">
          <h1 className="text-2xl text-center  ">Pricing</h1>
          <h3 className="">
            Safely collect, process, and share your data with the plan that’s
            right for you.
          </h3>
        </div>
        <div className="grid xl:grid-cols-3">
          <PricingCard />
        </div>
      </main>
    </div>
  );
}

export default Pricing;
