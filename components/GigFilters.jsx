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
  const options = [
    {
      title: "Seller Level",
      filters: [
        {
          label: "Rising Talent or Higher",
        },
        {
          label: "Top Rated or Higher",
        },
        {
          label: "Top Rated Plus",
        },
      ],
    },
    {
      title: "Seller Activity",
      filters: [
        {
          label: "Online",
        },
        {
          label: "Online at most 1 day ago",
        },
        {
          label: "Online at most 3 days ago",
        },
        {
          label: "Online at most 1 week ago",
        },
        {
          label: "Online at most 2 weeks ago",
        },
      ],
    },
    {
      title: "Positive Reviews",
      filters: [
        {
          label: "1 or more",
        },
        {
          label: "5 or more",
        },
        {
          label: "20 or more",
        },
        {
          label: "100 or more",
        },
      ],
    },
    {
      title: "Delivery Time",
      filters: [
        {
          label: "Within 24 hours",
        },
        {
          label: "Within 2 days",
        },
        {
          label: "Within 3 days",
        },
        {
          label: "Within 5 days",
        },
        {
          label: "Within 10 days",
        },
      ],
    },
    {
      title: "Orders in Progress",
      filters: [
        {
          label: "None",
        },
        {
          label: "Upto 1",
        },
        {
          label: "Upto 3",
        },
        {
          label: "Upto 5",
        },
        {
          label: "Upto 8",
        },
      ],
    },
    {
      title: "My View History",
      filters: [
        {
          label: "Viewed",
        },
        {
          label: "Not Viewed",
        },
      ],
    },
    {
      title: "My Order History",
      filters: [
        {
          label: "Ordered",
        },
        {
          label: "Not Ordered",
        },
      ],
    },
  ];

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
            <Input size={"xs"} placeholder="$ Min." />
            <Input size={"xs"} placeholder="$ Max." />
          </HStack>
        </Box>
        {options.map((item, key) => (
          <Box w={"full"} key={key}>
            <Text
              fontSize={"xs"}
              fontWeight={"semibold"}
              textTransform={"capitalize"}
            >
              {item?.title}
            </Text>
            {item?.filters?.map((filter, i) => (
              <Text
                fontSize={"xs"}
                _hover={{ color: "brand.primary" }}
                cursor={"pointer"}
                textTransform={"capitalize"}
                key={i}
              >
                {filter?.label}
              </Text>
            ))}
          </Box>
        ))}
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
