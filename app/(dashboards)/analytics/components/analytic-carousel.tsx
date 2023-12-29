"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/app/components/ui/card";

type Props = {};

export default function AnalyticCarousel({}: Props) {
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
    },
    [AutoPlay()],
  );
  return (
    <div
      className="col-span-2 h-full w-full overflow-hidden rounded-md"
      ref={emblaRef}
    >
      <div className="flex h-full rounded-md shadow-md">
        <div className="w-full flex-shrink-0 flex-grow-0 rounded-md">
          <Card className="h-full w-full  ">
            <CardHeader>
              <CardTitle>Website Analytics</CardTitle>
              <CardDescription>
                All the Website analytics will be shown here
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-10">
                <div className="flex items-center gap-5 ">
                  <div className="tems-center flex justify-center rounded-md bg-green-100 p-1">
                    <h1 className="text-green-600">33.4k</h1>
                  </div>
                  <p>Orders</p>
                </div>
                <div className="flex items-center gap-5 ">
                  <div className="flex items-center justify-center rounded-md bg-green-100 p-1">
                    <h1 className="text-green-600">12.3k</h1>
                  </div>
                  <p>Revenue</p>
                </div>
                <div className="flex items-center gap-5 ">
                  <div className="flex items-center justify-center rounded-md bg-green-100 p-1">
                    <h1 className="text-green-600">35.6k</h1>
                  </div>
                  <p>Visitor</p>
                </div>
                <div className="flex items-center gap-5 ">
                  <div className="flex items-center justify-center rounded-md bg-green-100 p-1">
                    <h1 className="text-green-600">34.5k</h1>
                  </div>
                  <p>Profit</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="w-full flex-shrink-0 flex-grow-0">
          <Card className="h-full w-full">
            <CardHeader>
              <CardTitle>Traffic</CardTitle>
              <CardDescription>
                All the Website analytics will be shown here
              </CardDescription>
            </CardHeader>
            <CardContent>
              <h1>35.7K</h1>
            </CardContent>
          </Card>
        </div>
        <div className="w-full flex-shrink-0 flex-grow-0">
          <Card className="h-full w-full">
            <CardHeader>
              <CardTitle>Revenue</CardTitle>
              <CardDescription>
                All the Website analytics will be shown here
              </CardDescription>
            </CardHeader>
            <CardContent>
              <h1>Slide 1</h1>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
