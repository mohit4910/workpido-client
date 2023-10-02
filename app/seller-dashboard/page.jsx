"use client";

import Chats from "@/components/Chats";
import Message from "@/components/Message";
import SellerStats from "@/components/SellerStats";
import Stats from "@/components/Stats";

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Textarea,
  Tfoot,
  Th,
  Thead,
  Tr,
  useSteps,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

import { FaQuestion, FaUserCircle } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { LuFileStack } from "react-icons/lu";
import { TbWriting } from "react-icons/tb";

const page = () => {
  return (
    <main className="relative min-h-screen">
      <Flex className="w-[98%] md:w-[95%] lg:w-11/12 flex-col md:flex-row items-center md:items-start mx-auto">
        {/* Main Content */}
        {/* SideBar - Comes Down on smaller displays */}
        <Flex
          flexDirection={"column"}
          className="w-[96%] md:w-[30%] my-10 mx-3 md:mx-0 gap-6"
        >
          <Flex className="bg-white flex-col p-3">
            <SellerStats />
          </Flex>
          {/* Inbox */}
          <Flex className="bg-white flex-col px-3 py-10 relative h-[30rem]">
            <Box className="bg-white z-50 absolute p-3 top-0 left-0 right-0">
              <Text className="font-semibold text-lg">Inbox</Text>
            </Box>
            <Chats />
          </Flex>
        </Flex>
        {/* More Info */}
        <Flex className="md:mx-3 lg:mx-auto w-[98%] md:w-10/12 md:my-10 lg:w-8/12 flex-col gap-6">
          {/* Order Info */}
          <Flex className="w-full justify-between bg-white p-5 gap-5">
            <Flex gap={2}>
              <Heading className="font-semibold text-xl ">My Orders</Heading>
              <Heading className="font-normal text-xl text-neutral-500">
                - Total 2 ($200)
              </Heading>
            </Flex>

            <Link href={"/orders"}>View all</Link>
          </Flex>
          {/*My Works*/}
          <Flex className="w-full justify-between bg-white p-5 gap-5">
            <Flex gap={2}>
              <Heading className="font-semibold text-xl ">My Workpidos</Heading>
              <Heading className="font-normal text-xl text-neutral-500">
                - Active 20{" "}
              </Heading>
            </Flex>

            <Link href={"/orders"}>View all</Link>
          </Flex>
        </Flex>
      </Flex>
    </main>
  );
};

export default page;
