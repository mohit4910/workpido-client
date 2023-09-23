"use client";

import GigCard from "@/components/GigCard";
import ImageSlider from "@/components/ImageSlider";
import SellerCard from "@/components/SellerCard";
import Stats from "@/components/Stats";
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
import Link from "next/link";
import React, { useState } from "react";
import { BsClockHistory, BsFillCartPlusFill } from "react-icons/bs";
import { FaSquareFacebook, FaUserCircle, FaXTwitter } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";

const page = () => {
  return (
    <main className="relative overflow-x-hidden min-h-screen">
      <Flex className="w-full flex-col lg:flex-row">
        {/* Main Content */}
        <Flex className=" mx-auto w-screen md:w-11/12 md:my-10 lg:w-[65%]">
          {/* User Card */}
          <Box className="bg-white w-1/3">
            <ZoomableImage src="https://avatars0.githubusercontent.com/u/1164541?v=4" />
          </Box>
          {/* User Details */}
          <Box className="bg-white w-2/3 flex-2">
            <Box className="p-5 overflow-hidden">
              {/*Seller Full Name */}
              <Heading className="font-semibold text-emerald-600 text-3xl my-3">
                {"Adarsh Prakash"}
              </Heading>
              {/*Seller Profession */}
              <Text className="hidden md:block font-bold text-lg my-3">
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
            </Box>
          </Box>
        </Flex>
        {/* SideBar - Only visible on large displays */}
        <Box className="w-full lg:w-[30%]  mx-auto my-10">
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
        className="py-10 px-3 w-full mt-4"
      >
        <Button
          className="my-5 w-10/12 md:w-1/3 px-2 py-10 text-lg flex flex-col"
          as={"a"}
          color={"white"}
          bg={"brand.primary"}
          href={"#"}
          _hover={{
            bg: "green.300",
          }}
        >
          Contact Me
          <Text className="text-xs text-white font-light my-1">
            Or order a custom work
          </Text>
        </Button>
      </Flex>
    </main>
  );
};

export default page;
