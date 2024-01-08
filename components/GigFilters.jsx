"use client";
import { Box, HStack, Hide, Input, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";

const Filters = ({ category, inSearch }) => {
  const query = useSearchParams();
  const { push, replace } = useRouter();
  const filters = query.entries();

  const [urlFilters, setUrlFilters] = useState({});
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const options = [
    {
      title: "Seller Level",
      key: "sellerLevel",
      filters: [
        {
          label: "Rising Talent or Higher",
          value: "",
        },
        {
          label: "Top Rated or Higher",
          value: "",
        },
        {
          label: "Top Rated Plus",
          value: "",
        },
      ],
    },
    {
      title: "Seller Activity",
      key: "sellerActivity",
      filters: [
        {
          label: "Online",
          value: "online",
        },
        {
          label: "Online at most 1 day ago",
          value: "1",
        },
        {
          label: "Online at most 3 days ago",
          value: "3",
        },
        {
          label: "Online at most 1 week ago",
          value: "7",
        },
        {
          label: "Online at most 2 weeks ago",
          value: "14",
        },
      ],
    },
    {
      title: "Positive Reviews",
      key: "positiveReviews",
      filters: [
        {
          label: "1 or more",
          value: "1",
        },
        {
          label: "5 or more",
          value: "5",
        },
        {
          label: "20 or more",
          value: "20",
        },
        {
          label: "100 or more",
          value: "100",
        },
      ],
    },
    {
      title: "Delivery Time",
      key: "maxDeliveryDays",
      filters: [
        {
          label: "Within 24 hours",
          value: "1",
        },
        {
          label: "Within 2 days",
          value: "2",
        },
        {
          label: "Within 3 days",
          value: "3",
        },
        {
          label: "Within 5 days",
          value: "5",
        },
        {
          label: "Within 10 days",
          value: "10",
        },
      ],
    },
    {
      title: "Orders in Progress",
      key: "ordersInProgress",
      filters: [
        {
          label: "None",
          value: "",
        },
        {
          label: "Upto 1",
          value: "1",
        },
        {
          label: "Upto 3",
          value: "3",
        },
        {
          label: "Upto 5",
          value: "5",
        },
        {
          label: "Upto 8",
          value: "8",
        },
      ],
    },
    {
      title: "My View History",
      key: "viewed",
      filters: [
        {
          label: "Viewed",
          value: "true",
        },
        {
          label: "Not Viewed",
          value: "false",
        },
      ],
    },
    {
      title: "My Order History",
      key: "ordered",
      filters: [
        {
          label: "Ordered",
          value: "true",
        },
        {
          label: "Not Ordered",
          value: "false",
        },
      ],
    },
  ];

  useEffect(() => {
    let existingFilters = {};
    for (const [key, value] of filters) {
      existingFilters[key] = value;
    }
    setUrlFilters(existingFilters);
  }, []);

  useEffect(() => {
    if (urlFilters?.minPrice) setMinPrice(urlFilters?.minPrice);
    if (urlFilters?.maxPrice) setMaxPrice(urlFilters?.maxPrice);

    const queryParams = new URLSearchParams(urlFilters);
    push(
      `${
        inSearch ? `/search` : `/gigs/${category}`
      }?${queryParams?.toString()}`
    );

    console.log("URL Filters Changed");
    console.log(queryParams.toString());
  }, [urlFilters]);

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
            onClick={() => {
              setUrlFilters((prev) => ({
                ...prev,
                minPrice: 10,
                maxPrice: 50,
              }));
            }}
            fontWeight={
              urlFilters?.minPrice == 10 && urlFilters?.maxPrice == 50
                ? "semibold"
                : "normal"
            }
          >
            $10-50
          </Text>
          <Text
            fontSize={"xs"}
            _hover={{ color: "brand.primary" }}
            cursor={"pointer"}
            fontWeight={
              urlFilters?.minPrice == 50 && urlFilters?.maxPrice == 300
                ? "semibold"
                : "normal"
            }
            onClick={() => {
              setUrlFilters((prev) => ({
                ...prev,
                minPrice: 50,
                maxPrice: 300,
              }));
            }}
          >
            $50-300
          </Text>
          <HStack w={"full"}>
            <Input
              size={"xs"}
              placeholder="$ Min."
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              onBlur={() =>
                setUrlFilters((prev) => ({ ...prev, minPrice: minPrice }))
              }
            />
            <Input
              size={"xs"}
              placeholder="$ Max."
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              onBlur={() =>
                setUrlFilters((prev) => ({ ...prev, maxPrice: maxPrice }))
              }
            />
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
                fontWeight={
                  urlFilters[item?.key] == filter?.value ? "semibold" : "normal"
                }
                key={i}
                onClick={() => {
                  let existingFilters = urlFilters;
                  existingFilters[item?.key] = filter?.value;
                  setUrlFilters((prev) => ({
                    ...prev,
                    ...existingFilters,
                  }));
                }}
              >
                {filter?.label}
              </Text>
            ))}
          </Box>
        ))}
        <Text
          fontWeight={"medium"}
          color={"twitter.500"}
          fontSize={"sm"}
          onClick={() => setUrlFilters({})}
        >
          Remove Filters
        </Text>
      </VStack>
    </>
  );
};

const GigFilters = ({ category, inSearch = false }) => {
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
              <Filters category={category} inSearch={inSearch} />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Hide>
      <Hide below="md">
        <Box w={"full"} p={"4"} bgColor={"#FFF"} rounded={4} boxShadow={"base"}>
          <Filters category={category} inSearch={inSearch} />
        </Box>
      </Hide>
    </>
  );
};

export default GigFilters;
