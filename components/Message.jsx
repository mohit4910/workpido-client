import { Flex, Image, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useRef } from "react";

const Message = ({ msg, avatar, username }) => {

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
        </Text>

        <Text className=" max-w-fit px-2">{msg}</Text>
        {/* {message.img && <Image src={message.img} alt="" className="w-2/5" />} */}
      </Flex>
    </Flex>
  );
};

export default Message;
