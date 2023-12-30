import React from "react";
import { ScrollArea } from "@/app/components/ui/scroll-area";
import {
  AnalyticCarousel,
  EarningReport,
  RevenueGenerated,
  SalesOverview,
  SupportTraker,
} from "./components";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="p-5">
      <div className="mb-5 grid grid-cols-4 gap-5">
        <AnalyticCarousel />
        <SalesOverview />
        <RevenueGenerated />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <EarningReport />
        <SupportTraker />
      </div>
    </div>
  );
}
