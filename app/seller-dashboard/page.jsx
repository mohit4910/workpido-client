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
import React, { useEffect, useState } from "react";
import Loading from "../loading";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";

const Page = () => {
  const { push } = useRouter();
  const { isLoggedIn, user } = useAuth();

  useEffect(() => {
    if (!Cookies.get("token")) {
      push("/");
    }
  }, []);

  if (!isLoggedIn) {
    return <Loading />;
  }

  return (
    <main className="relative min-h-screen">
      <Flex className="w-[98%] md:w-[95%] lg:w-11/12 flex-col md:flex-row items-center md:items-start mx-auto lg:container">
        {/* Main Content */}
        {/* SideBar - Comes Down on smaller displays */}
        <Flex
          flexDirection={"column"}
          className="w-[96%] md:w-[30%] my-10 mx-3 md:mx-0 gap-6"
        >
          <Flex className="flex-col p-3 bg-white">
            <SellerStats seller={user} />
          </Flex>
          {/* Inbox */}
          <Flex className="bg-white flex-col px-3 py-10 relative h-[30rem]">
            <Box className="absolute top-0 left-0 right-0 z-50 p-3 bg-white">
              <Text className="text-lg font-semibold">Inbox</Text>
            </Box>
            <Chats />
          </Flex>
        </Flex>
        {/* More Info */}
        <Flex className="md:mx-3 lg:mx-auto w-[98%] md:w-10/12 md:my-10 lg:w-8/12 flex-col gap-6">
          {/* Order Info */}
          <Flex className="justify-between w-full gap-5 p-5 bg-white">
            <Flex gap={2}>
              <Heading className="text-xl font-semibold ">My Orders</Heading>
              <Heading className="text-xl font-normal text-neutral-500">
                - Total 2 ($200)
              </Heading>
            </Flex>
            <Link href={"/orders"}>View all</Link>
          </Flex>
          {/*My Works*/}
          <Flex className="justify-between w-full gap-5 p-5 bg-white">
            <Flex gap={2}>
              <Heading className="text-xl font-semibold ">My Workpidos</Heading>
              <Heading className="text-xl font-normal text-neutral-500">
                - Active 20{" "}
              </Heading>
            </Flex>

            <Link href={"/orders"}>View all</Link>
          </Flex>
          {/* 4 Step Process */}
          <Flex className="flex-col w-full gap-5 p-5 bg-white">
            <List>
              <ListItem>
                <Flex
                  align="center"
                  justify="space-between"
                  borderBottom={"1px solid rgb(133, 133, 133)"}
                  className="flex-col p-5 mt-6 bg-white sm:flex-row"
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
                  <Box className="w-full px-4 sm:w-5/6">
                    <Text className="mt-4 text-lg font-bold sm:mt-10">
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
                  justify="space-between"
                  borderBottom={"1px solid rgb(133, 133, 133)"}
                  className="flex-col pb-3 mt-3 sm:justify-between md:flex-row"
                >
                  {/* Image Container */}
                  <Flex
                    borderRadius="sm"
                    overflow="hidden"
                    className="items-start m-1"
                  >
                    <Image
                      src={"https://cdn.kwork.com/images/index/magic-wand.svg"}
                      alt=""
                      objectFit="cover"
                      className="w-24 h-24"
                    />
                    <Box className="w-full px-4 md:w-6/8">
                      <Text className="text-lg font-bold">
                        Step 1: Create your kworks—the more, the better
                      </Text>
                      <Link href={"/seller-dashboard/create-gig"}>
                        <Text color={"facebook.600"} fontWeight={"medium"}>
                          Create New Gig
                        </Text>
                      </Link>
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
                  className="flex-col pb-3 mt-3 md:flex-row"
                >
                  {/* Image Container */}
                  <Flex
                    borderRadius="sm"
                    overflow="hidden"
                    className="items-start m-1"
                  >
                    <Image
                      src={"https://cdn.kwork.com/images/index/magic-wand.svg"}
                      alt=""
                      objectFit="cover"
                      className="w-24 h-24"
                    />
                    <Box className="w-full px-4 md:w-3/4">
                      <Text className="text-lg font-bold">
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
                  className="flex-col pb-3 mt-3 md:flex-row"
                >
                  {/* Image Container */}
                  <Flex
                    borderRadius="sm"
                    overflow="hidden"
                    className="items-start justify-start m-1"
                  >
                    <Image
                      src={"https://cdn.kwork.com/images/index/smartphone.svg"}
                      alt=""
                      objectFit="cover"
                      className="w-24 h-24"
                    />
                    <Box className="w-full px-4 md:w-3/4">
                      <Text className="text-lg font-bold">
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
                  justify="space-between"
                  borderBottom={"1px solid rgb(133, 133, 133)"}
                  className="flex-col pb-3 mt-3 md:flex-row"
                >
                  {/* Image Container */}
                  <Flex
                    borderRadius="sm"
                    overflow="hidden"
                    className="items-start m-1"
                  >
                    <Image
                      src={"https://cdn.kwork.com/images/index/hat.svg"}
                      alt=""
                      objectFit="cover"
                      className="w-24 h-24"
                    />
                    <Box className="w-full px-4 md:w-3/4">
                      <Text className="text-lg font-bold">
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

export default Page;
