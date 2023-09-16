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

export default function GigCard() {
  return (
    <Center py={6}>
      <Box
        maxW={"250px"}
        w={"full"}
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
          // h={"150px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
        >
          {/* <img
            src={
              "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
            alt="Example"
          /> */}
          <ImageSlider />
        </Box>
        <Link href={"/article-details"}>
          <Stack borderBottom={"1px"} pb={2}>
            <Text
              // eslint-disable-next-line react-hooks/rules-of-hooks
              color={useColorModeValue("gray.700", "white")}
              fontSize={"sm"}
              fontFamily={"body"}
            >
              {
                "I'll build HTML, CSS, Bootstrap pixel perfect and responsive website"
              }
            </Text>
            <Text
              align={"right"}
              fontSize={"xs"}
              color="brand.primary"
              // fontWeight={"bold"}
              textTransform={"uppercase"}
            >
              Starting at <span className="text-lg font-bold">$100</span>
            </Text>
          </Stack>

          <Stack mt={4} direction={"row"} spacing={2} align={"center"}>
            <Avatar
              size={"sm"}
              src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
            />
            <Stack direction={"column"} spacing={0} fontSize={"sm"}>
              <Text fontSize={"xs"}>geekguyadarsh</Text>
              {/* <Text color={"gray.500"} fontSize={"xs"}>
              Developer
            </Text> */}
            </Stack>
          </Stack>
        </Link>
      </Box>
    </Center>
  );
}
