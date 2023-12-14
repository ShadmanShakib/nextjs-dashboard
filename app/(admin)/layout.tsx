import React from "react";
import { Sidebar } from "../components/shared";

type Props = {
  children: React.ReactNode;
};

function layout({ children }: Props) {
  return (
    <div className="flex">
      <div className="w-60">
        <Sidebar />
      </div>
      <div className=" p-6">{children}</div>
    </div>
  );
}

export default layout;
