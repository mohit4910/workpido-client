"use client";
import React, { useState, useEffect } from "react";
import { Box, Input, Text } from "@chakra-ui/react";
import { ContactCard } from "./ContactCard";

export const ContactList = () => {
  // Sample contacts, replace with your data
  const contacts = [
    {
      name: "Contact 1",
      recentMessage: "Hello!",
      avatarUrl: "url_to_avatar_1",
    },
    {
      name: "Contact 2",
      recentMessage: "Hi there!",
      avatarUrl: "url_to_avatar_2",
    },
    { name: "Contact 3", recentMessage: "Hey!", avatarUrl: "url_to_avatar_3" },
  ];

  return (
    <Box w={["full", "xs"]} bg="#FFF" borderRight={"1px"}>
      <Box p={4} borderBottom={'1px'}>
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
