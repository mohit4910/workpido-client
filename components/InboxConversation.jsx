import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { React } from "react";
import ConversationHeader from "./ConversationHeader";
import InputBar from "./InputBar";
import Messages from "./Messages";
const InboxConversation = () => {
  let chatId = "null";

  return chatId !== null ? (
    <Flex className="flex flex-col w-screen md:w-[70%] px-3 md:px-0">
      {/* Banner */}
      <Flex className="bg-white h-[12%] items-center justify-between md:px-3 border md:py-5 max-h-24">
        <ConversationHeader />
      </Flex>
      <Box className="h-[76%]">
        <Messages />
      </Box>
      <Box className="h-[12%]">
        <InputBar />
      </Box>
    </Flex>
  ) : (
    <Flex>
      <Text className="text-center p-5 text-3xl text-black font-extrabold ">
        Choose a user to start conversation.
      </Text>
    </Flex>
  );
};

export default InboxConversation;
