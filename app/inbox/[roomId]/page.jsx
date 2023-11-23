"use client";
import { Box, Container, Flex, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ChatBox } from "@/components/chat/ChatBox";
import { API } from "@/lib/api";
import useAuth from "@/hooks/useAuth";
import Pusher from "pusher-js";
import { toast } from "react-toastify";

const page = ({ params }) => {
  const { me, user } = useAuth();

  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const [receiver, setReceiver] = useState(null);
  const [chatNotFound, setChatNotFound] = useState(false);

  const { roomId } = params;

  const addMessage = async (
    text,
    sender = { name: user?.displayName || user?.username },
    timestamp = new Date(),
    read = true
  ) => {
    try {
      await API.sendMessage({
        content: text,
        receiver: { id: receiver?.id, username: receiver?.username },
      });
    } catch (error) {
      toast.error("Error while sending message");
      console.log(error);
    }
    setMessages((prevMessages) => [
      ...prevMessages,
      { text, sender, timestamp, read },
    ]);
  };

  useEffect(() => {
    getChatInfo();
  }, []);

  useEffect(() => {
    getChatMessages();
  }, []);

  // pusher config
  useEffect(() => {
    if (!user?.username) return;

    const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY, {
      cluster: "ap2",
    });

    const channel = pusher.subscribe(user?.username);

    channel.bind("new-message", function (data) {
      // Handle the new message data and update the UI
      const { content, sender, timestamp } = data;
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          text: content,
          sender: {
            name: sender?.name,
            id: sender?.id,
          },
          timestamp: timestamp,
          read: true,
        },
      ]);
      console.log("New Message:", data.message);
    });

    // Clean up subscriptions on component unmount
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [user]);

  async function getChatInfo() {
    setLoading(true);
    try {
      const res = await API.getChatInfo({ roomId: roomId });
      setReceiver(
        res?.receiver?.username == roomId ? res?.receiver : res?.sender
      );
      setLoading(false);
    } catch (error) {
      setChatNotFound(true);
    }
  }

  async function getChatMessages() {
    setLoading(true);
    try {
      const res = await API.getMessages({ roomId: roomId });
      setMessages(res);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  return (
    <>
      {loading ? (
        <Box w={"full"} h={"full"} display={"grid"} placeContent={"center"}>
          {chatNotFound ? <Text>User not found</Text> : <Spinner />}
        </Box>
      ) : (
        <ChatBox
          messages={messages}
          addMessage={addMessage}
          receiver={receiver}
        />
      )}
    </>
  );
};

export default page;
