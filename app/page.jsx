"use client";

import AboutUs from "@/components/AboutUs";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import { Flex, Image, Text, Box } from "@chakra-ui/react";
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
    <main className="flex flex-col items-center justify-between min-h-screen p-4 mb-10">
      <div className="mb-8">
        <Text fontSize={24} fontWeight={"semibold"} mb={8}>
          {"Explore Kwork's Evergrowing Catalog"}
        </Text>

        <Catalog />
        <Stats />
        <Features />
        <AboutUs />
      </div>
    </main>
  );
}
