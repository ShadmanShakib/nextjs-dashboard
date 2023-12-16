import React from "react";
import { Menu } from "lucide-react";

type Props = {};

function Header({}: Props) {
  return (
    <header className="h-16 bg-[#2e2e30] ">
      <nav className="flex items-center h-16 px-4 ">
        <Menu className="text-white" />
      </nav>
    </header>
  );
}

export default Header;
