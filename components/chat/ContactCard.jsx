"use client";
import React from "react";
import { Box, Avatar, Text, Tooltip } from "@chakra-ui/react";
import Link from "next/link";

const truncateMessage = (message, maxLength) => {
  if (message.length > maxLength) {
    return `${message.substring(0, maxLength)}...`;
  }
  return message;
};

export const ContactCard = (params) => {
  const { name, recentMessage, avatarUrl, chatId } = params;
  const truncatedMessage = truncateMessage(recentMessage, 30); // Adjust the length as needed

  return (
    <Link href={`/inbox/${name}`}>
      <Box
        display="flex"
        alignItems="flex-start"
        py={3}
        px={4}
        cursor={"pointer"}
        _hover={{ bgColor: "gray.50" }}
      >
        <Avatar src={avatarUrl} name={name} size={"md"} mr="2" />
        <Box py={1}>
          <Text fontWeight="bold" fontSize={"sm"}>
            {name}
          </Text>
          <Tooltip label={recentMessage}>
            <Text
              fontSize={"xs"}
              color="gray.500"
              maxW="200px"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowrap"
            >
              {truncatedMessage}
            </Text>
          </Tooltip>
        </Box>
      </Box>
    </Link>
  );
};
