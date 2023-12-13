import React from "react";
import Signinform from "./Signinform";
type Props = {};

const page = (props: Props) => {
  return (
    <main className="flex  justify-center items-center h-screen w-full">
      <div className="p-5 shadow-md rounded-md">
        <Signinform />
      </div>
    </main>
  );
};

export default page;
