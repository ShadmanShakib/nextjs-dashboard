import React from "react";
import ChatAvatar from "./chat-avatar";
import { User2Icon } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/app/components/ui";

type Props = {};

function ChatboxHeader({}: Props) {
  return (
    <div className="border-b relative border-gray-300 flex p-3 space-x-3 h-16">
      <div className="relative">
        <Avatar>
          <AvatarImage src="cvpic.jpg" />
          <AvatarFallback>
            <User2Icon />
          </AvatarFallback>
        </Avatar>
        <div className="h-3 w-3 absolute right-0 border-2 border-white bg-green-500 rounded-full bottom-0 " />
      </div>
      <div className="">
        <p className="font-medium">Sam Altman</p>
        <p className="text-sm">Next.js Developer</p>
      </div>
    </div>
  );
}

export default ChatboxHeader;
