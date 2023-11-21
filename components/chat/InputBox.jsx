"use client";
import React, { useState } from "react";
import { Input, Button, Flex, HStack } from "@chakra-ui/react";
import { BsPaperclip } from "react-icons/bs";
import { VscSend } from "react-icons/vsc";

export const InputBox = ({ addMessage }) => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.trim() !== "") {
      addMessage(input);
      setInput("");
    }
  };

  return (
    <HStack pt="4" borderTop={"1px"}>
      <BsPaperclip size={24} color={"#999"} cursor={"pointer"} />
      <Input
        variant="unstyled"
        placeholder="Type your message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <VscSend onClick={handleSubmit} cursor={"pointer"} size={24} />
    </HStack>
  );
};
