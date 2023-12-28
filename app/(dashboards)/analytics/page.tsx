import React from "react";
import { AnalyticCarousel, EarningReport } from "./components";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="p-5">
      <EarningReport />
    </div>
  );
}
