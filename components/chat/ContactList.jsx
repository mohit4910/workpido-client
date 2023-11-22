"use client";
import React, { useState, useEffect } from "react";
import { Box, Input, Text } from "@chakra-ui/react";
import { ContactCard } from "./ContactCard";
import { API } from "@/lib/api";
import { toast } from "react-toastify";

export const ContactList = () => {
  // Sample contacts, replace with your data
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchChats();
  }, []);

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
