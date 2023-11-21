"use client";
import React from "react";
import { Box, Avatar, Text, Tooltip } from "@chakra-ui/react";

const truncateMessage = (message, maxLength) => {
  if (message.length > maxLength) {
    return `${message.substring(0, maxLength)}...`;
  }
  return message;
};

export const ContactCard = ({ name, recentMessage, avatarUrl }) => {
  const truncatedMessage = truncateMessage(recentMessage, 30); // Adjust the length as needed

  return (
    <Box
      display="flex"
      alignItems="center"
      py={3}
      px={4}
      cursor={"pointer"}
      _hover={{ bgColor: "gray.50" }}
    >
      <Avatar src={avatarUrl} name={name} size={"md"} mr="2" />
      <Box>
        <Text fontWeight="bold" fontSize={"xs"}>
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
  );
};
