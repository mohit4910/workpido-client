"use client";

import GigCard from "@/components/GigCard";
import ImageSlider from "@/components/ImageSlider";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
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
    <main className="relative min-h-screen">
      {/* Order Button Mobile-only */}
      <Flex className="bg-white z-50 md:hidden w-screen justify-evenly fixed bottom-0 left-0 right-0">
        <Button
          className="my-4 ml-4 mr-2 w-1/3 px-4 py-6 text-base"
          as={"a"}
          display={"inline-flex"}
          color={"white"}
          bg={"#007aff"}
          href={"#"}
          _hover={{
            bg: "blue.300",
          }}
        >
          Chat
        </Button>
        <Button
          className="my-4 ml-2 mr-4 w-2/3 px-4 py-6 text-base"
          as={"a"}
          display={"inline-flex"}
          color={"white"}
          bg={"brand.primary"}
          href={"#"}
          _hover={{
            bg: "green.300",
          }}
        >
          Order for $100
        </Button>
      </Flex>
      {/* Article Details */}
      <Box className="bg-white mx-auto w-screen md:w-3/4">
        {/* Article Image */}
        <ImageSlider className="w-screen h-1/4" />
        {/* Article Text */}
        <Box className="p-5 overflow-hidden">
          <Text className="font-bold text-lg my-3">
            {
              "I'll build HTML, CSS, Bootstrap pixel perfect and responsive website"
            }
          </Text>
          {/* Article Description */}
          <Text className="hidden md:block font-bold text-lg my-3">
            Work Overview
          </Text>
          <Text className="my-3">
            For the orders to be completed the following are the requirements
            for quality work to be delivered and on the speculated period. In
            case it is a specified niche, the client should provide the topic
            for the articles. secondly, the buyer should be clear on the format
            of the article. And last but not least the buyer should be able to
            provide all the necessary guidelines to avoid misunderstandings and
            revisions.
          </Text>
          <Text className="font-bold my-3">To get started Seller needs:</Text>
          <Text>
            All the articles need to be pre-ordered within 24hrs, quality
            content is expected and quick turn around time. The buyer needs to
            provide the following File providing information related to the
            topic. File that provides relevant information about your company.
            Files that can offer guidance when creating the website
          </Text>
          <Text className="font-bold my-3">Service includes:</Text>
          <List>
            <ListItem>
              <ListIcon as={GiCheckMark} color="green.500" />
              Keywords
            </ListItem>
            <ListItem>
              <ListIcon as={GiCheckMark} color="green.500" />
              HTML
            </ListItem>
            <ListItem>
              <ListIcon as={GiCheckMark} color="green.500" />
              Formatting
            </ListItem>
            <ListItem>
              <ListIcon as={GiCheckMark} color="green.500" />
              Posting the article
            </ListItem>
            <ListItem>
              <ListIcon as={GiCheckMark} color="green.500" />
              Language: English
            </ListItem>
          </List>
          <Text className="my-3">
            <span className="font-bold">Delivery: </span>
            <span>1 month</span>
          </Text>
        </Box>
        {/* Article Ordering */}
        <Flex className="justify-center flex-col p-5">
          {/* Details */}
          <Flex className="items-center justify-evenly">
            <List className="flex items-center justify-end md:pr-5 md:justify-evenly w-full text-xs">
              <ListItem className="hidden md:inline-block">
                <ListIcon as={BsClockHistory} color="black" />1 Month delivery
              </ListItem>
              <ListItem className="hidden md:inline-block">
                <ListIcon as={GiCheckMark} color="black" />
                Unlimited Revisions
              </ListItem>
              <ListItem className="flex items-center justify-evenly gap-3">
                <Text className="font-bold">Quantity</Text>
                <Input type="text" placeholder="25" />
              </ListItem>
            </List>
          </Flex>
          {/* Buttons */}
          <Flex className=" w-full  items-center justify-evenly">
            <Button
              className="my-4 ml-2 mr-1 w-1/4 px-4 py-6 text-base"
              as={"a"}
              display={"inline-flex"}
              color={"white"}
              bg={"brand.primary"}
              href={"#"}
              _hover={{
                bg: "green.300",
              }}
            >
              <BsFillCartPlusFill />
            </Button>
            <Button
              className="my-4 ml-1 mr-2 w-3/4 px-4 py-6 text-base"
              as={"a"}
              display={"inline-flex"}
              color={"white"}
              bg={"brand.primary"}
              href={"#"}
              _hover={{
                bg: "green.300",
              }}
            >
              Order for $100
            </Button>
          </Flex>
        </Flex>
      </Box>
      {/* Money-Back Gurantee */}
      <Box className="bg-white mx-auto w-screen md:w-3/4 p-5">
        <Text className="font-bold my-3">Money-back Guarantee</Text>
        <Text>
          We promise an excellent order experience or your money back.
          <Link href="/article-details" className="text-indigo-600">
            {" "}
            How does it work?
          </Link>
        </Text>
      </Box>
      {/* Reviews */}
      <Accordion
        allowToggle
        className="bg-white my-3 mx-auto w-screen md:w-3/4 p-5"
      >
        <AccordionItem>
          <h2>
            <AccordionButton
              _expanded={{ bg: "white", color: "black" }}
              _disabled={{ bg: "white", color: "black" }}
              _hover={{ bg: "white", color: "black" }}
            >
              <Box as="span" flex="1" textAlign="left">
                2 Reviews
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <List>
              <ListItem className="my-3">
                <ListIcon as={FaUserCircle} color="black" />
                <span className="font-bold">Ashish P.</span>
                <Text>Excellent Work</Text>
              </ListItem>
              <ListItem className="my-3">
                <ListIcon as={FaUserCircle} color="black" />
                <span className="font-bold">Adarsh P.</span>
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
      {/* Other Works of the Seller */}
      <Flex className="flex-col object-contain w-screen md:w-10/12 mx-auto p-4 my-4 bg-[#f6f6f6]">
        <Text fontSize={26} fontWeight={600}>
          Other Works from the Seller
        </Text>
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
      {/* Similar Works */}
      <Flex className="flex-col object-contain w-screen md:w-10/12 mx-auto p-4 my-4 bg-[#f6f6f6]">
        <Text fontSize={26} fontWeight={600}>
          Similar Works
        </Text>
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
      {/* Social Handles */}
      <Box className="bg-white mx-auto w-screen md:w-3/4 p-5">
        <Heading className="text-center mb-5">
          Share on your Social Media
        </Heading>
        <Flex className="items-center justify-center mx-auto gap-3">
          <Image
            height={"50px"}
            width={"50px"}
            objectFit={"cover"}
            src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg"
            alt=""
          />
          <Image
            height={"50px"}
            width={"50px"}
            objectFit={"cover"}
            src="https://pic.onlinewebfonts.com/thumbnails/icons_5682.svg"
            alt=""
          />
        </Flex>
      </Box>
    </main>
  );
};

export default page;
