import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui";
import { cn } from "@/app/lib/utils";
type Props = {
  online?: boolean;
};

function ChatAvatar({ online }: Props) {
  const className = cn(
    "absolute bottom-0 right-0 block z-50 h-3 w-3 border-white rounded-full border-2",
    online ? "bg-green-500" : "bg-red-500",
  );
  return (
    <div className="relative inline-block">
      <Avatar>
        <AvatarImage className="border-2 border-white" src="cvpic.jpg" />
        <AvatarFallback>SS</AvatarFallback>
      </Avatar>

      <div className={className} />
    </div>
  );
}

export default ChatAvatar;
