import React from "react";
import { Send } from "lucide-react";
import { Button } from "@/app/components/ui/button";
type Props = {};

function ChatBox({}: Props) {
  return (
    <div className=" bg-white py-3 mb-4">

    <div className="bg-white px-4     w-full rounded-md">
      <div className="w-full flex justify-between shadow-md rounded-md py-1 px-2 items-center">
        <input
          className="focus:outline-none"
          placeholder="Type your message here"
        />
        <Button>
          <Send className="mr-2" />
          <p>SEND</p>
        </Button>
      </div>
    </div>
    </div>
  );
}

export default ChatBox;
