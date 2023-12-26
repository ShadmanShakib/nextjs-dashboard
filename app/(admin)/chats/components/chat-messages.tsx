import React from "react";
import { ScrollArea } from "@/app/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui";
import Message from "./message";
type Props = {};

function ChatMessages({}: Props) {
  return (
    <ScrollArea className=" flex flex-1 flex-col  min-h-full bg-gray-100 p-4 justify-end">
      <Message message="Hello"/>
      <Message currentUser   message="Hi"/>
    </ScrollArea>
  );
}

export default ChatMessages;
