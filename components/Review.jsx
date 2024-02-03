"use client";
import { Avatar, Box, HStack, Stack, Text } from "@chakra-ui/react";
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
  gigId,
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
        <HStack alignItems={"flex-start"} gap={[3, 6]}>
          <Box>
            <Avatar size={["sm", "md"]} name={username} />
          </Box>
          <Box w={"full"}>
            <Text fontWeight={"medium"}>{username}</Text>
            <HStack py={2}>
              {intent == "negative" ? (
                <BsEmojiFrownFill color="red" />
              ) : intent == "positive" ? (
                <BsEmojiSmileFill color="#04b70a" />
              ) : null}
              <Text fontSize={"xs"} color={"gray.600"}>
                7 months ago
              </Text>
            </HStack>
            <Text fontSize={"xs"}>{content}</Text>
            {replyContent ? (
              <Box p={[0, 8]} pb={0} pt={[6]}>
                <HStack alignItems={"flex-start"} gap={[3, 6]} w={'full'}>
                  <Box>
                    <Avatar size={["sm", "md"]} name={"sangam4742"} />
                  </Box>
                  <Box w={"full"}>
                    <Stack direction={['column']} gap={2} mb={2}>
                      <Text fontWeight={"medium"}>sangam4742</Text>
                      <Text fontSize={"xs"} color={"gray.600"}>
                        7 months ago
                      </Text>
                    </Stack>

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
