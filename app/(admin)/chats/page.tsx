import React from "react";
import ChatBox from "./components/chat-box";
import ChatboxHeader from "./components/chat-box-header";
import ChatMessages from "./components/chat-messages";
type Props = {};

function page({}: Props) {
  return (
    <main className="relative flex flex-col    min-h-full ">
      <div className="">
        <ChatboxHeader />
      </div>
      <ChatMessages />
      <ChatBox />
    </main>
  );
}

export default page;
