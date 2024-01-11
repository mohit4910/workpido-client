"use client";
import Loading from "@/app/loading";
import ContactSeller from "@/components/ContactSeller";
import GigCard from "@/components/GigCard";
import SellerCard from "@/components/SellerCard";
import ZoomableImage from "@/components/ZoomableImage";
import useAuth from "@/hooks/useAuth";
import { API } from "@/lib/api";
import { API_BASE_URL } from "@/lib/constants";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Button,
  Container,
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
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BsFillTelephoneFill, BsPen, BsPencil } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { ImEyeBlocked, ImLocation } from "react-icons/im";
import { PiClockCountdownBold } from "react-icons/pi";
import { RiRadioButtonLine } from "react-icons/ri";
import { toast } from "react-toastify";

const page = ({ params }) => {
  const { username } = params;
  const { push } = useRouter();

  const { me, user, getAvatar, avatarUrl } = useAuth();
  const [userData, setUserData] = useState(null);

  const gigs = [
    {
      id: 18,
      title: "Haribol!! Haribol!!",
      revisions: "8",
      deliveryDays: 7,
      startingPrice: 0,
      fixedPrice: 599,
      hourlyPrice: 0,
      pricingModel: "fixed",
      seller: {
        id: 12,
        displayName: "Sangam Kumar",
        username: "sangam4742",
        createdAt: "2023-10-20T15:19:16.584Z",
        country: "India",
        avatar: null,
        currency: {
          id: 1,
          name: "Indian National Rupee",
          symbol: "₹",
          isoCode: "INR",
        },
      },
      category: {
        id: 1,
        title: "web development",
      },
      banners: [
        {
          id: 9,
          url: "https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg",
        },
        {
          id: 10,
          url: "https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg",
        },
      ],
    },
    {
      id: 29,
      title: "Test Gig",
      revisions: "3",
      deliveryDays: 7,
      startingPrice: 0,
      fixedPrice: 599,
      hourlyPrice: 0,
      pricingModel: "fixed",
      seller: {
        id: 13,
        displayName: "Rishi Kumar",
        username: "rkumar",
        createdAt: "2023-10-21T20:21:38.303Z",
        country: "India",
        avatar: null,
        currency: {
          id: 1,
          name: "Indian National Rupee",
          symbol: "₹",
          isoCode: "INR",
        },
      },
      category: {
        id: 1,
        title: "web development",
      },
      banners: [
        {
          id: 32,
          url: "https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg",
        },
      ],
    },
    {
      id: 2,
      title: "I'll do good work. Hare Krishna!",
      revisions: "3",
      deliveryDays: 7,
      startingPrice: null,
      fixedPrice: null,
      hourlyPrice: 5,
      pricingModel: "hourly",
      seller: {
        id: 12,
        displayName: "Sangam Kumar",
        username: "sangam4742",
        createdAt: "2023-10-20T15:19:16.584Z",
        country: "India",
        avatar: null,
        currency: {
          id: 1,
          name: "Indian National Rupee",
          symbol: "₹",
          isoCode: "INR",
        },
      },
      category: {
        id: 1,
        title: "web development",
      },
      banners: [
        {
          id: 2,
          url: "https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg",
        },
        {
          id: 1,
          url: "https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg",
        },
      ],
    },
  ];

  useEffect(() => {
    me();
  }, []);

  useEffect(() => {
    if (username == "me") {
      setUserData(user);
    } else {
      fetchUserInfo();
    }
  }, [user]);

  useEffect(() => {
    getAvatar(userData?.avatar?.url);
  }, [userData]);

  const fetchUserInfo = async () => {
    API.getUserInfo({ username: username })
      .then((res) => {
        setUserData(res);
      })
      .catch((err) => {
        console.log("Error", err);
        return;
        push("/not-found");
      });
  };

  if (!userData?.id) {
    return (
      <>
        <Loading />
      </>
    );
  }

  return (
    <main
      className="relative mx-auto overflow-x-hidden min-h-screen"
      style={{ backgroundColor: "#f6f6f6" }}
    >
      <Container maxW={["full", "7xl"]}>
        {/* Seller Details */}
        <Flex
          className="w-full flex-col md:flex-row justify-center"
        >
          {/* Main Content */}
          <Flex
            p={6}
            rounded={4}
            boxShadow={"base"}
            className=" mx-auto md:my-10 flex-col md:flex-row"
            bgColor={"#fff"}
            w={"full"}
          >
            {/* User Card */}
            <Flex className="flex-col items-center md:items-start md:w-1/3 w-full gap-2">
              <ZoomableImage src={avatarUrl} />
              <Box className="my-3 text-center md:text-left">
                <Text
                  className="md:block font-medium text-2xl my-2"
                  textTransform={"uppercase"}
                >
                  {userData?.username}
                </Text>
                <Heading className="font-semibold md:hidden text-emerald-600 text-4xl my-2">
                  {userData?.displayName}
                </Heading>
                {/*Seller Profession */}
                <Text
                  className="md:hidden font-medium text-xl my-2"
                  textTransform={"capitalize"}
                >
                  {userData?.profession}
                </Text>
              </Box>
              <Flex className="items-center gap-3">
                <BsFillTelephoneFill color="gray" />
                <Text>Phone Verified</Text>
              </Flex>
              <Flex className="items-center gap-3">
                <ImLocation color="gray" />
                <Text>{userData?.country || "India"}</Text>
              </Flex>
              <Flex className="items-center gap-3">
                <PiClockCountdownBold color="gray" />
                <Text>
                  Joined{" "}
                  {new Date(userData?.createdAt).toLocaleString("default", {
                    month: "long",
                    year: "numeric",
                  })}
                </Text>
              </Flex>
              <Flex className="items-center gap-3">
                <RiRadioButtonLine color="green" />
                <Text>Online</Text>
              </Flex>
              <Flex className="items-center gap-3 hover:cursor-pointer">
                <ImEyeBlocked color="red" />
                <Text>Block this Seller</Text>
              </Flex>
            </Flex>

            {/* User Details */}
            <Box className="bg-white md:w-2/3 w-full flex-2">
              <Box className="p-5 overflow-hidden">
                {/*Seller Full Name */}
                <Heading className="hidden md:block font-medium text-emerald-600 text-4xl text-center md:text-left my-3">
                  {userData?.displayName}
                </Heading>
                {/*Seller Profession */}
                <Text
                  className=" hidden md:block font-medium text-xl text-center md:text-left my-3"
                  textTransform={"capitalize"}
                >
                  {userData?.profession}
                </Text>
                {/* About the Seller */}
                <Text className="my-3">{userData?.bio}</Text>
                <Box mt={8}>
                  <Text className="md:block font-medium text-lg my-3">
                    Skills
                  </Text>
                  {/* About the Seller */}
                  <Flex className="gap-2 flex-wrap">
                    {userData?.skills ? (
                      userData?.skills?.split(",")?.map((skill, key) => (
                        <span className="p-1 px-3 m-1 border rounded" key={key}>
                          {skill?.trim()}
                        </span>
                      ))
                    ) : (
                      <Text>
                        No skills to show, you can add them by editing your
                        profile
                      </Text>
                    )}
                  </Flex>
                  <br />
                  {username == "me" || username == user?.username ? (
                    <Button
                      onClick={() => push("/edit-profile")}
                      variant={"ghost"}
                      leftIcon={<BsPen />}
                    >
                      Edit Profile
                    </Button>
                  ) : null}
                </Box>
              </Box>
            </Box>
          </Flex>
          {/* SideBar - Only visible on large displays */}

          {username == "me" || username == user?.username ? null : (
            <Box className="w-full md:w-[40%]  mx-auto my-10">
              {/* Seller Contact Card */}
              <SellerCard showAvatar={false} className="bg-transparent" />
            </Box>
          )}
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
              {gigs.map((gig, key) => (
                <GigCard gig={gig} key={key} />
              ))}
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
              {gigs.map((gig, key) => (
                <GigCard gig={gig} key={key} />
              ))}
            </Flex>
          </Stack>
        </Flex>
        {/* Reviews */}
        <Box className="mx-1 md:mx-5 my-3 w-full p-2 md:p-5">
          <Text className="font-medium text-lg lg:text-2xl my-3">
            Reviews Left for {user?.username}
          </Text>
          
        </Box>
        {/* contact Section */}

        {username == "me" || username == user?.username ? null : (
          <Flex
            flexDirection="column"
            align="center"
            justify="center"
            bg={"brand.primary"}
            className="md:py-10 md:px-3 z-50 w-screen md:w-1/3 fixed bottom-0 left-0 right-0 md:relative md:mx-auto md:mt-4"
          >
            <ContactSeller
              className="md:my-5 w-full px-2 py-10 text-lg"
              username={username}
            />
          </Flex>
        )}
      </Container>
    </main>
  );
};

export default page;
