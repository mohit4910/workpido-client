"use client";

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
            Reach Your Full Earning Potential on Workpido
          </Heading>
          <Text className="mb-2 text-2xl text-yellow-500 ">
            A free get-started course for freelancers!
          </Text>
        </Flex>
      </Flex>
      {/* Main Content */}
      <Flex flexDirection="column" align="center" className="pt-10 lg:w-3/4">
        {/* Introduction */}
        <Heading className="font-normal mb-2 text-3xl">
          Start Learning and Earning Today!
        </Heading>
        <Text className="my-3 font-light text-lg">Topics covered:</Text>
        <List>
          <ListItem>How to immediately boost your earning potential</ListItem>
          <ListItem>
            <ListIcon as={GiCheckMark} color="green.500" />
            How to create successful works from day one
          </ListItem>
          <ListItem>
            <ListIcon as={GiCheckMark} color="green.500" />
            How to communicate effectively with clients
          </ListItem>
          <ListItem>
            <ListIcon as={GiCheckMark} color="green.500" />
            How to build, maintain, and perfect your ratings
          </ListItem>
          <ListItem>
            <ListIcon as={GiCheckMark} color="green.500" />
            And much, much more
          </ListItem>
        </List>
        {/* Learning Catalog */}
        <List className="articles">
          <ListItem>
            <Flex
              align="center"
              justify="space-evenly"
              borderTop={"1px solid rgb(133, 133, 133)"}
              className="flex-col sm:flex-row mt-6 pt-6"
            >
              {/* Image Container */}
              <Flex
                borderRadius="sm"
                overflow="hidden"
                position="relative"
                className="m-1"
              >
                <Image
                  src={
                    "https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  }
                  alt=""
                  objectFit="cover"
                  className="w-screen h-64 sm:w-80 sm:h-36"
                />
                <Text className="text-center text-white p-3 text-base bg-gradient-to-b from-transparent to-black absolute bottom-0 left-0 w-full">
                  MASTER THE BASICS
                </Text>
              </Flex>
              {/*Details Container*/}
              <Box className="w-full sm:w-3/4 px-4">
                <Text className="mt-4 sm:mt-10 font-bold text-lg">
                  Workpido Fundamentals
                </Text>
                <Text className="mt-2 sm:mt-5 text-xs text-emerald-600">
                  3-minute read
                </Text>
                <Text className="mt-2">
                  {`Learn about Workpido's core values, explore the Marketplace, and
                master key concepts to become a top-performing seller.`}
                </Text>
              </Box>
              {/* Button Container */}
              <Flex
                flexDirection="row"
                align="center"
                justify="space-between"
                className="mt-4 sm:flex-col sm:justify-center sm:mx-3"
              >
                <Button
                  width={"100%"}
                  as={"a"}
                  display={"inline-flex"}
                  fontSize={"sm"}
                  fontWeight={600}
                  color={"white"}
                  bg={"brand.primary"}
                  href={"/how-to-earn"}
                  _hover={{
                    bg: "green.300",
                  }}
                  className="m-3"
                >
                  Start Lesson
                </Button>
                <Text className="text-xs text-center">
                  Completed by 206,115 freelancers
                </Text>
              </Flex>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex
              align="center"
              justify="space-evenly"
              borderTop={"1px solid rgb(133, 133, 133)"}
              className="flex-col sm:flex-row mt-6 pt-6"
            >
              {/* Image Container */}
              <Flex
                borderRadius="sm"
                overflow="hidden"
                position="relative"
                className="m-1"
              >
                <Image
                  src={
                    "https://images.pexels.com/photos/618079/pexels-photo-618079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  }
                  alt=""
                  objectFit="cover"
                  className="w-screen h-64 sm:w-80 sm:h-36"
                />
                <Text className="text-center text-white p-3 text-base bg-gradient-to-b from-transparent to-black absolute bottom-0 left-0 w-full">
                  BUILD A STRONG PROFILE
                </Text>
              </Flex>
              {/*Details Container*/}
              <Box className="w-full sm:w-3/4 px-4">
                <Text className="mt-4 sm:mt-10 font-bold text-lg">
                  Your Profile
                </Text>
                <Text className="mt-2 sm:mt-5 text-xs text-emerald-600">
                  4-minute read
                </Text>
                <Text className="mt-2">
                  {`Think about your profile as your business card on workpido; it represents the first thing a potential buyer sees. In this lesson, you'll learn how to nail your first impression.`}
                </Text>
              </Box>
              {/* Button Container */}
              <Flex
                flexDirection="row"
                align="center"
                justify="space-between"
                className="mt-4 sm:flex-col sm:justify-center sm:mx-3"
              >
                <Button
                  width={"100%"}
                  as={"a"}
                  display={"inline-flex"}
                  fontSize={"sm"}
                  fontWeight={600}
                  color={"white"}
                  bg={"brand.primary"}
                  href={"/how-to-earn"}
                  _hover={{
                    bg: "green.300",
                  }}
                  className="m-3"
                >
                  Start Lesson
                </Button>
                <Text className="text-xs text-center">
                  Completed by 216,115 freelancers
                </Text>
              </Flex>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex
              align="center"
              justify="space-evenly"
              borderTop={"1px solid rgb(133, 133, 133)"}
              className="flex-col sm:flex-row mt-6 pt-6"
            >
              {/* Image Container */}
              <Flex
                borderRadius="sm"
                overflow="hidden"
                position="relative"
                className="m-1"
              >
                <Image
                  src={
                    "https://images.pexels.com/photos/316093/pexels-photo-316093.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  }
                  alt=""
                  objectFit="cover"
                  className="w-screen h-64 sm:w-80 sm:h-36"
                />
                <Text className="text-center text-white p-3 text-base bg-gradient-to-b from-transparent to-black absolute bottom-0 left-0 w-full">
                  CREATE SUCCESSFUL WORKS
                </Text>
              </Flex>
              {/*Details Container*/}
              <Box className="w-full sm:w-3/4 px-4">
                <Text className="mt-4 sm:mt-10 font-bold text-lg">
                  Works and Portfolios
                </Text>
                <Text className="mt-2 sm:mt-5 text-xs text-emerald-600">
                  9-minute read
                </Text>
                <Text className="mt-2">
                  {`Now that you have a solid profile, go ahead and create your kworks. Learn to make your kworks stand out from the competition and build a professional portfolio to back them up.`}
                </Text>
              </Box>
              {/* Button Container */}
              <Flex
                flexDirection="row"
                align="center"
                justify="space-between"
                className="mt-4 sm:flex-col sm:justify-center sm:mx-3"
              >
                <Button
                  width={"100%"}
                  as={"a"}
                  display={"inline-flex"}
                  fontSize={"sm"}
                  fontWeight={600}
                  color={"white"}
                  bg={"brand.primary"}
                  href={"/how-to-earn"}
                  _hover={{
                    bg: "green.300",
                  }}
                  className="m-3"
                >
                  Start Lesson
                </Button>
                <Text className="text-xs text-center">
                  Completed by 306,115 freelancers
                </Text>
              </Flex>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex
              align="center"
              justify="space-evenly"
              borderTop={"1px solid rgb(133, 133, 133)"}
              className="flex-col sm:flex-row mt-6 pt-6"
            >
              {/* Image Container */}
              <Flex
                borderRadius="sm"
                overflow="hidden"
                position="relative"
                className="m-1"
              >
                <Image
                  src={
                    "https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  }
                  alt=""
                  objectFit="cover"
                  className="w-screen h-64 sm:w-80 sm:h-36"
                />
                <Text className="text-center text-white p-3 text-base bg-gradient-to-b from-transparent to-black absolute bottom-0 left-0 w-full">
                  MASTER THE BASICS
                </Text>
              </Flex>
              {/*Details Container*/}
              <Box className="w-full sm:w-3/4 px-4">
                <Text className="mt-4 sm:mt-10 font-bold text-lg">
                  Workpido Fundamentals
                </Text>
                <Text className="mt-2 sm:mt-5 text-xs text-emerald-600">
                  3-minute read
                </Text>
                <Text className="mt-2">
                  {`Learn about Workpido's core values, explore the Marketplace, and
                master key concepts to become a top-performing seller.`}
                </Text>
              </Box>
              {/* Button Container */}
              <Flex
                flexDirection="row"
                align="center"
                justify="space-between"
                className="mt-4 sm:flex-col sm:justify-center sm:mx-3"
              >
                <Button
                  width={"100%"}
                  as={"a"}
                  display={"inline-flex"}
                  fontSize={"sm"}
                  fontWeight={600}
                  color={"white"}
                  bg={"brand.primary"}
                  href={"/how-to-earn"}
                  _hover={{
                    bg: "green.300",
                  }}
                  className="m-3"
                >
                  Start Lesson
                </Button>
                <Text className="text-xs text-center">
                  Completed by 206,115 freelancers
                </Text>
              </Flex>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex
              align="center"
              justify="space-evenly"
              borderTop={"1px solid rgb(133, 133, 133)"}
              className="flex-col sm:flex-row mt-6 pt-6"
            >
              {/* Image Container */}
              <Flex
                borderRadius="sm"
                overflow="hidden"
                position="relative"
                className="m-1"
              >
                <Image
                  src={
                    "https://images.pexels.com/photos/3783577/pexels-photo-3783577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  }
                  alt=""
                  objectFit="cover"
                  className="w-screen h-64 sm:w-80 sm:h-36"
                />
                <Text className="text-center text-white p-3 text-base bg-gradient-to-b from-transparent to-black absolute bottom-0 left-0 w-full">
                  BOOST YOUR RATINGS
                </Text>
              </Flex>
              {/*Details Container*/}
              <Box className="w-full sm:w-3/4 px-4">
                <Text className="mt-4 sm:mt-10 font-bold text-lg">
                  Reviews and Ratings
                </Text>
                <Text className="mt-2 sm:mt-5 text-xs text-emerald-600">
                  7-minute read
                </Text>
                <Text className="mt-2">
                  {`Your ratings represent your reputation on workpido. In this lesson, you'll learn how to build, improve, and maintain your ratings to consistently receive orders and climb up the Marketplace.`}
                </Text>
              </Box>
              {/* Button Container */}
              <Flex
                flexDirection="row"
                align="center"
                justify="space-between"
                className="mt-4 sm:flex-col sm:justify-center sm:mx-3"
              >
                <Button
                  width={"100%"}
                  as={"a"}
                  display={"inline-flex"}
                  fontSize={"sm"}
                  fontWeight={600}
                  color={"white"}
                  bg={"brand.primary"}
                  href={"/how-to-earn"}
                  _hover={{
                    bg: "green.300",
                  }}
                  className="m-3"
                >
                  Start Lesson
                </Button>
                <Text className="text-xs text-center">
                  Completed by 96,115 freelancers
                </Text>
              </Flex>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex
              align="center"
              justify="space-evenly"
              borderTop={"1px solid rgb(133, 133, 133)"}
              className="flex-col sm:flex-row mt-6 pt-6"
            >
              {/* Image Container */}
              <Flex
                borderRadius="sm"
                overflow="hidden"
                position="relative"
                className="m-1"
              >
                <Image
                  src={
                    "https://images.pexels.com/photos/2127039/pexels-photo-2127039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  }
                  alt=""
                  objectFit="cover"
                  className="w-screen h-64 sm:w-80 sm:h-36"
                />
                <Text className="text-center text-white p-3 text-base bg-gradient-to-b from-transparent to-black absolute bottom-0 left-0 w-full">
                  EXCEEDING EXPECTATIONS
                </Text>
              </Flex>
              {/*Details Container*/}
              <Box className="w-full sm:w-3/4 px-4">
                <Text className="mt-4 sm:mt-10 font-bold text-lg">
                  Completing Works
                </Text>
                <Text className="mt-2 sm:mt-5 text-xs text-emerald-600">
                  7-minute read
                </Text>
                <Text className="mt-2">
                  {`Receiving your first order is the stepping stone to a prosperous career on workpido. In this lesson, we'll cover the entire order process, from accepting an order to final delivery, how to receive positive feedback and so much more!`}
                </Text>
              </Box>
              {/* Button Container */}
              <Flex
                flexDirection="row"
                align="center"
                justify="space-between"
                className="mt-4 sm:flex-col sm:justify-center sm:mx-3"
              >
                <Button
                  width={"100%"}
                  as={"a"}
                  display={"inline-flex"}
                  fontSize={"sm"}
                  fontWeight={600}
                  color={"white"}
                  bg={"brand.primary"}
                  href={"/how-to-earn"}
                  _hover={{
                    bg: "green.300",
                  }}
                  className="m-3"
                >
                  Start Lesson
                </Button>
                <Text className="text-xs text-center">
                  Completed by 406,115 freelancers
                </Text>
              </Flex>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex
              align="center"
              justify="space-evenly"
              borderTop={"1px solid rgb(133, 133, 133)"}
              className="flex-col sm:flex-row mt-6 pt-6"
            >
              {/* Image Container */}
              <Flex
                borderRadius="sm"
                overflow="hidden"
                position="relative"
                className="m-1"
              >
                <Image
                  src={
                    "https://images.pexels.com/photos/3781699/pexels-photo-3781699.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  }
                  alt=""
                  objectFit="cover"
                  className="w-screen h-64 sm:w-80 sm:h-36"
                />
                <Text className="text-center text-white p-3 text-base bg-gradient-to-b from-transparent to-black absolute bottom-0 left-0 w-full">
                  PAMPER THE CLIENTS
                </Text>
              </Flex>
              {/*Details Container*/}
              <Box className="w-full sm:w-3/4 px-4">
                <Text className="mt-4 sm:mt-10 font-bold text-lg">
                  Communicating with Clients
                </Text>
                <Text className="mt-2 sm:mt-5 text-xs text-emerald-600">
                  7-minute read
                </Text>
                <Text className="mt-2">
                  {`Effective communication will take your freelance business from simply surviving to thriving. By the end of this lesson, you'll be your personal communications expert and know all the dos and don'ts of interacting with buyers on workpido.`}
                </Text>
              </Box>
              {/* Button Container */}
              <Flex
                flexDirection="row"
                align="center"
                justify="space-between"
                className="mt-4 sm:flex-col sm:justify-center sm:mx-3"
              >
                <Button
                  width={"100%"}
                  as={"a"}
                  display={"inline-flex"}
                  fontSize={"sm"}
                  fontWeight={600}
                  color={"white"}
                  bg={"brand.primary"}
                  href={"/how-to-earn"}
                  _hover={{
                    bg: "green.300",
                  }}
                  className="m-3"
                >
                  Start Lesson
                </Button>
                <Text className="text-xs text-center">
                  Completed by 156,115 freelancers
                </Text>
              </Flex>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex
              align="center"
              justify="space-evenly"
              borderTop={"1px solid rgb(133, 133, 133)"}
              className="flex-col sm:flex-row mt-6 pt-6"
            >
              {/* Image Container */}
              <Flex
                borderRadius="sm"
                overflow="hidden"
                position="relative"
                className="m-1"
              >
                <Image
                  src={
                    "https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=400"
                  }
                  alt=""
                  objectFit="cover"
                  className="w-screen h-64 sm:w-80 sm:h-36"
                />
                <Text className="text-center text-white p-3 text-base bg-gradient-to-b from-transparent to-black absolute bottom-0 left-0 w-full">
                  SHARPEN YOUR FINANCIAL SKILLS
                </Text>
              </Flex>
              {/*Details Container*/}
              <Box className="w-full sm:w-3/4 px-4">
                <Text className="mt-4 sm:mt-10 font-bold text-lg">
                  Managing Your Finances
                </Text>
                <Text className="mt-2 sm:mt-5 text-xs text-emerald-600">
                  8-minute read
                </Text>
                <Text className="mt-2">
                  {`Order received? Accepted? Delivered? Awesome! Now reap what you sowed! Learn in this lesson how to minimize fees and how to withdraw your earnings without delays, and become your very own financial guru.`}
                </Text>
              </Box>
              {/* Button Container */}
              <Flex
                flexDirection="row"
                align="center"
                justify="space-between"
                className="mt-4 sm:flex-col sm:justify-center sm:mx-3"
              >
                <Button
                  width={"100%"}
                  as={"a"}
                  display={"inline-flex"}
                  fontSize={"sm"}
                  fontWeight={600}
                  color={"white"}
                  bg={"brand.primary"}
                  href={"/how-to-earn"}
                  _hover={{
                    bg: "green.300",
                  }}
                  className="m-3"
                >
                  Start Lesson
                </Button>
                <Text className="text-xs text-center">
                  Completed by 556,115 freelancers
                </Text>
              </Flex>
            </Flex>
          </ListItem>
        </List>
      </Flex>
    </main>
  );
};
export default page;
