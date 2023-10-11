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
  Text,
  Tooltip,
} from "@chakra-ui/react";
// import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

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
          width="230px"
          height="150px"
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
  <Flex justify="space-around" flexWrap="wrap" columnGap={5} rowGap={10}>
    <ZoomableImage
      src="https://cdn.kwork.com/files/category/collage/categories_first_level/en/t3_r/seo_guest.webp?ver=1615534300"
      alt="services"
    />
    <ZoomableImage
      src="https://cdn.kwork.com/files/category/collage/categories_first_level/en/t3_r/reklama-pr_guest.webp?ver=1628520228"
      alt="services"
    />
    <ZoomableImage
      src="https://cdn.kwork.com/files/category/collage/categories_first_level/en/t3_r/seo_guest.webp?ver=1615534300"
      alt="services"
    />
    <ZoomableImage
      src="https://cdn.kwork.com/files/category/collage/categories_first_level/en/t3_r/reklama-pr_guest.webp?ver=1628520228"
      alt="services"
    />
    <ZoomableImage
      src="https://cdn.kwork.com/files/category/collage/categories_first_level/en/t3_r/audio-video_guest.webp?ver=1615534330"
      alt="services"
    />
    <ZoomableImage
      src="https://cdn.kwork.com/files/category/collage/categories_first_level/en/t3_r/reklama-pr_guest.webp?ver=1628520228"
      alt="services"
    />
    <ZoomableImage
      src="https://cdn.kwork.com/files/category/collage/categories_first_level/en/t3_r/seo_guest.webp?ver=1615534300"
      alt="services"
    />
    <ZoomableImage
      src="https://cdn.kwork.com/files/category/collage/categories_first_level/en/t3_r/seo_guest.webp?ver=1615534300"
      alt="services"
    />
  </Flex>
);

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen  mb-10">
      {/* Banner */}
      <Flex
        className="relative max-h-[720px]"
        bgImage="url(https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)"
        h={{ base: "60vh", md: "90vh" }}
        w={"full"}
        justify="center"
        bgSize={"cover"}
      >
        <Flex
          flexDirection="column"
          align="center"
          justify="center"
          className="text-white"
        >
          <Heading className="mb-2 md:text-5xl md:mb-4">
            Do Work You Enjoy
          </Heading>
          <Text className="mb-4 px-4 text-center md:p-0 text-white md:text-xl md:mb-6">
            Thousands of buyers are ready to pay for your skills
          </Text>
          <Button
            className="mt-4 w-3/4 md:w-1/2 px-4 py-6 text-sm"
            as={"a"}
            display={"inline-flex"}
            color={"white"}
            bg={"brand.primary"}
            href={"#"}
            _hover={{
              bg: "green.300",
            }}
          >
            Start Earning
          </Button>
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
      <div className="mb-8 py-4">
        <Text fontSize={24} fontWeight={"semibold"} mb={8}>
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
      </div>
    </main>
  );
}
