"use client";
import React from "react";

import _ from "lodash";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/app/components/ui/button";

type Props = {
  title: string;
  features: string[];
  price: number;
  btn_title: string;
};

function PricingCard({ title, features, price, btn_title }: Props) {
  return (
    <div
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.035)",
      }}
      className="flex  flex-col  p-6 border rounded-lg bg-opacity-10  backdrop-blur-md shadow-inner"
    >
      <h1 className="text-2xl font-medium mb-4">{title}</h1>
      <div className="mb-1">
        <span className="text-xl font-medium">$ &nbsp;{price}&nbsp;</span>
        <span>per month</span>
      </div>
      <p>Explore the product and power small, personal projects.</p>

      <ul className="mb-4 mt-4">
        {_.map(features, (feature, idx) => (
          <li
            key={idx}
            className="flex mb-2 border-t border-white border-opacity-10 items-center py-1"
          >
            <CheckCircle2 className="h-4 w-4" />
            <p>&nbsp;{feature}</p>
          </li>
        ))}
      </ul>
      <Button className="bg-white text-black hover:bg-gray-200 mt-10">
        {btn_title}
      </Button>
    </div>
  );
}

export default PricingCard;
