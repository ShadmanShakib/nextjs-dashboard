import React from "react";
import PricingCard from "./components/PricingCard";
import { data } from "./data";
import _ from "lodash";
type Props = {};

function Pricing({}: Props) {
  return (
    <div className="flex min-h-screen">
      <main className="w-full p-5 bg-[#010314] text-white">
        <div className="my-20 text-center">
          <h1 className="text-2xl text-center  ">Pricing</h1>
          <h3 className="">
            Safely collect, process, and share your data with the plan
            that&apos;s right for you.
          </h3>
        </div>
        <div className="grid gap-5 xl:grid-cols-3">
          {_.map(data, (item, index) => (
            <PricingCard
              btn_title={item.btn_title}
              price={item.price}
              features={item.features}
              key={index}
              title={item.title}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Pricing;
