import React from "react";
import { ScrollArea } from "@/app/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui";

type Props = {};

function ChatMessages({}: Props) {
  return (
    <ScrollArea className=" flex flex-1 flex-col  min-h-full border border-red-500 p-4 justify-end">
      <div className="flex mb-2 space-x-5 items-center justify-end w-full  ">
        <div className=" mb  px-2 py-1 bg-indigo-500 text-white rounded-md">
          <p>Hello</p>
        </div>
        <Avatar>
          <AvatarImage src="/cvpic.jpg" />
          <AvatarFallback>J</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex space-x-5 items-center justify-end w-full  ">
        <div className="  px-2 py-1 bg-indigo-500 text-white rounded-md">
          <p>Hi</p>
        </div>
        <Avatar>
          <AvatarImage src="/cvpic.jpg" />
          <AvatarFallback>J</AvatarFallback>
        </Avatar>
      </div>
    </ScrollArea>
  );
}

export default ChatMessages;
