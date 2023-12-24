import React from "react";
import { Sidebar } from "../components/shared";
import { Topbar } from "./components";

type Props = {
  children: React.ReactNode;
};

function layout({ children }: Props) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="relative">
        <div className="fixed z-50 w-full h-16">
          <Topbar />
        </div>
        <div className="flex relative">
          <div className="w-60 fixed z-50 mt-16">
            <Sidebar />
          </div>
          <div className="  ml-60 mt-16 w-full flex-1">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default layout;
