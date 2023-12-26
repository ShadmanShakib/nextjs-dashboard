"use client";
import React from "react";
import { Bell, Settings, MessageCircle } from "lucide-react";
import {
  Avatar,
  AvatarImage,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui";
import { AvatarFallback } from "@radix-ui/react-avatar";
type Props = {};

function Notification({}: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Bell className="text-white" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-[10rem]" align="end">
        <DropdownMenuLabel className="w-full ">
          <div className="flex justify-between ">
            <p>Notifications</p>
            <Settings />
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <div className="absolute -top-3 right-0 z-50 rounded-full border border-white bg-blue-400 p-0.5">
                <MessageCircle className="h-4 w-4 text-white" />
              </div>
              <Avatar>
                <AvatarImage src="/cvpic.jpg" />
                <AvatarFallback>A</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex  flex-col ">
              <p className="w-72">
                <span className="font-semibold">Sadman</span> commented on
                Ecosystems and conservation
              </p>
              <p>1m ago</p>
            </div>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default Notification;
