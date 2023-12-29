import React from "react";
import { AnalyticCarousel, EarningReport, SupportTraker } from "./components";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="p-5">
      <div className="grid grid-cols-2 gap-5">
        <EarningReport />
        <SupportTraker />
      </div>
    </div>
  );
}
