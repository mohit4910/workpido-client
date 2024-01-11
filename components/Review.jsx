"use client";
import { Avatar, Box, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { BsEmojiFrownFill, BsEmojiSmileFill } from "react-icons/bs";

const Review = ({ username, content, timestamp, intent }) => {
  return (
    <>
      <Box
        p={4}
        pb={6}
        w={"full"}
        borderBottom={"0.5px solid"}
        borderColor={"gray.300"}
      >
        <HStack alignItems={"flex-start"} gap={6}>
          <Box>
            <Avatar size={"md"} name={username} />
          </Box>
          <Box w={"full"}>
            <Text fontWeight={"medium"}>{username}</Text>
            <HStack py={2}>
              {intent == "negative" ? (
                <BsEmojiFrownFill color="red" />
              ) : (
                <BsEmojiSmileFill color="#04b70a" />
              )}
              <Text fontSize={"xs"} color={"gray.600"}>
                7 months ago
              </Text>
            </HStack>
            <Text fontSize={"xs"}>{content}</Text>
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default Review;
