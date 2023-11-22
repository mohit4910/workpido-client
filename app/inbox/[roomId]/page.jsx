"use client";
import { Box, Container, Flex, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ChatBox } from "@/components/chat/ChatBox";
import { API } from "@/lib/api";

const page = ({ params }) => {
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);
  const [chatNotFound, setChatNotFound] = useState(false);

  const { roomId } = params;

  const addMessage = (text, user = "User") => {
    setMessages((prevMessages) => [...prevMessages, { text, user }]);
  };

  useEffect(() => {
    getChatInfo();
  }, []);

  async function getChatInfo() {
    try {
      const res = await API.getChatInfo({ roomId: roomId });
      setUser(res?.receiver?.username == roomId ? res?.receiver : res?.sender);
    } catch (error) {
      setChatNotFound(true);
    }
  }

  return (
    <>
      {loading ? (
        <Box w={"full"} h={"full"} display={"grid"} placeContent={"center"}>
          {chatNotFound ? <Text>User not found</Text> : <Spinner />}
        </Box>
      ) : (
        <ChatBox messages={messages} addMessage={addMessage} receiver={user} />
      )}
    </>
  );
};

export default page;
