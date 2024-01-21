"use client";

import Chats from "@/components/Chats";
import Message from "@/components/Message";
import SellerStats from "@/components/SellerStats";
import Stats from "@/components/Stats";

import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Hide,
  Icon,
  Image,
  List,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Loading from "../loading";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import AppModal from "@/components/AppModal";
import { BsCircleFill } from "react-icons/bs";
import { API } from "@/lib/api";

const Page = () => {
  const { push } = useRouter();
  const { isLoggedIn, user } = useAuth();
  const [modalId, setModalId] = useState(null);

  const [overview, setOverview] = useState(null);

  useEffect(() => {
    if (!Cookies.get("token")) {
      push("/");
    } else {
      fetchOverview();
    }
  }, []);

  async function fetchOverview() {
    try {
      const res = await API.overview();
      setOverview(res);
    } catch (error) {
      console.log(error);
    }
  }

  if (!isLoggedIn) {
    return <Loading />;
  }

  return (
    <>
      <main
        className="relative min-h-screen"
        style={{ backgroundColor: "#f6f6f6" }}
      >
        <Container maxW={["full", "3xl", "5xl", "7xl"]}>
          <Flex className="flex-col md:flex-row items-center md:items-start mx-auto">
            {/* Main Content */}
            {/* SideBar - Comes Down on smaller displays */}
            <Flex
              flexDirection={"column"}
              className="w-[96%] md:w-[30%] my-10 mx-3 md:mx-0 gap-6"
            >
              <Flex
                className="flex-col p-3 bg-white"
                rounded={4}
                boxShadow={"base"}
              >
                <SellerStats seller={user} />
              </Flex>
              {/* Inbox */}
              <Flex
                className="bg-white flex-col px-3 py-10 relative h-[30rem]"
                rounded={4}
                boxShadow={"base"}
              >
                <Box
                  className="absolute top-0 left-0 right-0 z-50 p-3 bg-white"
                  rounded={4}
                >
                  <Text className="text-lg font-semibold">Inbox</Text>
                </Box>
                <Chats />
              </Flex>
            </Flex>
            {/* More Info */}
            <Flex className="md:mx-3 lg:mx-auto w-[98%] md:w-10/12 md:my-10 lg:w-8/12 flex-col gap-6">
              {/* Order Info */}
              <Flex
                className="justify-between w-full gap-5 p-5 bg-white"
                rounded={4}
                boxShadow={"base"}
              >
                <Flex gap={2}>
                  <Heading className="text-xl font-semibold ">
                    My Orders
                  </Heading>
                  <Heading className="text-xl font-normal text-neutral-500">
                    - Total {overview?.orders}
                  </Heading>
                </Flex>
                <Link href={"/orders"}>View all</Link>
              </Flex>
              {/*My Works*/}
              <Flex
                className="justify-between w-full gap-5 p-5 bg-white"
                rounded={4}
                boxShadow={"base"}
              >
                <Flex gap={2}>
                  <Heading className="text-xl font-semibold ">
                    My Workpidos
                  </Heading>
                  <Heading className="text-xl font-normal text-neutral-500">
                    - Active {overview?.gigs}
                  </Heading>
                </Flex>

                <Link href={"/manage-gigs"}>View all</Link>
              </Flex>
              {/* 4 Step Process */}
              <Flex
                className="flex-col w-full gap-5 p-5 bg-white"
                rounded={4}
                boxShadow={"base"}
              >
                <List>
                  <ListItem>
                    <Flex
                      align="center"
                      justify="space-between"
                      borderBottom={"1px solid #e2e2e2"}
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
                          src={
                            "https://cdn.kwork.com/images/index/kwork-steps.svg"
                          }
                          alt=""
                          objectFit="cover"
                          className="w-full h-60 sm:w-80"
                        />
                      </Flex>
                      {/*Details Container*/}
                      <Box className="w-full px-4 sm:w-5/6">
                        <Text className="mt-4 text-lg sm:mt-10">
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
                      borderBottom={"1px solid #e2e2e2"}
                      className="flex-col pb-3 mt-3 sm:justify-between md:flex-row"
                    >
                      {/* Image Container */}
                      <Flex
                        borderRadius="sm"
                        overflow="hidden"
                        className="items-start m-1"
                      >
                        <Image
                          src={
                            "https://cdn.kwork.com/images/index/magic-wand.svg"
                          }
                          alt=""
                          objectFit="cover"
                          className="w-24 h-24"
                        />
                        <Box className="w-full px-4 md:w-6/8">
                          <Text fontSize={"md"} className="font-medium">
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
                          display={"inline-flex"}
                          fontSize={"sm"}
                          border={"1px"}
                          borderColor={"brand.primary"}
                          color={"brand.primary"}
                          bg={"white"}
                          _hover={{
                            bg: "brand.primary",
                            color: "white",
                          }}
                          className="m-3"
                          onClick={() => setModalId(1)}
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
                      borderBottom={"1px solid #e2e2e2"}
                      className="flex-col pb-3 mt-3 md:flex-row"
                    >
                      {/* Image Container */}
                      <Flex
                        borderRadius="sm"
                        overflow="hidden"
                        className="items-start m-1"
                      >
                        <Image
                          src={
                            "https://cdn.kwork.com/images/index/magic-wand.svg"
                          }
                          alt=""
                          objectFit="cover"
                          className="w-24 h-24"
                        />
                        <Box className="w-full px-4 md:w-3/4">
                          <Text fontSize={"md"} className="font-medium">
                            Step 2: Share your kworks to get your first orders
                            and reviews!
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
                          display={"inline-flex"}
                          fontSize={"sm"}
                          border={"1px"}
                          borderColor={"brand.primary"}
                          color={"brand.primary"}
                          bg={"white"}
                          _hover={{
                            bg: "brand.primary",
                            color: "white",
                          }}
                          className="m-3"
                          onClick={() => setModalId(2)}
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
                      borderBottom={"1px solid #e2e2e2"}
                      className="flex-col pb-3 mt-3 md:flex-row"
                    >
                      {/* Image Container */}
                      <Flex
                        borderRadius="sm"
                        overflow="hidden"
                        className="items-start justify-start m-1"
                      >
                        <Image
                          src={
                            "https://cdn.kwork.com/images/index/smartphone.svg"
                          }
                          alt=""
                          objectFit="cover"
                          className="w-24 h-24"
                        />
                        <Box className="w-full px-4 md:w-3/4">
                          <Text fontSize={"md"} className="font-medium">
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
                          <Text fontSize={"md"} className="font-medium">
                            Step 4: Take our free introductory course{" "}
                            <span style={{ fontWeight: "bold" }}>
                              How To Earn on Kwork
                            </span>
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
        </Container>
      </main>

      {/* Step 1 Modal */}
      <Modal
        isOpen={modalId == 1}
        onClose={() => setModalId(null)}
        isCentered
        size={["full", "2xl"]}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p={6}>
            <HStack
              alignItems={"flex-start"}
              justifyContent={"space-between"}
              gap={8}
            >
              <Hide below="md">
                <Image src="/active-kworks.svg" />
              </Hide>
              <Box>
                <Text fontSize={"xl"} fontWeight={"medium"} mb={8}>
                  Did you know?
                </Text>

                <Text
                  fontSize={"md"}
                  fontWeight={"medium"}
                  color={"gray.900"}
                  mb={1}
                >
                  The top 20% of sellers on Kwork have an average of 9 active
                  kworks.
                </Text>
                <Text fontSize={"14px"}>
                  Listing a variety of kworks will help you receive more orders.
                  Consider checking out popular kworks from leading sellers and
                  competitors to see how you can improve your offerings.
                </Text>
              </Box>
            </HStack>
            <VStack
              w={"full"}
              mt={8}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Button
                w={"36"}
                display={"inline-flex"}
                fontSize={"sm"}
                border={"1px"}
                bgColor={"brand.primary"}
                color={"#FFF"}
                colorScheme="whatsapp"
                className="m-3"
                onClick={() => setModalId(null)}
              >
                Got It
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>

      {/* Step 2 Modal */}
      <Modal
        isOpen={modalId == 2}
        onClose={() => setModalId(null)}
        isCentered
        size={["full", "2xl"]}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p={6}>
            <HStack
              alignItems={"flex-start"}
              justifyContent={"space-between"}
              gap={8}
            >
              <Hide below="md">
                <Image src="/how-start.svg" />
              </Hide>
              <Box>
                <Text fontSize={"xl"} fontWeight={"medium"} mb={8}>
                  How to Kick-start Your Kwork Journey
                </Text>

                <Text fontSize={"14px"}>
                  The secret to success on Kwork is a strong personal brand. The
                  more completed orders and reviews you have, the higher the
                  demand will be for your services. But how do you get those
                  very first orders if you don’t have any reviews? Attracting
                  your first customers can be challenging, but here are a few
                  tips to help you speed things up.
                </Text>
              </Box>
            </HStack>

            <Box mt={12}>
              <HStack alignItems={"center"} gap={4}>
                <Icon
                  as={BsCircleFill}
                  fontSize={"md"}
                  color={"facebook.500"}
                />
                <Box>
                  <Text fontSize={"lg"} fontWeight={"medium"} mb={4}>
                    How to Kick-start Your Kwork Journey
                  </Text>
                </Box>
              </HStack>
              <HStack alignItems={"center"} gap={4}>
                <Icon as={BsCircleFill} fontSize={"md"} color={"transparent"} />
                <Box>
                  <Text fontSize={"14px"}>
                    Got clients outside of Kwork? Great! Send them a link to
                    your services and encourage them to create a Kwork account,
                    which will let them order your services and leave reviews.
                    After you boost your ratings by bringing several clients to
                    the platform, Kwork will start sending more and more new
                    buyers your way.
                  </Text>
                </Box>
              </HStack>
            </Box>

            <Box mt={12}>
              <HStack alignItems={"center"} gap={4}>
                <Icon
                  as={BsCircleFill}
                  fontSize={"md"}
                  color={"facebook.500"}
                />
                <Box>
                  <Text fontSize={"lg"} fontWeight={"medium"} mb={4}>
                    Tap Into the Power of Social Media
                  </Text>
                </Box>
              </HStack>
              <HStack alignItems={"center"} gap={4}>
                <Icon as={BsCircleFill} fontSize={"md"} color={"transparent"} />
                <Box>
                  <Text fontSize={"14px"}>
                    Share your services on different social networks and other
                    sites by providing links to your kworks. The more you spread
                    the word about your services, the quicker you'll get those
                    first orders and reviews on Kwork.
                  </Text>
                </Box>
              </HStack>
            </Box>

            <VStack
              w={"full"}
              mt={8}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Button
                w={"36"}
                display={"inline-flex"}
                fontSize={"sm"}
                border={"1px"}
                bgColor={"brand.primary"}
                color={"#FFF"}
                colorScheme="whatsapp"
                className="m-3"
                onClick={() => setModalId(null)}
              >
                Got It
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Page;
