import { API_BASE_URL, STORAGE_PROVIDER } from "@/lib/constants";
import { Flex, HStack, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { useContext, useEffect, useRef } from "react";

const Message = ({ msg, avatar, username, files, updateType }) => {
  return (
    <Flex className="gap-4 items-start hover:bg-gray-200 py-2">
      <Flex className="items-center flex-col">
        <Image
          src={avatar}
          alt={username}
          className=" h-10 w-10 rounded-full object-cover"
        />
      </Flex>
      <Flex className="gap-1 max-w-[80%] flex-col">
        <Text className=" text-base font-medium max-w-fit px-2">
          {username}
          {updateType == "review"
            ? " left a review"
            : updateType == "reviewResponse"
            ? " responded to review"
            : ""}
        </Text>

        <Text className=" max-w-fit px-2">{msg}</Text>
        {files ? (
          <HStack mt={3} gap={4}>
            {files?.map((file, key) => (
              <Link
                href={
                  STORAGE_PROVIDER == "local"
                    ? API_BASE_URL?.replace("/api", "") + file?.url
                    : file?.url
                }
                target="_blank"
              >
                <Image
                  boxSize={12}
                  objectFit={"contain"}
                  src={
                    STORAGE_PROVIDER == "local"
                      ? API_BASE_URL?.replace("/api", "") + file?.url
                      : file?.url
                  }
                />
              </Link>
            ))}
          </HStack>
        ) : null}
      </Flex>
    </Flex>
  );
};

export default Message;
