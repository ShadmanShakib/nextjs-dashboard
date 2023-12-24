import React from "react";
import ChatBox from "./components/chat-box";
import ChatboxHeader from "./components/chat-box-header";
type Props = {};

function page({}: Props) {
  return (
    <main className="relative   min-h-full ">
      <div className="">
        <ChatboxHeader />
      </div>

      <ChatBox />
    </main>
  );
}

export default page;
