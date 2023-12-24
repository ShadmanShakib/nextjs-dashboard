"use client";
import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/app/components/ui/resizable";
import ChatSidebar from "./components/chat-sidebar";

type Props = {
  children: React.ReactNode;
};

function layout({ children }: Props) {
  return (
    <>
      <div className="flex ">
        <ChatSidebar />
        <div className="w-full relative">{children}</div>
      </div>
    </>
  );
}

export default layout;
