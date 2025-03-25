"use client";
// import Image from "next/image";
import {
  Avatar,
  Box,
  Center,
  HStack,
  Heading,
  Hide,
  Icon,
  Image,
  Stack,
  Text,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import Link from "next/link";
import ImageSlider from "./ImageSlider";
import { useEffect, useState } from "react";
import useApiHandler from "@/hooks/useApiHandler";
import useAuth from "@/hooks/useAuth";
import { BsStarFill } from "react-icons/bs";

const MobileLayout = ({ gig, bannerImageUrls, sellerAvatar }) => {
  return (
    <>
      <Box
        w={"full"}
        h={["32", "36"]}
        p={3}
        bgColor={"#FFF"}
        rounded={4}
        boxShadow={"base"}
      >
        <HStack w={"full"} gap={3} h={"100%"}>
          <Box flex={[3, 1]} h={"full"}>
            <Image
              w={"full"}
              h={"inherit"}
              objectFit={"cover"}
              src={bannerImageUrls?.length ? bannerImageUrls[0] : "/"}
            />
          </Box>
          <Box flex={4} h={"full"}>
            <Box w={"full"} h={"full"}>
              <HStack
                w={"full"}
                alignItems={"flex-start"}
                justifyContent={"flex-start"}
              >
                <Box w={"95%"} h={"14"}>
                  <Text fontSize={["xs", "sm"]}>{gig?.title}</Text>
                </Box>
              </HStack>
              <HStack
                w={"full"}
                py={1}
                alignItems={"center"}
                justifyContent={"flex-end"}
                borderBottom={"1px"}
                borderBottomColor={"#E2E2E2"}
              >
                <Icon as={BsStarFill} color={"yellow.500"} size={"sm"} />
                <Text
                  fontSize={"sm"}
                  fontWeight={"semibold"}
                  color={"yellow.500"}
                >
                  4.7
                </Text>
                <Text fontSize={"xs"} color={"gray.500"}>
                  (91)
                </Text>
              </HStack>
              <HStack w={"full"} pt={2} justifyContent={"space-between"}>
                <Text fontSize={"xs"} color={"gray.500"}>
                  {gig?.seller?.displayName ?? gig?.seller?.username}
                </Text>
                <Text
                  fontSize={"sm"}
                  fontWeight={"semibold"}
                  color={"yellow.500"}
                >
                  {gig?.seller?.currency?.symbol ?? "₹"}
                  {gig?.minPrice}
                </Text>
              </HStack>
            </Box>
          </Box>
        </HStack>
      </Box>
    </>
  );
};

const DesktopLayout = ({ gig, bannerImageUrls, sellerAvatar }) => {
  return (
    <>
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
            overflow={"hidden"}
          >
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
                Starting at <span></span>
                <span className="text-lg font-bold">
                  {gig?.seller?.currency?.symbol ?? "₹"}
                  {/* {gig?.minPrice}{" "} */}
                  {gig?.pricingModel == "plans"
                    ? gig?.startingPrice
                    : gig?.pricingModel == "fixed"
                    ? gig?.fixedPrice
                    : gig?.hourlyPrice}
                </span>
              </Text>
            </Stack>
          </Link>
          <Link href={"/profile"}>
            <Stack mt={4} direction={"row"} spacing={2} align={"center"}>
              <Avatar size={"sm"} src={sellerAvatar} />
              <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                <Text fontSize={"xs"}>
                  {gig?.seller?.displayName ?? gig?.seller?.username}
                </Text>
                <Text color={"gray.500"} fontSize={"xs"}>
                  {gig?.seller?.displayName ? gig?.seller?.username : null}
                </Text>
              </Stack>
            </Stack>
          </Link>
        </Box>
      </Center>
    </>
  );
};

export default function GigCard({ gig, layout }) {
  const { getMediaUrl } = useApiHandler();
  const { getAvatar } = useAuth();
  const [isMobileView] = useMediaQuery("(max-width: 800px)");

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
    <>
      {isMobileView ? (
        <MobileLayout
          gig={gig}
          sellerAvatar={sellerAvatar}
          bannerImageUrls={bannerImageUrls}
        />
      ) : layout == "stack" ? (
        <MobileLayout
          gig={gig}
          sellerAvatar={sellerAvatar}
          bannerImageUrls={bannerImageUrls}
        />
      ) : (
        <DesktopLayout
          gig={gig}
          sellerAvatar={sellerAvatar}
          bannerImageUrls={bannerImageUrls}
        />
      )}
    </>
  );
}
