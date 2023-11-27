"use client";
import React, { useState, useEffect } from "react";
import GigCard from "@/components/GigCard";
import { API } from "@/lib/api";
import { Box, Flex, Grid, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { toast } from "react-toastify";
import GigFilters from "@/components/GigFilters";

const Gigs = ({ params }) => {
  const { slug } = params;
  const [gigs, setGigs] = useState([]);

  const readData = async () => {
    try {
      const res = await API.getGigs(slug);
      setGigs(res);
    } catch (error) {
      toast.error("Couldn't fetch Gigs");
    }
  };

  useEffect(() => {
    readData();
  }, []);

  return (
    <>
      <Stack
        w={"full"}
        minH={"100vh"}
        w={"full"}
        p={[4, 8, 12]}
        bg={"#F6F6F6"}
        direction={["column", "row"]}
        alignItems={"flex-start"}
        justifyContent={"flex-start"}
        gap={8}
      >
        <Box w={["full", "64"]} pt={2}>
          <GigFilters />
        </Box>
        <Box>
          <div className="mb-8">
            <Text fontSize={26} fontWeight={600} textTransform={"capitalize"}>
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
              <Flex w={"full"} justify={"flex-start"} gap={8} flexWrap={"wrap"}>
                {gigs?.map((gig, key) => (
                  <GigCard key={key} gig={gig} />
                ))}
              </Flex>
            </Stack>
          </div>
        </Box>
      </Stack>
    </>
  );
};

export default Gigs;
