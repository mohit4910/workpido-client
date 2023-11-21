"use client";
import { Box, Container, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { ChatBox } from "@/components/chat/ChatBox";
import { InputBox } from "@/components/chat/InputBox";
import { ContactList } from "@/components/chat/ContactList";

const page = () => {
  const [messages, setMessages] = useState([]);

  const addMessage = (text, user = "User") => {
    setMessages((prevMessages) => [...prevMessages, { text, user }]);
  };

  return (
    <>
      <Box p={[4]} bgColor={'#f6f6f6'}>
        <Container maxW={["full", "4xl", "6xl"]}>
          <Flex
            h={["full", "xl", "2xl"]}
            rounded={"8"}
            boxShadow={"base"}
            overflow={"hidden"}
            bgColor={'#FFF'}
          >
            <ContactList />
            <Box flex="1">
              <ChatBox messages={messages} addMessage={addMessage} />
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default page;
