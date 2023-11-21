"use client";
import { Box, Button, Image, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const page = ({ params }) => {
  const { id } = params;
  return (
    <>
      <VStack
        w={"full"}
        p={[4, 8, 12]}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Image src="/failed.png" w={["28"]} objectFit={"contain"} />
        <br />
        <Text
          fontWeight={"semibold"}
          color={"red.500"}
          fontSize={"xl"}
          textAlign={"center"}
        >
          TRANSACTION FAILED
        </Text>
        <Text textAlign={"center"}>
          Your transaction could not be completed. Reference ID {id}
        </Text>
        <Link href={"/"}>
          <Button rounded={"full"}>Back to Homepage</Button>
        </Link>
      </VStack>
    </>
  );
};

export default page;
