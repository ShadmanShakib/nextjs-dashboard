import React from "react";
import Signinform from "./Signinform";
type Props = {};

const page = (props: Props) => {
  return (
    <main className="flex h-screen  w-full items-center justify-center bg-[#05060f]">
      <Signinform />
    </main>
  );
};

export default page;
