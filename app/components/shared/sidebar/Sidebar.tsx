"use client";

import React from "react";
import {
  CreditCardIcon,
  HomeIcon,
  Table2Icon,
  TabletsIcon,
  MessageSquare,
  User2
} from "lucide-react";
import SidebarLink from "./SidebarLink";
import Image from "next/image";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <aside className="w-full bg-[#2e2e30] flex flex-col space-y-1  text-white p-2  dark:bg-gray-600 min-h-screen ">
      <SidebarLink href="/dashboard" icon={<HomeIcon />} name="Dashbaord" />
      <SidebarLink href="/table" icon={<Table2Icon />} name="Table" />
      <SidebarLink href="/kanban" icon={<TabletsIcon />} name="Kanban" />
      <SidebarLink href="/pricing" icon={<CreditCardIcon />} name="Pricing" />
      <SidebarLink href="/chats" icon={<MessageSquare />} name="Chats" />
      <SidebarLink href="/profile" icon={<User2 />} name="Profile" />
    </aside>
  );
};

export default Sidebar;
