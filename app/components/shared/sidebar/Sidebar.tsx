"use client";

import React from "react";
import { HomeIcon } from "lucide-react";
import SidebarLink from "./SidebarLink";
type Props = {};

const Sidebar = (props: Props) => {
  return (
    <aside className="w-60 bg-gray-50 dark:bg-gray-600 min-h-screen px-5 py-2">
      <SidebarLink icon={<HomeIcon />} name="Dashbaord" />
    </aside>
  );
};

export default Sidebar;
