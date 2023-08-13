"use client";

import { Button, Flex, HStack, Heading, Text } from "@chakra-ui/react";
import { Box } from "iconsax-react";
import React from "react";

const page = () => {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      {/* Banner */}
      <Flex
        className="banner"
        bgImage="url(https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)"
        h={{ base: "60vh", md: "90vh" }}
        w={"full"}
      >
        <Box py={24}>
          <Heading
            mb={2}
            fontWeight="bold"
            fontSize={{ base: "xl", md: "3xl" }}
          >
            Do Work You Enjoy
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }}>
            Thousands of buyers are ready to pay for your skills
          </Text>
          <Button bg="brand.primary" mt={4}>
            Start Earning
          </Button>
          <HStack
            className="banner-bar"
            bg="rgba(255, 255, 255, 0.29)"
            pos="absolute"
            bottom={0}
            left={0}
            w="100%"
            pb={2}
            pl={4}
          >
            <Box>
              <Text fontSize="sm" fontWeight="bold">
                A work is purchased
              </Text>
              <Text fontSize="xl">every 60 seconds</Text>
            </Box>
            <Box>
              <Text fontSize="sm" fontWeight="bold">
                average earnings
              </Text>
              <Text fontSize="xl">$520 a month</Text>
            </Box>
          </HStack>
        </Box>
      </Flex>
    </main>
  );
};

export default page;
