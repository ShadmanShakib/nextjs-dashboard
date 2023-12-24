import { Separator } from "@/app/components/ui";
import SidebarHeader from "./SidebarHeader";
import ChatItem from "./chat-item";
import React from "react";
import { ScrollArea } from "@/app/components/ui/scroll-area";

type Props = {};

function ChatSidebar({}: Props) {
  return (
    <section className="border-r   border-gary-200 w-80">
      <SidebarHeader />
      <Separator />
      <div className="px-3">
        <h1 className="text-blue-500 my-3 font-medium">Chats</h1>
        <ScrollArea className="h-[70vh]">
          <div className="flex flex-col space-y-1 ">
            <ChatItem active online />
            <ChatItem />
            <ChatItem online />
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem />
            <ChatItem />
          </div>
        </ScrollArea>
      </div>
    </section>
  );
}

export default ChatSidebar;
