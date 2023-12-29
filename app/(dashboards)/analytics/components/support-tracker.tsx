"use client";
import React from "react";
import { ProgressCircle } from "@tremor/react";
import { Ticket, Clock, Check } from "lucide-react";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Metric } from "@/components/ui";

type Props = {};

export default function SupportTracker({}: Props) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Support Tracker</CardTitle>
        <CardDescription>Last 7 days</CardDescription>
      </CardHeader>
      <CardContent className="">
        <div className="flex justify-between">
          <div className="flex flex-col items-start space-y-2">
            <Metric>156</Metric>
            <p className="w-40 whitespace-normal">Last 7 days </p>
            <div className="flex items-center space-x-5">
              <Ticket />
              <div className="">
                <p>New Tickets</p>
                <p className="text-gray-500">142</p>
              </div>
            </div>
            <div className="flex items-center space-x-5">
              <Check />
              <div className="">
                <p>Open Tickets</p>
                <p className="text-gray-500">28</p>
              </div>
            </div>
            <div className="flex items-center space-x-5">
              <Clock />
              <div className="">
                <p>Response Time</p>
                <p className="text-gray-500">1 Day</p>
              </div>
            </div>
          </div>
          <ProgressCircle value={60} className="pr-10" size="xl">
            <div className="flex flex-col items-center">
              <p className="text-2xl font-semibold">82%</p>
              <p className="text-xs text-gray-500">Completed</p>
            </div>
          </ProgressCircle>
        </div>
      </CardContent>
    </Card>
  );
}

const data = [
  {
    name: "18-24",
    uv: 31.47,
    pv: 2400,
    fill: "#8884d8",
  },
  {
    name: "25-29",
    uv: 26.69,
    pv: 4567,
    fill: "#83a6ed",
  },
  {
    name: "30-34",
    uv: -15.69,
    pv: 1398,
    fill: "#8dd1e1",
  },
];
