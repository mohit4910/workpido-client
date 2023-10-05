"use client";

import GigCard from "@/components/GigCard";
import { Box, Flex, Grid, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { ArrowDown2 } from "iconsax-react";
import React from "react";

const page = () => {
  return (
    <main className="flex flex-col min-h-screen p-4 mb-10 bg-[#f6f6f6] lg:container lg:mx-auto">
      <div className="mb-8">
        <Text fontSize={26} fontWeight={600}>
          Logo Design
        </Text>
        <Flex mt={3}>
          <Text className="px-4 py-2 mr-4 text-sm bg-white border border-[#dfe1e6] rounded-md">
            New Logo
          </Text>
          <Text className="px-4 py-2 text-sm bg-white border border-[#dfe1e6] rounded-md">
            Redesign & Editing
          </Text>
        </Flex>

        <Stack spacing={8} direction="row">
          <Box minW="20%" bg="white" p={4} className="hidden">
            {/* <Text fontSize={18} color="#ffa800">
              Categories
            </Text> */}
            <Text fontWeight={600}>Price</Text>
            <Text>$100</Text>
            <Text>$100</Text>
            <Text>$100</Text>
            <Text>$100</Text>
          </Box>
          <Flex justify={"space-around"} gap={3} flexWrap={"wrap"}>
            <GigCard />
            <GigCard />
            <GigCard />
            <GigCard />
            <GigCard />
            <GigCard />
            <GigCard />
            <GigCard />
            <GigCard />
            <GigCard />
            <GigCard />
            <GigCard />
          </Flex>
        </Stack>
      </div>
    </main>
  );
};

export default page;
