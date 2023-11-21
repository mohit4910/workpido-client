"use client";
import React from "react";
import {
  Avatar,
  Box,
  Button,
  HStack,
  IconButton,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { InputBox } from "./InputBox";
import { FiSearch } from "react-icons/fi";
import { FaCirclePlus } from "react-icons/fa6";
import { monthNames } from "@/lib/constants";

export const ChatBox = ({ messages, addMessage }) => {
  return (
    <>
      <Box p={4} borderBottom={"1px"}>
        <HStack>
          <Avatar size={"sm"} />
          <Box>
            <Text fontSize="12px" fontWeight={"semibold"}>
              User
            </Text>
            <Text fontSize="8px" fontWeight={"medium"} color={"gray.500"}>
              User
            </Text>
          </Box>
          <Spacer />
          <HStack gap={4}>
            <FiSearch size={20} cursor={"pointer"} color={"#999"} />
            <Button
              size={"sm"}
              colorScheme="whatsapp"
              leftIcon={<FaCirclePlus />}
            >
              Order
            </Button>
          </HStack>
        </HStack>
      </Box>
      <Box h={"80%"} overflowY={"scroll"}>
        {messages.map((message, index) => (
          <HStack
            p={4}
            gap={4}
            key={index}
            alignItems={"flex-start"}
            _hover={{ bgColor: "gray.50" }}
          >
            <Avatar size={"xs"} />
            <Box w={"85%"}>
              <Text fontWeight="semibold">{message.user}</Text>
              <Text>{message.text}</Text>
            </Box>
            <Text fontSize={"xs"} color={"#999"}>
              {`${new Date().getDate()} ${monthNames[new Date().getMonth() - 1].slice(0, 3)}`}
            </Text>
          </HStack>
        ))}
      </Box>
      <Box px={3}>
        <InputBox addMessage={addMessage} />
      </Box>
    </>
  );
};
