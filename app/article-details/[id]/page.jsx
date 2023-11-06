"use client";

import Loading from "@/app/loading";
import GigCard from "@/components/GigCard";
import ImageSlider from "@/components/ImageSlider";
import SellerCard from "@/components/SellerCard";
import useAuth from "@/hooks/useAuth";
import { API } from "@/lib/api";
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
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiFillEyeInvisible } from "react-icons/ai";
import { BsClockHistory, BsFillCartPlusFill, BsStarFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { GiCheckMark } from "react-icons/gi";
import { MdReportProblem } from "react-icons/md";
import parse from "html-react-parser";
import useApiHandler from "@/hooks/useApiHandler";
import PricingTable from "@/components/PricingTable";
import PlanAccordion from "@/components/PlanAccordion";

const ArticleDetails = ({ params }) => {
  const { id } = params;
  const { push } = useRouter();
  const { getAvatar } = useAuth();
  const { getMediaUrl, prepareOrder } = useApiHandler();

  const [data, setData] = useState(null);
  const [sellerAvatar, setSellerAvatar] = useState("");
  const [bannerImageUrls, setBannerImageUrls] = useState([]);

  useEffect(() => {
    const banners = data?.banners || [{ url: "" }];
    let mediaUrls = [];
    banners?.forEach((banner) => {
      const url = getMediaUrl(banner?.url);
      mediaUrls.push(url);
    });
    setBannerImageUrls(mediaUrls);
  }, [data]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (data?.seller?.id) {
      const avatarUrl = getAvatar(data?.seller?.avatar?.url);
      setSellerAvatar(avatarUrl);
    }
  }, [data]);

  async function fetchData() {
    try {
      const res = await API.getGigInfo(id);
      setData(res);
    } catch (error) {
      console.log("Error while fetching gigs: ", error);
      push("/not-found");
    }
  }

  if (!data) {
    return <Loading />;
  }

  return (
    <main className="relative min-h-screen lg:mx-auto lg:container">
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
          Order for {data?.seller?.currency?.symbol}
          {data?.pricingModel == "plans"
            ? data?.startingPrice
            : data?.pricingModel == "fixed"
            ? data?.fixedPrice
            : data?.hourlyPrice}
        </Button>
      </Flex>
      <Flex className="mx-auto w-screen md:w-10/12">
        {/* Main Content */}
        <Box className=" mx-auto w-screen md:w-10/12 md:my-10 lg:w-8/12">
          {/* Article Details */}
          <Box className="bg-white w-full">
            {/* Article Heading */}
            <Flex className="flex-col gap-3 mb-2 p-5">
              <Text className="font-bold w-fill text-xl md:text-2xl">
                {data?.title}
              </Text>
              <Flex className="flex-col gap-2 md:gap-0 md:flex-row md:justify-between items-start md:items-center">
                {/* Abstract */}
                <Flex className="items-center gap-3">
                  <Link href={`/profile/${data?.seller?.username}`} target="_blank">
                    <Stack direction={"row"} spacing={2} align={"center"}>
                      <Avatar size={"sm"} src={sellerAvatar} />
                      <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                        <Text
                          fontSize={"sm"}
                          className=" hover:text-indigo-600"
                        >
                          {data?.seller?.displayName || data?.seller?.username}
                        </Text>
                      </Stack>
                    </Stack>
                  </Link>
                  <Flex align={"center"} className="gap-1">
                    <BsStarFill className="text-yellow-500 font-semibold" />
                    <Text
                      fontSize="md"
                      className="text-yellow-500 font-semibold"
                    >
                      3.4
                    </Text>
                  </Flex>
                  <Text className="text-sm text-neutral-600">2 reviews</Text>
                </Flex>
                {/* Buttons */}
                <Flex className="gap-2">
                  <FiHeart
                    size={"35px"}
                    className="border-2 border-neutral-400 px-2 rounded cursor-pointer hover:border-black"
                  />
                  <AiFillEyeInvisible
                    size={"35px"}
                    className="border-2 border-neutral-400 px-2 rounded cursor-pointer hover:border-black"
                  />
                  <MdReportProblem
                    size={"35px"}
                    className="border-2 border-neutral-400 px-2 rounded cursor-pointer hover:border-black"
                  />
                </Flex>
              </Flex>
            </Flex>
            {/* Article Image */}
            <ImageSlider
              images={bannerImageUrls}
              height={"md"}
              className="w-full h-1/4"
            />
            {/* Article Text */}
            <Box className="p-5 overflow-hidden">
              {/* Article Description */}
              <Text className="block font-bold text-lg my-3">
                Work Overview
              </Text>
              <Text className="my-3">{data?.overview}</Text>
              <br />
              <Box>
                <Text className="block font-bold text-lg my-3">
                  Description
                </Text>
                {parse(data?.description || "<p>No Description available</p>")}
              </Box>
            </Box>

            {/* Article Ordering */}
            {data?.pricingModel != "plans" ? (
              <Flex className="justify-center flex-col p-5">
                {/* Details */}
                <Flex className="items-center justify-evenly">
                  <List className="flex items-center justify-end md:pr-5 md:justify-evenly w-full text-xs">
                    <ListItem className="hidden md:inline-block">
                      <ListIcon as={BsClockHistory} color="black" />
                      {data?.deliveryDays} Days delivery
                    </ListItem>
                    <ListItem className="hidden md:inline-block">
                      <ListIcon as={GiCheckMark} color="black" />
                      {data?.revisions} Revisions
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
                    Order for {data?.seller?.currency?.symbol}
                    {data?.pricingModel == "plans"
                      ? data?.startingPrice
                      : data?.pricingModel == "fixed"
                      ? data?.fixedPrice
                      : data?.hourlyPrice}
                  </Button>
                </Flex>
              </Flex>
            ) : (
              <Box py={8}>
                <Heading size="md">
                  Select a plan to proceed with your order.
                </Heading>
                <br />
                <PricingTable
                  data={data?.pricingTable}
                  isViewOnly={true}
                  onUpdate={() => console.log("Table Updated")}
                />
              </Box>
            )}
          </Box>
          {/* Money-Back Gurantee */}
          <Box className="bg-white lg:hidden mx-auto w-full p-5">
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
          <Accordion allowToggle className="bg-white my-3 mx-auto w-full p-5">
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
                      reprehenderit vero quam unde repudiandae! Provident
                      placeat assumenda quidem consequatur ipsam cum, dolorem
                      distinctio optio nulla!
                    </Text>
                  </ListItem>
                </List>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
        {/* SideBar - Only visible on large displays */}
        <Box className="hidden lg:block w-[30%] my-10">
          {/* Article Ordering */}
          {data?.pricingModel != "plans" ? (
            <Flex className="bg-white justify-center flex-col p-3">
              {/* Header */}
              <Text color="brand.primary">
                <span className="text-lg mx-2">
                  {data?.seller?.currency?.symbol}
                  {data?.pricingModel == "fixed"
                    ? data?.fixedPrice
                    : data?.hourlyPrice}
                </span>
                <span className="text-lg text-black mx-2 font-bold">
                  Order Details
                </span>
              </Text>
              {/* Order Details */}
              <Flex className="flex-col justify-around gap-3">
                <List className="flex items-center justify-end md:pr-5 mt-2 md:justify-evenly w-full text-xs">
                  <ListItem>
                    <ListIcon as={BsClockHistory} color="black" />
                    {data?.deliveryDays} delivery
                  </ListItem>
                  <ListItem>
                    <ListIcon as={GiCheckMark} color="black" />
                    {data?.revisions} Revisions
                  </ListItem>
                </List>
                <List className="text-sm">
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
                <Flex className="items-center justify-evenly gap-3">
                  <Text className="font-bold">Quantity</Text>
                  <Input type="text" placeholder="25" />
                </Flex>
              </Flex>
              {/* Buttons */}
              <Flex className=" w-full items-center justify-evenly">
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
                  onClick={(plan) =>
                    prepareOrder({
                      title: data?.title,
                      currency: data?.seller?.currency?.isoCode,
                      amount:
                        data?.pricingModel == "fixed"
                          ? data?.fixedPrice
                          : data?.hourlyPrice,
                      gigId: id,
                      type: data?.pricingModel,
                    })
                  }
                >
                  Order for {data?.seller?.currency?.symbol}
                  {data?.pricingModel == "fixed"
                    ? data?.fixedPrice
                    : data?.hourlyPrice}
                </Button>
              </Flex>
            </Flex>
          ) : (
            <PlanAccordion
              data={data?.pricingTable}
              onClick={(plan) =>
                prepareOrder({
                  title: data?.title,
                  currency: data?.seller?.currency?.isoCode,
                  amount: plan?.amount,
                  gigId: id,
                  type: plan?.name,
                })
              }
            />
          )}

          {/* Money-back Guarantee */}
          <Flex className="bg-white mx-auto w-full mb-10 p-2 items-center">
            <Image
              height={"100px"}
              width={"100px"}
              src="https://cdn.kwork.com/images/refund/en.svg"
              alt=""
            />
            <Box className="px-2">
              <Text className="font-bold text-lg my-3">
                Money-back Guarantee
              </Text>
              <Text className="text-sm font-light">
                We promise an excellent order experience or your money back.
                <Link href="/article-details" className="text-indigo-600">
                  {" "}
                  How does it work?
                </Link>
              </Text>
            </Box>
          </Flex>
          {/* Seller Contact Card */}
          <SellerCard />
          {/* Social Handles */}
          <Box className="bg-white w-full mt-3 p-5">
            <Text className="text-center text-base mb-3">
              Share on your Social Media
            </Text>
            <Flex className="items-center justify-center mx-auto gap-3">
              <Image
                height={"36px"}
                width={"36px"}
                objectFit={"cover"}
                src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg"
                alt=""
              />
              <Image
                height={"36px"}
                width={"36px"}
                objectFit={"cover"}
                src="https://pic.onlinewebfonts.com/thumbnails/icons_5682.svg"
                alt=""
              />
            </Flex>
          </Box>
        </Box>
      </Flex>
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
      <Box className="bg-white lg:hidden mx-auto w-screen md:w-10/12 p-5">
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

export default ArticleDetails;
