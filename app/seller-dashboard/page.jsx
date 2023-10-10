"use client";

import Chats from "@/components/Chats";
import Message from "@/components/Message";
import SellerStats from "@/components/SellerStats";
import Stats from "@/components/Stats";

import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="relative min-h-screen">
      <Flex className="w-[98%] md:w-[95%] lg:w-11/12 flex-col md:flex-row items-center md:items-start mx-auto lg:container">
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
          {/* 4 Step Process */}
          <Flex className="w-full flex-col bg-white p-5 gap-5">
            <List>
              <ListItem>
                <Flex
                  align="center"
                  justify="space-evenly"
                  borderBottom={"1px solid rgb(133, 133, 133)"}
                  className="flex-col sm:flex-row mt-6 p-5 bg-white"
                >
                  {/* Image Container */}
                  <Flex
                    borderRadius="sm"
                    overflow="hidden"
                    position="relative"
                    className="m-1 sm:order-last"
                  >
                    <Image
                      src={"https://cdn.kwork.com/images/index/kwork-steps.svg"}
                      alt=""
                      objectFit="cover"
                      className="w-full h-60 sm:w-80"
                    />
                  </Flex>
                  {/*Details Container*/}
                  <Box className="w-full sm:w-5/6 px-4">
                    <Text className="mt-4 sm:mt-10 font-bold text-lg">
                      Four Simple Steps to Workpido Success
                    </Text>
                    <Text className="mt-2">
                      {`The secret to success on Workpido is starting off on the right foot and actively maintaining your ratings. Here are some tips to help you become a top seller on Workpido.`}
                    </Text>
                  </Box>
                </Flex>
              </ListItem>
              <ListItem>
                <Flex
                  align="start"
                  justify="space-evenly"
                  borderBottom={"1px solid rgb(133, 133, 133)"}
                  className="flex-col md:flex-row mt-3 pb-3"
                >
                  {/* Image Container */}
                  <Flex
                    borderRadius="sm"
                    overflow="hidden"
                    className="m-1 items-start"
                  >
                    <Image
                      src={"https://cdn.kwork.com/images/index/magic-wand.svg"}
                      alt=""
                      objectFit="cover"
                      className="w-24 h-24"
                    />
                    <Box className="w-full md:w-3/4 px-4">
                      <Text className="font-bold text-lg">
                        Step 1: Create your kworks—the more, the better
                      </Text>
                    </Box>
                  </Flex>
                  {/* Button Container */}
                  <Flex
                    flexDirection="row"
                    align="center"
                    justify="space-between"
                    className="mt-4 sm:justify-center sm:mx-3"
                  >
                    <Button
                      width={"100%"}
                      as={"a"}
                      display={"inline-flex"}
                      fontSize={"sm"}
                      fontWeight={600}
                      border={"1px"}
                      borderColor={"brand.primary"}
                      color={"brand.primary"}
                      bg={"white"}
                      href={"/how-to-earn"}
                      _hover={{
                        bg: "brand.primary",
                        color: "white",
                      }}
                      className="m-3"
                    >
                      Learn More
                    </Button>
                  </Flex>
                </Flex>
              </ListItem>
              <ListItem>
                <Flex
                  align="start"
                  justify="space-evenly"
                  borderBottom={"1px solid rgb(133, 133, 133)"}
                  className="flex-col md:flex-row mt-3 pb-3"
                >
                  {/* Image Container */}
                  <Flex
                    borderRadius="sm"
                    overflow="hidden"
                    className="m-1 items-start"
                  >
                    <Image
                      src={"https://cdn.kwork.com/images/index/magic-wand.svg"}
                      alt=""
                      objectFit="cover"
                      className="w-24 h-24"
                    />
                    <Box className="w-full md:w-3/4 px-4">
                      <Text className="font-bold text-lg">
                        Step 2: Share your kworks to get your first orders and
                        reviews!
                      </Text>
                    </Box>
                  </Flex>
                  {/* Button Container */}
                  <Flex
                    flexDirection="row"
                    align="center"
                    justify="space-between"
                    className="mt-4 sm:justify-center sm:mx-3"
                  >
                    <Button
                      width={"100%"}
                      as={"a"}
                      display={"inline-flex"}
                      fontSize={"sm"}
                      fontWeight={600}
                      border={"1px"}
                      borderColor={"brand.primary"}
                      color={"brand.primary"}
                      bg={"white"}
                      href={"/how-to-earn"}
                      _hover={{
                        bg: "brand.primary",
                        color: "white",
                      }}
                      className="m-3"
                    >
                      Learn More
                    </Button>
                  </Flex>
                </Flex>
              </ListItem>
              <ListItem>
                <Flex
                  align="start"
                  justify="space-between"
                  borderBottom={"1px solid rgb(133, 133, 133)"}
                  className="flex-col md:flex-row mt-3 pb-3"
                >
                  {/* Image Container */}
                  <Flex
                    borderRadius="sm"
                    overflow="hidden"
                    className="m-1 items-start justify-start"
                  >
                    <Image
                      src={"https://cdn.kwork.com/images/index/smartphone.svg"}
                      alt=""
                      objectFit="cover"
                      className="w-24 h-24"
                    />
                    <Box className="w-full md:w-3/4 px-4">
                      <Text className="font-bold text-lg">
                        Step 3: Get the Kwork app
                      </Text>
                    </Box>
                  </Flex>
                  {/* Button Container */}
                  <Flex
                    flexDirection="row"
                    align="center"
                    justify="space-between"
                    className="mt-4 sm:justify-center sm:mx-3"
                  >
                    <Button
                      width={"100%"}
                      as={"a"}
                      display={"inline-flex"}
                      fontSize={"sm"}
                      fontWeight={600}
                      border={"1px"}
                      borderColor={"brand.primary"}
                      color={"brand.primary"}
                      bg={"white"}
                      href={"/how-to-earn"}
                      _hover={{
                        bg: "brand.primary",
                        color: "white",
                      }}
                      className="m-3"
                    >
                      Learn More
                    </Button>
                  </Flex>
                </Flex>
              </ListItem>
              <ListItem>
                <Flex
                  align="start"
                  justify="space-evenly"
                  borderBottom={"1px solid rgb(133, 133, 133)"}
                  className="flex-col md:flex-row mt-3 pb-3"
                >
                  {/* Image Container */}
                  <Flex
                    borderRadius="sm"
                    overflow="hidden"
                    className="m-1 items-start"
                  >
                    <Image
                      src={"https://cdn.kwork.com/images/index/hat.svg"}
                      alt=""
                      objectFit="cover"
                      className="w-24 h-24"
                    />
                    <Box className="w-full md:w-3/4 px-4">
                      <Text className="font-bold text-lg">
                        Step 4: Take our free introductory course How To Earn on
                        Kwork
                      </Text>
                    </Box>
                  </Flex>
                  {/* Button Container */}
                  <Flex
                    flexDirection="row"
                    align="center"
                    justify="space-between"
                    className="mt-4 sm:justify-center sm:mx-3"
                  >
                    <Button
                      width={"100%"}
                      as={"a"}
                      display={"inline-flex"}
                      fontSize={"sm"}
                      fontWeight={600}
                      border={"1px"}
                      borderColor={"brand.primary"}
                      color={"brand.primary"}
                      bg={"white"}
                      href={"/how-to-earn"}
                      _hover={{
                        bg: "brand.primary",
                        color: "white",
                      }}
                      className="m-3"
                    >
                      Learn More
                    </Button>
                  </Flex>
                </Flex>
              </ListItem>
            </List>
          </Flex>
        </Flex>
      </Flex>
    </main>
  );
};

export default page;
