"use client";

import InboxConversation from "@/components/InboxConversation";
import InboxSidebar from "@/components/InboxSidebar";

import { Flex } from "@chakra-ui/react";

import React, { useState } from "react";

const page = () => {
  return (
    <main className="flex flex-col bg-emerald-400 items-center justify-start min-h-screen md:min-h-[82vh]">
      {/* Desktop View */}
      <Flex className="hidden md:flex items-center min-h-full h-screen md:h-[75vh] md:my-auto w-screen md:w-5/6 justify-center bg-white">
        <Flex className="overflow-hidden h-full w-full">
          <InboxSidebar />
          <InboxConversation />
        </Flex>
      </Flex>
    </main>
  );
};
export default page;
