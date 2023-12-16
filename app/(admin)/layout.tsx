import React from "react";
import { Sidebar } from "../components/shared";
import { Topbar } from "./components";

type Props = {
  children: React.ReactNode;
};

function layout({ children }: Props) {
  return (
    <>
      <Topbar />
      <div className="flex">
        <div className="w-60">
          <Sidebar />
        </div>
        <div className=" p-6">{children}</div>
      </div>
    </>
  );
}

export default layout;
