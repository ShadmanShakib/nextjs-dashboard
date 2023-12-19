"use client";

import React from "react";
import { HomeIcon, Table2Icon, TabletsIcon } from "lucide-react";
import SidebarLink from "./SidebarLink";
import Image from "next/image";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <aside className="w-full bg-[#2e2e30]  text-white p-2  dark:bg-gray-600 min-h-screen ">
      <div className="flex items-center space-x-3 py-3 ">
        <Image
          className="rounded-full "
          width={40}
          height={40}
          src="/cvpic.jpg"
          alt="sadman shakib"
        />
        <span>Sadman Shakib</span>
      </div>
      <SidebarLink href="/dashboard" icon={<HomeIcon />} name="Dashbaord" />
      <SidebarLink href="/table" icon={<Table2Icon />} name="Table" />
      <SidebarLink href="/kanban" icon={<TabletsIcon />} name="Kanban" />
    </aside>
  );
};

export default Sidebar;
