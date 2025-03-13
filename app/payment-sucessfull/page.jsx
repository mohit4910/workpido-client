"use client";
import { Box, Button, Image, Text, VStack } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <VStack
        w={"full"}
        p={[4, 8, 12]}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <div className=" bg-emerald-500 h-16 w-16 rounded-full flex items-center justify-center">
          <CheckIcon w={10} h={10} color="white" />
        </div>
        <br />
        <Text
          fontWeight={"semibold"}
          color={"green.500"}
          fontSize={"xl"}
          textAlign={"center"}
          className="uppercase"
        >
          TRANSACTION successful
        </Text>

        <Link href={"/"}>
          <Button rounded={"full"}>Back to Homepage</Button>
        </Link>
      </VStack>
    </>
  );
};

export default page;
