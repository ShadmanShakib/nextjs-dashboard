import React from "react";
import { Menu, Bell } from "lucide-react";
import Image from "next/image";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/app/components/ui/avatar";

type Props = {};

function Header({}: Props) {
  return (
    <header className="h-16 w-full bg-[#2e2e30] border-b border-gray-600 ">
      <nav className="flex items-center h-16 px-4 justify-between">
        <Menu className="text-white" />
        <div className="flex items-center space-x-5">
          <Bell className="text-white" />
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
