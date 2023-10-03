import { Avatar, Box, Flex, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { MdOutlineStickyNote2 } from "react-icons/md";

const OrderCard = () => {
  let orderDetails = {
    artileName: "I will create responsive websites in Next.js",
    buyer: {
      fullName: "Adarsh Prakash",
      userName: "geekguyadarsh",
      photoURL: "https://avatars0.githubusercontent.com/u/1164541?v=4",
    },
    deliveryDate: "August 15, 2023",
    price: "$15",
    isCompleted: true,
    isCanceled: false,
  };
  return (
    <Flex className="w-[95%] mx-auto bg-white shadow-lg lg:rounded-none border rounded-lg shadow-stone-400/40 px-3 py-2 flex-col lg:flex-row gap-2">
      {/* Name */}

      <Flex className="w-full lg:items-center lg:w-2/6">
        <Link
          href={"/order-details"}
          className="hover:text-indigo-600 items-center"
        >
          {orderDetails.artileName}
        </Link>
      </Flex>
      {/* Status */}
      <Flex className="w-full lg:w-1/6 gap-2 items-end flex-col lg:order-last">
        <Text className="text-xs text-neutral-500">
          {orderDetails.deliveryDate}
        </Text>
        {orderDetails.isCompleted && (
          <Box className="py-1 px-2 border border-brand-primary rounded-md bg-brand-primary">
            <Text className="text-xs text-white font-medium">Completed</Text>
          </Box>
        )}
        {orderDetails.isCanceled && (
          <Box className="py-1 px-3 border border-red-700 rounded-md bg-red-700">
            <Text className="text-xs text-white font-medium">Canceled</Text>
          </Box>
        )}
      </Flex>
      {/* Details */}
      <Flex className="items-center justify-evenly lg:w-3/6">
        {/* Buyer */}
        <Box className="items-center w-1/2 lg:px-2">
          <Link href={"/profile"}>
            <Stack my={4} direction={"row"} spacing={1} align={"center"}>
              <Avatar size={"sm"} src={orderDetails.buyer.photoURL} />
              <Text fontSize={"xs"}>{orderDetails.buyer.userName}</Text>
            </Stack>
          </Link>
        </Box>
        {/* Note */}
        <Flex className="w-1/3 items-center justify-center">
          <MdOutlineStickyNote2 />
        </Flex>
        {/* Price */}
        <Box className="w-1/3 items-center">
          <Text className="text-center">{orderDetails.price}</Text>
        </Box>
      </Flex>
      {/* Review - only visible on smaller displays */}
      <Flex className="lg:w-1/6 lg:border-none lg:items-center justify-center border border-gray-700 rounded-md w-3/4 text-center my-1 py-1 mx-auto">
        <Link href="/order-details">
          <Text className="font-medium">Read the Review</Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default OrderCard;
