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
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel defaultSize={200}>
        <ChatSidebar />
        <ResizableHandle />
      </ResizablePanel>
      <ResizablePanel defaultSize={400}>
        {children}
        <ResizableHandle />
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default layout;
