import React from "react";
import ChatAvatar from "./chat-avatar";
import { cn } from "@/app/lib/utils";
type Props = {
  active?: boolean;
  online?: boolean;
};

const ChatItem = ({ active, online }: Props) => {
  return (
    <div
      className={cn(
        "flex space-x-4 p-3 rounded-md cursor-pointer hover:bg-indigo-300 group",
        active ? "bg-indigo-400 text-white" : "",
      )}
    >
      <ChatAvatar online={online} />
      <div className="">
        <p
          className={cn(
            " font-medium group-hover:text-white  ",
            active ? "text-white" : "text-black",
          )}
        >
          Sadman Shakib
        </p>
        <p
          className={cn(
            "text-sm  w-40 truncate group-hover:text-white",
            active ? "text-gray-50" : "text-gray-400",
          )}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};

export default ChatItem;
