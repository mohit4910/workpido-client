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
  List,
  ListItem,
  Text,
  Tooltip,
} from "@chakra-ui/react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { Autoplay, EffectCards, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { API } from "@/lib/api";
// import Image from "next/image";
import SellerCard from "@/components/SellerCard";
import ZoomableImage from "@/components/ZoomableImage";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";

const ZoomImage = ({ src, alt }) => {
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
          objectFit="cover"
          transform="scale(1.0)"
          className="h-28 md:h-44 w-44 md:w-72"
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
    className="mx-2 md:mx-auto max-w-[1196px] gap-x-2 md:gap-x-2 gap-y-4 md:gap-y-6"
  >
    <ZoomImage
      src="https://cdn.kwork.com/files/category/collage/categories_first_level/en/t3_r/seo_guest.webp?ver=1615534300"
      alt="services"
    />
    <ZoomImage
      src="https://cdn.kwork.com/files/category/collage/categories_first_level/en/t3_r/reklama-pr_guest.webp?ver=1628520228"
      alt="services"
    />
    <ZoomImage src="https://cdn.kwork.com/files/category/collage/categories_first_level/en/t3/programming_guest.webp?ver=1615534237" />
    <ZoomImage
      src="https://cdn.kwork.com/files/category/collage/categories_first_level/en/t3/design_guest.webp?ver=1615534203"
      alt="services"
    />
    <ZoomImage
      src="https://cdn.kwork.com/files/category/collage/categories_first_level/en/t3/writing-translations_guest.webp?ver=1615534286"
      alt="services"
    />
    <ZoomImage
      src="https://cdn.kwork.com/files/category/collage/categories_first_level/en/t3/audio-video_guest.webp?ver=1615534330"
      alt="services"
    />
    <ZoomImage
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
    <main className="flex flex-col items-center justify-between min-h-screen mb-10">
      {/* Banner */}
      <Flex
        className="relative max-h-[720px]"
        bgImage="url(https://images.pexels.com/photos/251603/pexels-photo-251603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
        h={{ base: "40vh", md: "85vh" }}
        w={"full"}
        justify="center"
        bgSize={"cover"}
      >
        <Flex className="container">
          <Flex
            flexDirection="column"
            align="flex-start"
            justify="center"
            className="items-start w-full text-white md:w-1/2"
          >
            <Text className="mx-auto mb-3 text-xl font-semibold md:text-4xl md:mb-4 md:mx-0">
              Buy affordable freelance services on the go
            </Text>
            <Flex className="flex-col items-center justify-center w-full gap-2 mx-auto md:mb-4 md:justify-start md:mx-0 md:gap-0 md:flex-row">
              <Flex className="items-center w-full gap-0 text-black bg-white border">
                <BsSearch size={"20px"} className="m-3" />
                <Input
                  type="text"
                  placeholder={`Try "social media design"`}
                  className="h-full text-base border-none outline-none"
                />
              </Flex>
              <Button
                className="w-full px-4 py-6 text-sm rounded-l-none md:w-1/4"
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
            <Flex className="items-center justify-around hidden w-full md:flex">
              <Text className="mx-0 mr-2 font-semibold ext-sm">Popular:</Text>
              <List className="flex items-center gap-3">
                <ListItem
                  whiteSpace={"nowrap"}
                  className="px-2 py-1 text-sm font-semibold text-black border rounded cursor-pointer border-slate-300 bg-[#f4f7fc]"
                >
                  Web Design
                </ListItem>
                <ListItem
                  whiteSpace={"nowrap"}
                  className="px-2 py-1 text-sm font-semibold text-black border rounded cursor-pointer border-slate-300 bg-[#f4f7fc]"
                >
                  Logo Design
                </ListItem>
                <ListItem
                  whiteSpace={"nowrap"}
                  className="px-2 py-1 text-sm font-semibold text-black border rounded cursor-pointer border-slate-300 bg-[#f4f7fc]"
                >
                  Social Media Design
                </ListItem>
                <ListItem
                  whiteSpace={"nowrap"}
                  className="px-2 py-1 text-sm font-semibold text-black border rounded cursor-pointer border-slate-300 bg-[#f4f7fc]"
                >
                  Wordpress
                </ListItem>
              </List>
            </Flex>
          </Flex>
          {/* Freelancers */}
          <Flex
            justify="center"
            align="center"
            flexWrap="wrap"
            className="justify-center hidden p-6 md:flex md:w-full"
          >
            <Flex className="relative justify-center ml-12 items-right">
              <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards, Autoplay]}
                loop={true}
                autoplay={{
                  delay: 2500, // Set the delay between auto slides in milliseconds (3 seconds in this example)
                  disableOnInteraction: false, // Keep auto-scrolling after user interactions
                }}
                className="mySwiper w-72 h-72"
              >
                <SwiperSlide className="rounded-lg">
                  {" "}
                  <ZoomableImage
                    src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="services"
                    caption="I'm a Link Builder"
                  />
                </SwiperSlide>
                <SwiperSlide className="rounded-lg">
                  {" "}
                  <ZoomableImage
                    src="https://images.pexels.com/photos/2240772/pexels-photo-2240772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="services"
                    caption="I'm a Voice Actor"
                  />
                </SwiperSlide>
                <SwiperSlide className="rounded-lg">
                  {" "}
                  <ZoomableImage
                    src="https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="services"
                    caption="I'm a Web Developer"
                  />
                </SwiperSlide>
                <SwiperSlide className="rounded-lg">
                  {" "}
                  <ZoomableImage
                    src="https://images.pexels.com/photos/2345293/pexels-photo-2345293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="services"
                    caption="I'm a Dance Instructor"
                  />
                </SwiperSlide>
                <SwiperSlide className="rounded-lg">
                  {" "}
                  <ZoomableImage
                    src="https://images.pexels.com/photos/3119215/pexels-photo-3119215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="services"
                    caption="I'm a Designer"
                  />
                </SwiperSlide>
                <SwiperSlide className="rounded-lg">
                  {" "}
                  <ZoomableImage
                    src="https://images.pexels.com/photos/2531552/pexels-photo-2531552.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="services"
                    caption="I'm a Video Editor"
                  />
                </SwiperSlide>
                <SwiperSlide className="rounded-lg">
                  {" "}
                  <ZoomableImage
                    src="https://images.pexels.com/photos/2748242/pexels-photo-2748242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="services"
                    caption="I'm a Actor"
                  />
                </SwiperSlide>
              </Swiper>
            </Flex>
          </Flex>
        </Flex>
        {/* Top Brands */}
        <Flex
          background={"rgba(255, 255, 255)"}
          position={"absolute"}
          bottom={"0px"}
          left={"0px"}
          className="items-center hidden w-full p-5 mb-0 shadow-md md:flex justify-evenly"
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
        className="w-full py-4 mb-8 lg:container"
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
          className="w-full gap-1 px-3 py-10 mt-3 bg-white md:container md:gap-2"
          bgImage="url(https://images.pexels.com/photos/5474294/pexels-photo-5474294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)"
          bgSize={"cover"}
          bgRepeat={"no-repeat"}
          bgPosition={"center"}
          bgAttachment={"fixed"}
        >
          <Heading className="mt-3 text-xl font-bold text-center md:text-2xl md:mt-5">
            Start saving with freelance services today
          </Heading>
          <Text className="font-bold ">
            Speed, quality, and affordability: you can have it all!
          </Text>
          <Button
            className="w-2/3 px-2 py-6 my-5 text-base rounded md:w-1/3"
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
