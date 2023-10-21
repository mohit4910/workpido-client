"use client";
import { Image, Text, VStack } from "@chakra-ui/react";
import React from "react";

const page = () => {
  return (
    <>
      <VStack
        w={"full"}
        minH={"90vh"}
        alignItems={"center"}
        justifyContent={"center"}
        p={[8]}
      >
        <Text fontSize={"2xl"} fontWeight={"bold"}>
          404: Page Not Found
        </Text>
        <Image
          src="/not-found.png"
          boxSize={["sm", "xl"]}
          objectFit={"contain"}
        />
      </VStack>
    </>
  );
};

export default page;
