import React from "react";
import { User2Icon } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  SearchBox,
} from "@/app/components/ui";
type Props = {};

function SidebarHeader({}: Props) {
  return (
    <div className="flex p-3  items-center space-x-3">
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
        <SearchBox />
      </div>
    </div>
  );
}

export default SidebarHeader;
