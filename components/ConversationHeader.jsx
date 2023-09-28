import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";

const ConversationHeader = () => {
  return (
    <Flex className="items-center justify-between w-full md:px-2">
      <Flex className="gap-2 items-center">
        <IoIosArrowBack className="md:hidden h-8 w-8" />
        <Image
          src="https://avatars0.githubusercontent.com/u/1164541?v=4"
          alt=""
          className="h-10 w-10 object-cover rounded-full"
        />
        <Flex className="flex-col">
          <Text className="font-semibold text-lg md:text-base">Ashish P.</Text>
          <Text className="hidden md:flex text-[0.8vw]">
            <span>Offline 3 hours ago |</span>
            <span>Responds in 6 mins |</span>
            <span>Business hours: 9:30 p.m. to 9:30 a.m.</span>
          </Text>
        </Flex>
      </Flex>
      <Flex className="gap-2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-stickies"
          viewBox="0 0 16 16"
        >
          <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5V13a1 1 0 0 0 1 1V1.5a.5.5 0 0 1 .5-.5H14a1 1 0 0 0-1-1H1.5z" />
          <path d="M3.5 2A1.5 1.5 0 0 0 2 3.5v11A1.5 1.5 0 0 0 3.5 16h6.086a1.5 1.5 0 0 0 1.06-.44l4.915-4.914A1.5 1.5 0 0 0 16 9.586V3.5A1.5 1.5 0 0 0 14.5 2h-11zM3 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .5.5V9h-4.5A1.5 1.5 0 0 0 9 10.5V15H3.5a.5.5 0 0 1-.5-.5v-11zm7 11.293V10.5a.5.5 0 0 1 .5-.5h4.293L10 14.793z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-three-dots"
          viewBox="0 0 16 16"
        >
          <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
        </svg>
        <Button className="bg-brand-primary h-[100%] cursor-pointer text-sm border-none rounded-md text-white px-4 py-2 hover:text-black">
          Order
        </Button>
      </Flex>
    </Flex>
  );
};

export default ConversationHeader;
