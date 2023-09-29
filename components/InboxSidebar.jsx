import { Flex } from "@chakra-ui/react";
import React from "react";
import ChatSearch from "./ChatSearch";
import Chats from "./Chats";

const InboxSidebar = () => {
  return (
    <Flex className="w-screen md:flex px-2 flex-col md:w-[30%]">
      <ChatSearch />
      <Chats onShow />
    </Flex>
  );
};

export default InboxSidebar;
