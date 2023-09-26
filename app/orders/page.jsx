"use client";

import OrderCard from "@/components/OrderCard";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { GiCheckMark } from "react-icons/gi";

const page = () => {
  return (
    <main className="flex flex-col bg-white items-center justify-evenly min-h-screen">
      {/* Banner */}
      <Flex
        flexDirection="column"
        align="center"
        bgImage="url(https://images.pexels.com/photos/8062289/pexels-photo-8062289.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)"
        className="w-full"
      >
        <Flex
          flexDirection="column"
          align="center"
          bgColor="#0000009c"
          className="px-10 py-14 w-full"
        >
          <Heading className="mb-3 text-white text-4xl font-normal">
            My Orders
          </Heading>
        </Flex>
      </Flex>
      {/* Main Content */}
      <Flex
        flexDirection="column"
        align="center"
        className="pt-10 w-screen gap-3 lg:w-3/4"
      >
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </Flex>
    </main>
  );
};
export default page;
