"use client";
import { Avatar, Box, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { BsEmojiFrownFill, BsEmojiSmileFill } from "react-icons/bs";

const Review = ({
  username,
  avatar,
  content,
  timestamp,
  intent,
  replyContent,
  repliedByName,
  repliedByAvatar,
  gigTitle,
  gigId
}) => {
  return (
    <>
      <Link href={`/gigs/${gigId}`}>
        <Text color={"twitter.600"}>{gigTitle}</Text>
      </Link>
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
            {replyContent ? (
              <Box p={8} pb={0}>
                <HStack alignItems={"flex-start"} gap={6}>
                  <Box>
                    <Avatar size={"md"} name={"sangam4742"} />
                  </Box>
                  <Box w={"full"}>
                    <HStack>
                      <Text fontWeight={"medium"}>sangam4742 - </Text>
                      <Text fontSize={"xs"} color={"gray.600"} py={2}>
                        7 months ago
                      </Text>
                    </HStack>

                    <Text fontSize={"xs"}>{replyContent}</Text>
                  </Box>
                </HStack>
              </Box>
            ) : null}
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default Review;
