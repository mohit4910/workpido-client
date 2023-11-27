"use client";
import { Box, HStack, Hide, Input, Text, VStack } from "@chakra-ui/react";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const Filters = () => {
  return (
    <>
      <VStack
        w={"full"}
        alignItems={"flex-start"}
        justifyContent={"flex-start"}
        gap={4}
      >
        <Box w={"full"}>
          <Text fontSize={"xs"} fontWeight={"semibold"}>
            Price
          </Text>
          <Text
            fontSize={"xs"}
            _hover={{ color: "brand.primary" }}
            cursor={"pointer"}
          >
            $10-50
          </Text>
          <Text
            fontSize={"xs"}
            _hover={{ color: "brand.primary" }}
            cursor={"pointer"}
          >
            $50-300
          </Text>
          <HStack w={"full"}>
            <Input size={"xs"} placeholder="From" />
            <Input size={"xs"} placeholder="To" />
          </HStack>
        </Box>

        <Box w={"full"}>
          <Text fontSize={"xs"} fontWeight={"semibold"}>
            Seller Level
          </Text>
          <Text
            fontSize={"xs"}
            _hover={{ color: "brand.primary" }}
            cursor={"pointer"}
          >
            Rising Talent or Higher
          </Text>
          <Text
            fontSize={"xs"}
            _hover={{ color: "brand.primary" }}
            cursor={"pointer"}
          >
            Top Rated or Higher
          </Text>
          <Text
            fontSize={"xs"}
            _hover={{ color: "brand.primary" }}
            cursor={"pointer"}
          >
            Top Rated Plus
          </Text>
        </Box>

        <Box w={"full"}>
          <Text fontSize={"xs"} fontWeight={"semibold"}>
            Seller Activity
          </Text>
          <Text
            fontSize={"xs"}
            _hover={{ color: "brand.primary" }}
            cursor={"pointer"}
          >
            Online
          </Text>
          <Text
            fontSize={"xs"}
            _hover={{ color: "brand.primary" }}
            cursor={"pointer"}
          >
            Online at most 1 day ago
          </Text>
          <Text
            fontSize={"xs"}
            _hover={{ color: "brand.primary" }}
            cursor={"pointer"}
          >
            Online at most 3 days ago
          </Text>
          <Text
            fontSize={"xs"}
            _hover={{ color: "brand.primary" }}
            cursor={"pointer"}
          >
            Online at most 1 week ago
          </Text>
          <Text
            fontSize={"xs"}
            _hover={{ color: "brand.primary" }}
            cursor={"pointer"}
          >
            Online at most 2 weeks ago
          </Text>
        </Box>
      </VStack>
    </>
  );
};

const GigFilters = () => {
  return (
    <>
      <Hide above="md">
        <Accordion>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left">
                  Filters
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel p={4}>
              <Filters />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Hide>
      <Hide below="md">
        <Box w={"full"} p={"4"} bgColor={"#FFF"} rounded={4} boxShadow={"base"}>
          <Filters />
        </Box>
      </Hide>
    </>
  );
};

export default GigFilters;
