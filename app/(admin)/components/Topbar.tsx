import React from "react";
import { Menu } from "lucide-react";
import Notification from "./Notification";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui";

type Props = {};

function Header({}: Props) {
  return (
    <header className="h-16 w-full border-b border-gray-600 bg-[#2e2e30] ">
      <nav className="flex h-16 items-center justify-between px-4">
        <Menu className="cursor-pointer text-white " />
        <div className="relative flex items-center space-x-5">
          <Notification />

          <Avatar>
            <AvatarImage src="/cvpic.jpg" />
            <AvatarFallback>SS</AvatarFallback>
          </Avatar>
        </div>
      </nav>
    </header>
  );
}

export default Header;
