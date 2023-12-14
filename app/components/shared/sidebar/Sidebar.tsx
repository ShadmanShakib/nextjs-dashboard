"use client";

import React from "react";
import { HomeIcon, Table2Icon } from "lucide-react";
import SidebarLink from "./SidebarLink";
type Props = {};

const Sidebar = (props: Props) => {
  return (
    <aside className="w-full bg-gray-50  dark:bg-gray-600 min-h-screen px-1 py-2">
      <SidebarLink href="/dashboard" icon={<HomeIcon />} name="Dashbaord" />
      <SidebarLink href="/table" icon={<Table2Icon />} name="Table" />
    </aside>
  );
};

export default Sidebar;
