import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/app/components/ui/card";
import { Metric } from "@/app/components/ui";

type Props = {};

export default function EarningReport({}: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Earning Report</CardTitle>
        <CardDescription>Weekly earning overview </CardDescription>
      </CardHeader>
      <CardContent>
        <Metric>$590</Metric>
      </CardContent>
    </Card>
  );
}
