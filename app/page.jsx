"use client";

import AboutUs from "@/components/AboutUs";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  Input,
  List,
  ListItem,
  Text,
  Tooltip,
  VStack,
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
import { API_BASE_URL } from "@/lib/constants";
import { toast } from "react-toastify";

const ZoomImage = ({ src, alt, link }) => {
  const [zoomed, setZoomed] = useState(false);

  return (
    <Box
      borderRadius="sm"
      overflow="hidden"
      className="catalog"
      transition="0.3s ease-in-out"
      _hover={{ shadow: "xl", brightness: "0.2" }}
      cursor={"pointer"}
      as={"a"}
      href={link ?? "#"}
      pos={"relative"}
    >
      <Box textDecoration="none" _hover={{ textDecoration: "none" }}>
        <Image
          src={src}
          alt={alt}
          objectFit="cover"
          transform={zoomed ? "scale(1.05)" : "scale(1.0)"}
          className="h-28 md:h-44 w-44 md:w-72"
          transition="0.3s ease-in-out"
        />
      </Box>
      <Box
        pos={"absolute"}
        w={"full"}
        h={"100%"}
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient="linear(blackAlpha.50 10%, blackAlpha.200 30%, blackAlpha.400 40%, blackAlpha.500 60%, blackAlpha.700 100%)"
        p={4}
        display={"flex"}
        flexDirection={"row"}
        alignItems={"flex-end"}
        justifyContent={"flex-start"}
        onMouseEnter={() => setZoomed(true)}
        onMouseLeave={() => setZoomed(false)}
      >
        <Text fontSize={"lg"} color={"#FFF"}>
          {alt}
        </Text>
      </Box>
    </Box>
  );
};

const Catalog = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const data = JSON.parse(sessionStorage.getItem("categories"));
    if (!data) {
      fetchCategories();
    } else {
      setCategories(data);
    }
  }, []);

  async function fetchCategories() {
    try {
      const res = await API.getAllCategories();
      setCategories(res);
      sessionStorage.setItem("categories", JSON.stringify(res));
    } catch (error) {
      toast.warn("Couldn't fetch categories");
    }
  }

  return (
    <>
      <Flex
        w={"full"}
        justifyContent="center"
        flexWrap="wrap"
        className="gap-4"
      >
        {categories?.map((data, key) => (
          <ZoomImage
            src={API_BASE_URL?.replace("/api", "") + data?.cover?.url}
            alt={data?.title}
            link={`/category/${data?.id}`}
          />
        ))}
      </Flex>
    </>
  );
};

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <main className="flex flex-col items-center justify-between min-h-screen mb-10">
      {/* Banner */}
      <Box
        w={"full"}
        className="relative"
        bgImage="url(https://images.pexels.com/photos/251603/pexels-photo-251603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
        py={[8, 12]}
        bgSize={"cover"}
        display={"flex"}
      >
        <Container maxW={["full", "3xl", "5xl", "7xl"]}>
          <Flex
            direction={["column", "row"]}
            w={"full"}
            alignItems={"center"}
            justifyContent="center"
            h={"full"}
          >
            <Flex
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Text
                mx={["0", "auto"]}
                mb={[3, 4]}
                fontSize={["2xl", "4xl"]}
                fontWeight={["medium"]}
              >
                Buy affordable freelance services on the go
              </Text>
              <Flex className="flex-col items-center justify-center w-full gap-2 mx-auto md:mb-4 md:justify-start md:mx-0 md:gap-0 md:flex-row">
                <Flex className="items-center w-full gap-0 text-black bg-white border">
                  <BsSearch size={"20px"} className="m-3" />
                  <Input
                    type="text"
                    placeholder={`Try "social media design"`}
                    className="h-full text-base border-none outline-none"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
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
                  onClick={() => push(`./search?search=${search}`)}
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
              justifyContent={["center", "flex-end"]}
              alignItems="center"
              p={4}
              w={"full"}
              flexWrap="wrap"
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
        </Container>
      </Box>

      {/* Top Brands */}
      <Flex
        background={"rgba(255, 255, 255)"}
        className="items-center hidden w-full p-5 mb-0 shadow-md md:flex justify-evenly"
      >
        <Container maxW={["full", "3xl", "5xl", "7xl"]}>
          <HStack
            w={"full"}
            justifyContent={"space-between"}
            alignItems={"center"}
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
          </HStack>
        </Container>
      </Flex>

      {/* Main Content */}
      <Flex flexDirection={"column"} alignItems={"center"} w={"full"}>
        <Box p={[4, 8]}>
          <Container maxW={["full", "3xl", "5xl", "7xl"]}>
            <Text
              fontSize={24}
              w={["full"]}
              textAlign={"left"}
              fontWeight={"medium"}
              my={[8, 12]}
            >
              {"Explore Kwork's Evergrowing Catalog"}
            </Text>
            <Catalog />
            <Stats />
            <Features />
          </Container>
        </Box>

        {/* Getting Started Section */}
        <Container maxW={["full", "3xl", "5xl", "7xl"]}>
          <Flex
            flexDirection="column"
            align="center"
            justify="center"
            className="w-full gap-1 px-3 py-10 mt-3 bg-white md:gap-2"
            bgImage="url(https://images.pexels.com/photos/5474294/pexels-photo-5474294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)"
            bgSize={"cover"}
            bgRepeat={"no-repeat"}
            bgPosition={"center"}
            bgAttachment={"fixed"}
          >
            <VStack maxW={["full", "3xl", "5xl", "7xl"]}>
              <Heading className="mt-3 text-xl font-bold text-center md:text-2xl md:mt-5">
                Start saving with freelance services today
              </Heading>
              <Text className="font-medium" textAlign={"center"}>
                Speed, quality, and affordability: you can have it all!
              </Text>
              <Button
                className="px-2 py-6 my-5 text-base rounded"
                as={"a"}
                display={"inline-flex"}
                color={"white"}
                bg={"brand.primary"}
                href={"#"}
                _hover={{
                  bg: "green.300",
                }}
                w={["full"]}
              >
                Sign up for Free
              </Button>
            </VStack>
          </Flex>
        </Container>
        <AboutUs />
      </Flex>
    </main>
  );
}
