"use client";
import React, { useState, useEffect } from "react";
import GigCard from "@/components/GigCard";
import { API } from "@/lib/api";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { toast } from "react-toastify";
import GigFilters from "@/components/GigFilters";
import { useSearchParams } from "next/navigation";

const Gigs = ({ params }) => {
  const { slug } = params;
  const queryParams = useSearchParams();
  const filters = queryParams.entries();

  const [gigs, setGigs] = useState([]);

  const readData = async (query) => {
    try {
      const res = await API.getGigs(slug, query);
      setGigs(res);
    } catch (error) {
      toast.error("Couldn't fetch Gigs");
    }
  };

  useEffect(() => {
    let existingFilters = {};
    for (const [key, value] of filters) {
      existingFilters[key] = value;
    }
    const queryString = new URLSearchParams(existingFilters);
    readData(queryString ? queryString?.toString() : null);
  }, [queryParams]);


  return (
    <>
      <Container maxW={["full", "3xl", "5xl", "7xl"]}>
        <Box p={["4, 8, 16"]} my={8}>
          <Text
            fontSize={["2xl", 26]}
            fontWeight={600}
            textTransform={"capitalize"}
          >
            {slug?.replace(/-/g, " ")}
          </Text>

          <Stack
            w={"full"}
            spacing={8}
            direction={["column", "row"]}
            alignItems={"flex-start"}
          >
            <Box w={["full", "xs"]} pt={6}>
              <GigFilters category={slug} inSearch={true} />
            </Box>
            <Flex w={"full"} justify={"flex-start"} gap={8} flexWrap={"wrap"}>
              {gigs?.length ? (
                gigs?.map((gig, key) => <GigCard key={key} gig={gig} />)
              ) : (
                <Box
                  mt={6}
                  p={4}
                  rounded={4}
                  w={"full"}
                  bgColor={"#fff"}
                  boxShadow={"base"}
                >
                  <Text fontSize={"xs"} textAlign={"center"}>
                    We could not find any Gigs with your applied filters. Please
                    consider changing or removing your filters.
                  </Text>
                </Box>
              )}
            </Flex>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default Gigs;
