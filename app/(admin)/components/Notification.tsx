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
              <div className="absolute z-50 right-0 bg-blue-400 rounded-full p-0.5 -top-3 border border-white">
                <MessageCircle className="h-4 text-white w-4" />
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
