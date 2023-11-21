"use client";
import { Image } from "@chakra-ui/next-js";
// import Image from "next/image";
import {
  Avatar,
  Box,
  Center,
  Heading,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import ImageSlider from "./ImageSlider";
import { useEffect, useState } from "react";
import useApiHandler from "@/hooks/useApiHandler";
import useAuth from "@/hooks/useAuth";

export default function GigCard({ gig }) {
  const { getMediaUrl } = useApiHandler();
  const { getAvatar } = useAuth();
  const [bannerImageUrls, setBannerImageUrls] = useState([]);
  const [sellerAvatar, setSellerAvatar] = useState("");

  useEffect(() => {
    const banners = gig?.banners || [{ url: "" }];
    let mediaUrls = [];
    banners?.forEach((banner) => {
      const url = getMediaUrl(banner?.url);
      mediaUrls.push(url);
    });
    setBannerImageUrls(mediaUrls);

    const avatarUrl = getAvatar(gig?.seller?.avatar?.url);
    setSellerAvatar(avatarUrl);
  }, []);

  return (
    <Center py={6}>
      <Box
        w={"64"}
        // maxW={"250px"}
        transition="0.5s ease"
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={useColorModeValue("white", "gray.900")}
        _hover={{
          boxShadow: "xl",
          transform: "scale(1.02)",
        }}
        rounded={"md"}
        p={6}
        overflow={"hidden"}
        border={"1px"}
        borderColor={"brand.border"}
        transitionDelay={1}
      >
        <Box
          h={"36"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
          overflow={'hidden'}
        >
          {/* <img
            src={
              "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
            alt="Example"
          /> */}
          <ImageSlider images={bannerImageUrls} />
        </Box>
        <Link href={`/article-details/${gig?.id}`}>
          <Stack borderBottom={"1px"} pb={2}>
            <Text
              // eslint-disable-next-line react-hooks/rules-of-hooks
              color={useColorModeValue("gray.700", "white")}
              fontSize={"sm"}
              fontFamily={"body"}
            >
              {gig?.title ?? "Sample Gig Title"}
            </Text>
            <Text
              align={"right"}
              fontSize={"xs"}
              color="brand.primary"
              // fontWeight={"bold"}
              textTransform={"uppercase"}
            >
              Starting at{" "}
              <span className="text-lg font-bold">
                {gig?.seller?.currency?.symbol ?? "₹"}
                {gig?.pricingModel == "plans"
                  ? gig?.startingPrice
                  : gig?.pricingModel == "fixed"
                  ? gig?.fixedPrice
                  : gig?.hourlyPrice || "999"}
              </span>
            </Text>
          </Stack>
        </Link>
        <Link href={"/profile"}>
          <Stack mt={4} direction={"row"} spacing={2} align={"center"}>
            <Avatar size={"sm"} src={sellerAvatar} />
            <Stack direction={"column"} spacing={0} fontSize={"sm"}>
              <Text fontSize={"xs"}>
                {gig?.seller?.displayName || gig?.seller?.username || "Adarsh P."}
              </Text>
              <Text color={"gray.500"} fontSize={"xs"}>
              {gig?.seller?.username}
            </Text>
            </Stack>
          </Stack>
        </Link>
      </Box>
    </Center>
  );
}
