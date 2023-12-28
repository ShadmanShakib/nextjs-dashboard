"use client";

import React from "react";
import {
  CreditCardIcon,
  HomeIcon,
  Table2Icon,
  TabletsIcon,
  MessageSquare,
  User2,
  FormInput,
} from "lucide-react";
import SidebarLink from "./SidebarLink";
import Image from "next/image";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <aside className="flex min-h-screen w-full flex-col space-y-1  bg-[#2e2e30] p-2  text-white dark:bg-gray-600 ">
      <SidebarLink href="/dashboard" icon={<HomeIcon />} name="Dashbaord" />
      <SidebarLink href="/table" icon={<Table2Icon />} name="Table" />
      <SidebarLink href="/kanban" icon={<TabletsIcon />} name="Kanban" />
      <SidebarLink href="/pricing" icon={<CreditCardIcon />} name="Pricing" />
      <SidebarLink href="/chats" icon={<MessageSquare />} name="Chats" />
      <SidebarLink href="/profile" icon={<User2 />} name="Profile" />
      <h1 className="px-3 py-2 font-medium uppercase text-gray-200">FORMS</h1>
      <SidebarLink href="/form-builder" icon={<FormInput />} name="Form" />
    </aside>
  );
};

export default Sidebar;
