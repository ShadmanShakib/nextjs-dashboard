"use client";
import React from "react";
import { WeeklyData } from "./data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/app/components/ui/card";
import { Metric, Badge, Progress } from "@/app/components/ui";
import { Bar, BarChart, XAxis, Tooltip, ResponsiveContainer } from "recharts";

type Props = {};

export default function EarningReport({}: Props) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Earning Report</CardTitle>
        <CardDescription>Weekly earning overview </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center">
          <div className="flex flex-col items-start space-y-2">
            <Metric>$590</Metric>
            <Badge className="rounded-md">4.5%</Badge>
            <p className="w-40 whitespace-normal">
              You informed of this week compared to last week
            </p>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={WeeklyData}>
              <XAxis dataKey="name" />
              <Tooltip />
              <Bar dataKey="total" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-3 grid w-full grid-cols-3 gap-3   ">
          <div className="">
            <p>Earning</p>
            <h1 className="mb-2 text-xl font-medium">$450.39</h1>
            <Progress value={50} className="h-1" />
          </div>
          <div className="">
            <p>Profit</p>
            <h1 className="mb-2 text-xl font-medium">$400.39</h1>
            <Progress value={70} className="h-1 " />
          </div>
          <div className="">
            <p>Expense</p>
            <h1 className="mb-2 text-xl font-medium">$50.39</h1>
            <Progress value={10} className="h-1" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
