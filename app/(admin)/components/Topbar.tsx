import React from "react";
import { Menu } from "lucide-react";
import Image from "next/image";

type Props = {};

function Header({}: Props) {
  return (
    <header className="h-16 w-full bg-[#2e2e30] border-b border-gray-600 ">
      <nav className="flex items-center h-16 px-4 justify-between">
        <Menu className="text-white" />
        <Image
          src="/cvpic.jpg"
          alt="logo"
          className="rounded-full h-10 w-10"
          width={50}
          height={50}
        />
      </nav>
    </header>
  );
}

export default Header;
