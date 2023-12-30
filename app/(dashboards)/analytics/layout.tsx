"use client";
import React from "react";
import { Sidebar } from "@/app/components/shared";
import { Topbar } from "@/app/(admin)/components";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/app/components/ui/resizable";

type Props = {
  children: React.ReactNode;
};

export default function layout({ children }: Props) {
  return (
    <div className="relative">
      <Topbar />
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel className="" defaultSize={20}>
          <Sidebar />
          <ResizableHandle withHandle />
        </ResizablePanel>
        <ResizablePanel defaultSize={80}>
          <div className="">{children}</div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
