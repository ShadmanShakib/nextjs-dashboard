import React from "react";
import Image from "next/image";

type Props = {};

export default function CoverImage({}: Props) {
  return (
    <div>
      <Image
        className="h-44 w-full"
        src="/images/cover-image.png"
        alt="cover image"
        height={1500}
        width={500}
      />
    </div>
  );
}
