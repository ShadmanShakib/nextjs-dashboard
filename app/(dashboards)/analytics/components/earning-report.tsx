import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/app/components/ui/card";

type Props = {};

export default function EarningReport({}: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Earning Report</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          <h1>Earning Report</h1>
        </div>
        <CardFooter>
          <div>
            <h1>Earning Report</h1>
          </div>
        </CardFooter>
      </CardContent>
    </Card>
  );
}
