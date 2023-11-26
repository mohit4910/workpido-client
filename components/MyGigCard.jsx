"use client";
import useApiHandler from "@/hooks/useApiHandler";
import {
  Box,
  HStack,
  Icon,
  IconButton,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { HiPencil } from "react-icons/hi";
import { IoMdCart, IoMdEye } from "react-icons/io";
import { MdContentCopy, MdDelete, MdPause } from "react-icons/md";
import { TbCoin } from "react-icons/tb";

const MyGigCard = ({
  banner,
  title,
  views,
  orders,
  earnings,
  currency,
  price,
}) => {
  const { getMediaUrl } = useApiHandler();
  const [bannerUrl, setBannerUrl] = useState("https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png");

  useEffect(() => {
    if (!banner) return;
    const mediaUrl = getMediaUrl(banner);
    setBannerUrl(mediaUrl);
  }, [banner]);

  return (
    <>
      <Box w={["full"]} bgColor={"#FFF"} rounded={4} boxShadow={"base"} my={4}>
        <Stack p={[4]} direction={["row"]} gap={4}>
          <Image
            w={56}
            height={36}
            src={
              bannerUrl ??
              "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
            }
          />
          <Box w={"full"}>
            <HStack
              p={2}
              pt={0}
              w={"full"}
              borderBottom={"1px"}
              borderColor={"#e2e2e2"}
              fontWeight={"medium"}
              justifyContent={"space-between"}
            >
              <Text>{title}</Text>
              <HStack>
                <IconButton variant={"ghost"} icon={<MdDelete />} />
                <IconButton variant={"ghost"} icon={<MdContentCopy />} />
                <IconButton variant={"ghost"} icon={<MdPause />} />
                <IconButton variant={"ghost"} icon={<HiPencil />} />
              </HStack>
            </HStack>
            <Stack
              direction={["column", "row"]}
              justifyContent={"space-between"}
              gap={8}
              py={4}
            >
              <Box w={"full"}>
                <HStack gap={8}>
                  <HStack gap={1}>
                    <Icon as={IoMdEye} color={"gray.400"} />
                    <Text fontSize={"xs"}>Views : </Text>
                  </HStack>
                  <Text fontSize={"xs"}> {views}</Text>
                </HStack>
                <HStack gap={7}>
                  <HStack gap={1}>
                    <Icon as={IoMdCart} color={"gray.400"} />
                    <Text fontSize={"xs"}>Orders : </Text>
                  </HStack>
                  <Text fontSize={"xs"}> {orders}</Text>
                </HStack>
                <HStack gap={4}>
                  <HStack gap={1}>
                    <Icon as={TbCoin} color={"gray.400"} />
                    <Text fontSize={"xs"}>Earnings : </Text>
                  </HStack>
                  <Text fontSize={"xs"}> {earnings}</Text>
                </HStack>
              </Box>
              <VStack
                w={"full"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Text fontSize={"xs"}>
                  Ratings are available after 8 orders
                </Text>
              </VStack>
              <VStack
                w={"full"}
                alignItems={"flex-end"}
                justifyContent={"flex-end"}
              >
                <Text fontSize={"xs"} color={"gray.500"}>
                  Starting from
                </Text>
                <Text fontSize={"xs"} fontWeight={"semibold"}>
                  {`${currency}${price}`}
                </Text>
              </VStack>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default MyGigCard;
