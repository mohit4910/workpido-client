"use client";

import GigCard from "@/components/GigCard";
import { API } from "@/lib/api";
import { Box, Flex, Grid, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { ArrowDown2 } from "iconsax-react";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

const page = ({ params }) => {
  const { slug } = params;
  const [gigs, setGigs] = useState([]);
  const readData = async () => {
    try {
      const res = await API.getGigs(`?category=${slug}`);
      setGigs(res);
    } catch (error) {
      toast.error("Couldn't fetch Gigs");
    }
  };

  useEffect(() => {
    readData();
  }, []);

  return (
    <main className="flex flex-col min-h-screen p-4 mb-10 bg-[#f6f6f6] lg:container lg:mx-auto">
      <div className="mb-8">
        <Text fontSize={26} fontWeight={600} textTransform={'capitalize'}>
          {slug?.replace(/-/g, " ")}
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
            {gigs?.map((gig, key) => (
              <GigCard key={key} />
            ))}
          </Flex>
        </Stack>
      </div>
    </main>
  );
};

export default page;
