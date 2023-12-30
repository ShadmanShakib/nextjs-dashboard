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
  Lock,
  AreaChart,
  AppWindow,
  ActivityIcon,
  ShoppingBag,
} from "lucide-react";
import SidebarLink from "./SidebarLink";
import Image from "next/image";
import CollapsibleItem from "./collapsible-item";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <aside className="flex h-full min-h-screen w-full flex-col space-y-1  bg-[#2e2e30] p-2  text-white dark:bg-gray-600 ">
      <CollapsibleItem name="Dashbords" icon={<AppWindow />}>
        <SidebarLink
          href="/dashboard"
          icon={<ShoppingBag />}
          name="E-commerce"
        />
        <SidebarLink
          href="/analytics"
          icon={<ActivityIcon />}
          name="Analytics"
        />
      </CollapsibleItem>
      <SidebarLink href="/kanban" icon={<TabletsIcon />} name="Kanban" />
      <SidebarLink href="/pricing" icon={<CreditCardIcon />} name="Pricing" />
      <SidebarLink href="/chats" icon={<MessageSquare />} name="Chats" />
      <SidebarLink href="/profile" icon={<User2 />} name="Profile" />
      <SidebarLink href="/signin" icon={<Lock />} name="Authentication" />

      <h1 className="px-3 py-2 font-medium uppercase text-gray-200">
        FORMS & Tables
      </h1>
      <SidebarLink href="/form-builder" icon={<FormInput />} name="Form" />
      <SidebarLink href="/table" icon={<Table2Icon />} name="Table" />

      <h1 className="px-3 py-2 font-medium uppercase text-gray-200">Charts</h1>
      <CollapsibleItem name="Charts" icon={<AreaChart />}>
        <SidebarLink href="/area" icon={<AreaChart />} name="Area Charts" />
      </CollapsibleItem>
    </aside>
  );
};

export default Sidebar;
