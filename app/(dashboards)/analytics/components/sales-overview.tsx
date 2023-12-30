import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ProgressBar } from "@tremor/react";
import { ShoppingBag, Link } from "lucide-react";

type Props = {};

export default function SalesOverview({}: Props) {
  return (
    <Card>
      <CardHeader>
        <div className="">
          <h1>Sales Overview</h1>
          <h1 className="mt-2 text-xl font-semibold">$30.5k</h1>
        </div>
      </CardHeader>
      <CardContent>
        <div className="">
          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <div className="rounded bg-green-100 p-1 text-green-500">
                <ShoppingBag />
              </div>
              <p>Orders</p>
            </div>
            <div className="flex items-center space-x-2">
              <p>Visits</p>
              <div className="rounded bg-red-100 p-1  text-red-500">
                <Link size={20} />
              </div>
            </div>
          </div>
          <div className="mt-2 flex justify-between">
            <div className="">
              <h1 className="text-xl font-medium">64.5%</h1>
              <p className="text-sm text-gray-500">6439</p>
            </div>
            <div className="">
              <h1 className="text-xl font-medium">25.5%</h1>
              <p className="text-sm text-gray-500">439</p>
            </div>
          </div>
          <div className="mt-4">
            <ProgressBar value={69} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
