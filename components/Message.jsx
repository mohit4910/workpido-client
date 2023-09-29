import { Flex, Image, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useRef } from "react";

const Message = () => {
  let currentUser = {
    uid: "geekguyadarsh",
    fullname: "Adarsh P.",
    photo: "https://avatars0.githubusercontent.com/u/1164541?v=4",
  };
  let message = {
    senderId: "geekguyadarsh",
    senderName: "Adarsh P.",
    senderPhoto: "https://avatars0.githubusercontent.com/u/1164541?v=4",
    text: "Hello, What's the status of the project?",
    img: null,
  };

  return (
    <Flex className="gap-4 items-start hover:bg-gray-200 py-2">
      <Flex className="items-center flex-col">
        <Image
          src={
            message.senderId === currentUser.uid
              ? currentUser.photo
              : message.senderId
          }
          alt=""
          className=" h-10 w-10 rounded-full object-cover"
        />
      </Flex>
      <Flex className="gap-1 max-w-[80%] flex-col">
        <Text className=" text-base font-medium max-w-fit px-2">
          {message.senderName}
        </Text>

        <Text className=" max-w-fit px-2">{message.text}</Text>
        {message.img && <Image src={message.img} alt="" className="w-2/5" />}
      </Flex>
    </Flex>
  );
};

export default Message;
