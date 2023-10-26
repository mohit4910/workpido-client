"use client";
import { Button, HStack, Image, Text, VStack } from "@chakra-ui/react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";

const page = () => {
  const { replace } = useRouter();
  return (
    <>
      <VStack
        w={"full"}
        h={"100vh"}
        alignItems={"center"}
        justifyContent={"center"}
        p={[4, 8, 12]}
      >
        <Text
          fontSize={["2xl", "4xl"]}
          fontWeight={"bold"}
          textAlign={"center"}
        >
          Congratulations!!
        </Text>
        <Image
          src="/success.jpg"
          w={["xs", "xl", "3xl"]}
          objectFit={"contain"}
        />
        <Text textAlign={"center"} fontSize={"lg"} fontWeight={"semibold"}>
          Your Gig was created successfully. It will be publicly visible once
          verified by our team.
        </Text>
        <br />
        <HStack w={"full"} alignItems={"center"} justifyContent={"center"}>
          <Button
            rounded={"full"}
            leftIcon={<BsArrowLeft />}
            onClick={() => {
              Cookies.remove("recentGigId");
              replace("/seller-dashboard");
            }}
          >
            Return to Dashboard
          </Button>
        </HStack>
      </VStack>
    </>
  );
};

export default page;
