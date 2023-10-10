"use client";

import ContactSeller from "@/components/ContactSeller";
import GigCard from "@/components/GigCard";
import SellerCard from "@/components/SellerCard";
import ZoomableImage from "@/components/ZoomableImage";
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
  Image,
  Input,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { ImEyeBlocked, ImLocation } from "react-icons/im";
import { PiClockCountdownBold } from "react-icons/pi";
import { RiRadioButtonLine } from "react-icons/ri";

const page = () => {
  return (
    <main className="relative mx-auto lg:container overflow-x-hidden min-h-screen">
      {/* Seller Details */}
      <Flex className="w-full flex-col md:flex-row">
        {/* Main Content */}
        <Flex className=" mx-auto w-screen md:my-10 md:w-[65%] flex-col md:flex-row">
          {/* User Card */}
          <Flex className="flex-col items-center md:items-start bg-white px-2 md:w-1/3 w-full gap-2">
            <ZoomableImage src="https://avatars0.githubusercontent.com/u/1164541?v=4" />
            <Box className="my-3 text-center md:text-left">
              <Text className="md:block font-bold text-2xl my-2">
                geekguyadarsh
              </Text>
              <Heading className="font-bold md:hidden text-emerald-600 text-4xl my-2">
                {"Adarsh Prakash"}
              </Heading>
              {/*Seller Profession */}
              <Text className="md:hidden font-bold text-xl  my-2">
                Web Developer
              </Text>
            </Box>
            <Flex className="items-center gap-1">
              <BsFillTelephoneFill color="gray" />
              <Text>Phone Verified</Text>
            </Flex>
            <Flex className="items-center gap-1">
              <ImLocation color="gray" />
              <Text>India</Text>
            </Flex>
            <Flex className="items-center gap-1">
              <PiClockCountdownBold color="gray" />
              <Text>Joined September 2023</Text>
            </Flex>
            <Flex className="items-center gap-1">
              <RiRadioButtonLine color="green" />
              <Text>Online</Text>
            </Flex>
            <Flex className="items-center gap-1 hover:cursor-pointer">
              <ImEyeBlocked color="red" />
              <Text>Block this Seller</Text>
            </Flex>
          </Flex>
          {/* User Details */}
          <Box className="bg-white md:w-2/3 w-full flex-2">
            <Box className="p-5 overflow-hidden">
              {/*Seller Full Name */}
              <Heading className="hidden md:block font-semibold text-emerald-600 text-4xl text-center md:text-left my-3">
                {"Adarsh Prakash"}
              </Heading>
              {/*Seller Profession */}
              <Text className=" hidden md:block font-bold text-xl text-center md:text-left my-3">
                Web Developer
              </Text>
              {/* About the Seller */}
              <Text className="my-3">
                For the orders to be completed the following are the
                requirements for quality work to be delivered and on the
                speculated period. In case it is a specified niche, the client
                should provide the topic for the articles. secondly, the buyer
                should be clear on the format of the article. And last but not
                least the buyer should be able to provide all the necessary
                guidelines to avoid misunderstandings and revisions.
              </Text>
              <Box>
                <Text className="md:block font-bold text-lg my-3">Skills</Text>
                {/* About the Seller */}
                <Flex className="gap-2 flex-wrap">
                  <span className="p-1 m-1 border rounded">React.js</span>
                  <span className="p-1 m-1 border rounded">Next.js</span>
                  <span className="p-1 m-1 border rounded">HTML</span>
                  <span className="p-1 m-1 border rounded">CSS</span>
                  <span className="p-1 m-1 border rounded">JavaScript</span>
                  <span className="p-1 m-1 border rounded">React.js</span>
                  <span className="p-1 m-1 border rounded">Next.js</span>
                  <span className="p-1 m-1 border rounded">HTML</span>
                  <span className="p-1 m-1 border rounded">CSS</span>
                  <span className="p-1 m-1 border rounded">JavaScript</span>
                </Flex>
              </Box>
            </Box>
          </Box>
        </Flex>
        {/* SideBar - Only visible on large displays */}
        <Box className="w-full md:w-[30%]  mx-auto my-10">
          {/* Seller Contact Card */}
          <SellerCard className="bg-transparent" />
        </Box>
      </Flex>
      {/* Portfolio */}
      <Flex className="flex-col object-contain w-screen md:w-11/12 mx-auto p-4 my-4 bg-[#f6f6f6]">
        <Text className="font-bold text-lg lg:text-2xl  my-3">Portfolio</Text>
        <Stack spacing={8}>
          <Flex
            justify={"flex-start"}
            gap={10}
            className="overflow-x-scroll p-3"
          >
            <GigCard />
            <GigCard />
            <GigCard />
            <GigCard />
            <GigCard />
            <GigCard />
            <GigCard />
            <GigCard />
            <GigCard />
            <GigCard />
            <GigCard />
            <GigCard />
          </Flex>
        </Stack>
      </Flex>
      {/* Other Works of the Seller */}
      <Flex className="flex-col object-contain w-screen md:w-11/12 mx-auto p-4 my-4 bg-[#f6f6f6]">
        <Text className="font-bold text-lg lg:text-2xl my-3">
          {`This User's Work`}
        </Text>
        <Stack spacing={8}>
          <Flex
            justify={"flex-start"}
            gap={6}
            className="overflow-x-scroll p-3"
          >
            <GigCard />
            <GigCard />
            <GigCard />
            <GigCard />
            <GigCard />
            <GigCard />
            <GigCard />
            <GigCard />
            <GigCard />
            <GigCard />
            <GigCard />
            <GigCard />
          </Flex>
        </Stack>
      </Flex>
      {/* Reviews */}
      <Box className="mx-1 md:mx-5 my-3 w-full p-2 md:p-5">
        <Text className="font-bold text-lg lg:text-2xl my-3">
          Reviews Left for geekguyadarsh
        </Text>
        <Accordion allowToggle className="w-full">
          <AccordionItem className="border-none">
            <Box className=" my-2 ">
              <AccordionButton
                _expanded={{ color: "black" }}
                _disabled={{ color: "black" }}
                _hover={{ color: "black" }}
              >
                <Text as="span" textAlign="left" className="text-xl">
                  2 Reviews
                </Text>
                <AccordionIcon />
              </AccordionButton>
            </Box>
            <AccordionPanel pb={4}>
              <List>
                <ListItem className="my-3">
                  <ListIcon as={FaUserCircle} color="black" />
                  <span className="font-bold">Ashish P.</span>
                  <Text>Excellent Work</Text>
                </ListItem>
                <ListItem className="my-3">
                  <ListIcon as={FaUserCircle} color="black" />
                  <span className="font-bold">Mark</span>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Provident cupiditate aliquam distinctio doloribus aut
                    reprehenderit vero quam unde repudiandae! Provident placeat
                    assumenda quidem consequatur ipsam cum, dolorem distinctio
                    optio nulla!
                  </Text>
                </ListItem>
              </List>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
      {/* contact Section */}
      <Flex
        flexDirection="column"
        align="center"
        justify="center"
        bg={"brand.primary"}
        className="md:py-10 md:px-3 z-50 w-screen md:w-1/3 md:bg-[#f6f6f6] fixed bottom-0 left-0 right-0 md:relative md:mx-auto md:mt-4"
      >
        <ContactSeller className="md:my-5 w-full px-2 py-10 text-lg" />
      </Flex>
    </main>
  );
};

export default page;
