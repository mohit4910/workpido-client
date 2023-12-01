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

const Gigs = ({ params }) => {
  const { slug } = params;
  const [gigs, setGigs] = useState([]);
  const [services, setServices] = useState([]);

  const readData = async () => {
    try {
      const res = await API.getGigs(slug);
      setGigs(res);
    } catch (error) {
      toast.error("Couldn't fetch Gigs");
    }
  };

  const getServices = async () => {
    try {
      const res = await API.getSubcategoryServices(
        slug?.replace(/-/g, " ")?.toLowerCase()
      );
      setServices(res);
    } catch (error) {
      console.log("There was an error fetching services");
      console.log(error);
    }
  };

  useEffect(() => {
    readData();
  }, []);

  useEffect(() => {
    getServices();
  }, []);

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
          <Flex
            w={"full"}
            mt={3}
            gap={4}
            direction={"row"}
            overflowX={"scroll"}
          >
            {services?.map((item, key) => (
              <Button
                key={key}
                bgColor={"#FFF"}
                border={"1px"}
                borderColor={"#e2e2e2"}
                fontWeight={"normal"}
                fontSize={["xs", "sm"]}
                py={1}
                textTransform={"capitalize"}
                size={["sm", "md"]}
              >
                {item?.title}
              </Button>
            ))}
          </Flex>

          <Stack
            w={"full"}
            spacing={8}
            direction={["column", "row"]}
            alignItems={"flex-start"}
          >
            <Box w={["full", "xs"]} pt={6}>
              <GigFilters />
            </Box>
            <Flex w={"full"} justify={"flex-start"} gap={8} flexWrap={"wrap"}>
              {gigs?.map((gig, key) => (
                <GigCard key={key} gig={gig} />
              ))}
            </Flex>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default Gigs;
