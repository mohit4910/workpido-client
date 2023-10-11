"use client";

import AboutUs from "@/components/AboutUs";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Text,
  Tooltip,
} from "@chakra-ui/react";

import { API } from "@/lib/api";
// import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";

const ZoomableImage = ({ src, alt }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoom = () => {
    setIsZoomed(true);
  };

  const handleUnzoom = () => {
    setIsZoomed(false);
  };

  return (
    <Box
      borderRadius="sm"
      overflow="hidden"
      className="catalog"
      transition="0.3s ease-in-out"
      _hover={{ shadow: "xl", brightness: "0.2" }}
    >
      <Box textDecoration="none" _hover={{ textDecoration: "none" }}>
        <Image
          src={src}
          alt={alt}
          width="280px"
          height="180px"
          objectFit="cover"
          transform="scale(1.0)"
          // objectFit="contain"
          // width="100%"
          transition="0.3s ease-in-out"
          _hover={{
            transform: "scale(1.05)",
          }}
        />
      </Box>
    </Box>
  );
};

const Catalog = () => (
  <Flex
    justify="space-around"
    flexWrap="wrap"
    columnGap={6}
    rowGap={10}
    className="mx-auto max-w-[1196px]"
  >
    <ZoomableImage
      src="https://cdn.kwork.com/files/category/collage/categories_first_level/en/t3_r/seo_guest.webp?ver=1615534300"
      alt="services"
    />
    <ZoomableImage
      src="https://cdn.kwork.com/files/category/collage/categories_first_level/en/t3_r/reklama-pr_guest.webp?ver=1628520228"
      alt="services"
    />
    <ZoomableImage src="https://cdn.kwork.com/files/category/collage/categories_first_level/en/t3/programming_guest.webp?ver=1615534237" />
    <ZoomableImage
      src="https://cdn.kwork.com/files/category/collage/categories_first_level/en/t3/design_guest.webp?ver=1615534203"
      alt="services"
    />
    <ZoomableImage
      src="https://cdn.kwork.com/files/category/collage/categories_first_level/en/t3/writing-translations_guest.webp?ver=1615534286"
      alt="services"
    />
    <ZoomableImage
      src="https://cdn.kwork.com/files/category/collage/categories_first_level/en/t3/audio-video_guest.webp?ver=1615534330"
      alt="services"
    />
    <ZoomableImage
      src="https://cdn.kwork.com/files/category/collage/categories_first_level/en/t3/business_guest.webp?ver=1615534340"
      alt="services"
    />
  </Flex>
);

export default function Home() {
  const getData = async () => {
    let res = await API.getGigs();
    console.log(res);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <main className="flex flex-col items-center justify-between min-h-screen  mb-10">
      {/* Banner */}
      <Flex
        className="relative max-h-[720px]"
        bgImage="url(https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=600)"
        h={{ base: "60vh", md: "85vh" }}
        w={"full"}
        justify="center"
        bgSize={"cover"}
      >
        <Flex
          flexDirection="column"
          align="flex-start"
          justify="center"
          className="text-white w-full px-8 container"
        >
          <Text className="mb-3 font-semibold md:text-4xl md:mb-4 mx-auto md:mx-0">
            Buy affordable freelance services on the go
          </Text>
          <Flex className="flex-col items-center justify-center md:justify-start mx-auto md:mx-0 md:gap-0 md:flex-row gap-2">
            <Flex className="border text-black bg-white gap-0 items-center">
              <BsSearch size={"20px"} className="m-3" />
              <Input
                type="text"
                placeholder={`Try "social media design"`}
                className="border-none h-full outline-none text-base"
              />
            </Flex>
            <Button
              className="px-4 py-6 text-sm w-full md:w-1/4"
              as={"a"}
              display={"inline-flex"}
              color={"white"}
              bg={"brand.primary"}
              href={"#"}
              _hover={{
                bg: "green.300",
              }}
            >
              Search
            </Button>
          </Flex>
        </Flex>
        <Flex
          background={"rgba(255, 255, 255)"}
          position={"absolute"}
          bottom={"0px"}
          left={"0px"}
          className="hidden md:flex mb-0 p-5 w-full items-center justify-evenly"
        >
          <Tooltip
            hasArrow
            label="Top Companies uses Workpido to get work done"
            bg="white"
            color="black"
          >
            <Image
              src="https://cdn.kwork.com/images/index/partners/en/ikea.svg?ver=3"
              alt=""
            />
          </Tooltip>
          <Tooltip
            hasArrow
            label="Top Companies uses Workpido to get work done"
            bg="white"
            color="black"
          >
            <Image
              src="https://cdn.kwork.com/images/index/partners/en/apple.svg?ver=3"
              alt=""
            />
          </Tooltip>
          <Tooltip
            hasArrow
            label="Top Companies uses Workpido to get work done"
            bg="white"
            color="black"
          >
            <Image
              src="https://cdn.kwork.com/images/index/partners/en/danone.svg?ver=3"
              alt=""
            />
          </Tooltip>
          <Tooltip
            hasArrow
            label="Top Companies uses Workpido to get work done"
            bg="white"
            color="black"
          >
            <Image
              src="https://cdn.kwork.com/images/index/partners/en/leroy-merlin.svg?ver=3"
              alt=""
            />
          </Tooltip>
          <Tooltip
            hasArrow
            label="Top Companies uses Workpido to get work done"
            bg="white"
            color="black"
          >
            <Image
              src="https://cdn.kwork.com/images/index/partners/en/bp.svg?ver=3"
              alt=""
            />
          </Tooltip>

          <Tooltip
            hasArrow
            label="Top Companies uses Workpido to get work done"
            bg="white"
            color="black"
          >
            <Image
              src="https://cdn.kwork.com/images/index/partners/en/philips.svg?ver=3"
              alt=""
            />
          </Tooltip>
        </Flex>
      </Flex>
      {/* Main Content */}
      <Flex
        flexDirection={"column"}
        alignItems={"center"}
        className="mb-8 py-4 lg:container"
      >
        <Text fontSize={24} fontWeight={"semibold"} mb={8} ml={4}>
          {"Explore Kwork's Evergrowing Catalog"}
        </Text>
        <Catalog />
        <Stats />
        <Features />
        {/* Getting Started Section */}
        <Flex
          flexDirection="column"
          align="center"
          justify="center"
          className="py-10 px-3 w-full bg-white mt-3 md:container gap-2"
          bgImage="url(https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)"
          bgSize={"cover"}
        >
          <h4 className="text-2xl mt-5 text-center font-bold">
            Start saving with freelance services today
          </h4>
          <Text className="font-bold ">
            Speed, quality, and affordability: you can have it all!
          </Text>
          <Button
            className="my-5 w-1/3 px-2 py-6 text-sm"
            as={"a"}
            display={"inline-flex"}
            color={"white"}
            bg={"brand.primary"}
            href={"#"}
            _hover={{
              bg: "green.300",
            }}
          >
            Sign up for Free
          </Button>
        </Flex>
        <AboutUs />
      </Flex>
    </main>
  );
}
