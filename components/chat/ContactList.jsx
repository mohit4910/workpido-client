"use client";
import React, { useState, useEffect } from "react";
import { Box, Input, Text } from "@chakra-ui/react";
import { ContactCard } from "./ContactCard";
import { API } from "@/lib/api";
import { toast } from "react-toastify";
import useAuth from "@/hooks/useAuth";
import Pusher from "pusher-js";

export const ContactList = () => {
  // Sample contacts, replace with your data
  const { user } = useAuth();
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchChats();
  }, []);

  // pusher config
  useEffect(() => {
    if (!user?.username) return;

    const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY, {
      cluster: "ap2",
    });

    const channel = pusher.subscribe(user?.username);

    channel.bind("chat-updated", function (data) {
      // Handle the new message data and update the UI
      fetchChats();
    });

    pusher.connection.bind("disconnect", async () => {
      await API.updateMe({ online: false });
    });

    pusher.connection.bind("connect", async () => {
      await API.updateMe({ online: true });
    });

    // Clean up subscriptions on component unmount
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [user]);

  async function fetchChats() {
    try {
      const res = await API.getChats();
      setContacts(res);
    } catch (error) {
      toast.error("Error while fetching chats");
    }
  }

  return (
    <Box w={["full", "xs"]} bg="#FFF" borderRight={"1px"}>
      <Box p={4} borderBottom={"1px"}>
        <Input
          size={"sm"}
          rounded={4}
          placeholder="Search Chats"
          _placeholder={{ textAlign: "center" }}
        />
      </Box>
      {contacts.map((contact, index) => (
        <ContactCard key={index} {...contact} />
      ))}
    </Box>
  );
};
