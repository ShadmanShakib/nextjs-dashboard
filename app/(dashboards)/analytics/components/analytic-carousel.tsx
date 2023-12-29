"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";

type Props = {};

export default function AnalyticCarousel({}: Props) {
  const [emblaRef] = useEmblaCarousel();
  return (
    <div className="col-span-2 h-60 w-full overflow-hidden" ref={emblaRef}>
      <div className="flex">
        <div className="w-full flex-shrink-0 flex-grow-0">Slide 1</div>
        <div className="w-full flex-shrink-0 flex-grow-0">Slide 2</div>
        <div className="w-full flex-shrink-0 flex-grow-0">Slide 3</div>
      </div>
    </div>
  );
}
