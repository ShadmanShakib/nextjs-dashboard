import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CreditCard } from "lucide-react";
import { SparkAreaChart } from "@tremor/react";

export const chartdata = [
  {
    month: "Jan 21",
    Performance: 4000,
    Benchmark: 3000,
  },
  {
    month: "Feb 21",
    Performance: 3000,
    Benchmark: 2000,
  },
  {
    month: "Mar 21",
    Performance: 2000,
    Benchmark: 1700,
  },
  {
    month: "Apr 21",
    Performance: 2780,
    Benchmark: 2500,
  },
  {
    month: "May 21",
    Performance: 1890,
    Benchmark: 1890,
  },
  {
    month: "Jun 21",
    Performance: 2390,
    Benchmark: 2000,
  },
  {
    month: "Jul 21",
    Performance: 3490,
    Benchmark: 3000,
  },
];
type Props = {};

export default function RevenueGenerated({}: Props) {
  return (
    <Card>
      <CardHeader>
        <div className=" flex h-10 w-10 items-center justify-center rounded bg-green-100  text-green-500">
          <CreditCard />
        </div>
      </CardHeader>
      <CardContent>
        <div className="">
          <div className="">
            <h1 className="text-xl font-medium">50.3k</h1>
            <p className="text-gray-600">Revenue Generated</p>
          </div>
        </div>
      </CardContent>
      <div className="h-20 w-full">
        <SparkAreaChart
          data={chartdata}
          categories={["Performance"]}
          index={"month"}
          colors={["emerald"]}
          className="h-full w-full"
        />
      </div>
    </Card>
  );
}
