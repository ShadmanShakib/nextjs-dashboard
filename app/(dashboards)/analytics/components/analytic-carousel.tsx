"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/app/components/ui/carousel";
type Props = {};

export default function AnalyticCarousel({}: Props) {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem className="basis-1/3">
          <div>
            <h1>Analytics</h1>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div>
            <h1>Hello</h1>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div>
            <h1>Analytics</h1>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div>
            <h1>Analytics</h1>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div>
            <h1>Analytics</h1>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div>
            <h1>Analytics</h1>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div>
            <h1>Analytics</h1>
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
