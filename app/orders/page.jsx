"use client";

import OrderCard from "@/components/OrderCard";
import {
  Box,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";

import React from "react";

const page = () => {
  return (
    <main className="flex flex-col items-center justify-start min-h-screen">
      {/* Banner */}
      <Flex flexDirection="column" className="px-5 py-3 w-full">
        <Heading className="mb- text-3xl font-medium">My Orders</Heading>
      </Flex>
      {/* TabBar */}
      <Tabs className="my-5 w-screen lg:w-[95%]">
        <TabList className="font-semibold text-md">
          <Tab _selected={{ color: "brand.primary" }}>Completed</Tab>
          <Tab _selected={{ color: "brand.primary" }}>Canceled</Tab>
          <Tab _selected={{ color: "brand.primary" }}>All</Tab>
        </TabList>
        <TabPanels>
          {/* Completed */}
          <TabPanel className="px-0 flex w-screen lg:w-full items-center flex-col gap-3 lg:gap-0">
            {/* Table Heading - Only for large displays */}
            <Flex className="hidden lg:flex w-[95%] mx-auto bg-white font-medium shadow-lg border lg:rounded-none rounded-lg shadow-stone-400/40 px-3 py-2 gap-2">
              <Flex className="items-center w-2/6">Article Name</Flex>
              {/* Status */}
              <Flex className="w-1/6 items-center justify-center order-last">
                <Text className="pl-3">Status</Text>
              </Flex>
              {/* Details */}
              <Flex className="items-center justify-evenly lg:w-3/6">
                {/* Buyer */}
                <Box className="items-center w-1/2 lg:px-2">
                  <Text className="pl-4">Buyer</Text>
                </Box>
                {/* Note */}
                <Flex className="w-1/3 items-center justify-center">
                  <Text className="font-medium">Take Note</Text>
                </Flex>
                {/* Price */}
                <Box className="w-1/3 items-center">
                  <Text className="text-center">Price</Text>
                </Box>
              </Flex>
              {/* Review - only visible on smaller displays */}
              <Flex className="w-1/6 items-center justify-center text-center my-1 py-1 mx-auto">
                <Text className="font-medium">Reviews</Text>
              </Flex>
            </Flex>
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
          </TabPanel>
          {/* Canceled */}
          <TabPanel className="px-0 flex w-screen lg:w-full items-center flex-col gap-3 lg:gap-0">
            {/* Table Heading - Only for large displays */}
            <Flex className="hidden lg:flex w-[95%] mx-auto bg-white font-medium shadow-lg border lg:rounded-none rounded-lg shadow-stone-400/40 px-3 py-2 gap-2">
              <Flex className="items-center w-2/6">Article Name</Flex>
              {/* Status */}
              <Flex className="w-1/6 items-center justify-center order-last">
                <Text className="pl-3">Status</Text>
              </Flex>
              {/* Details */}
              <Flex className="items-center justify-evenly lg:w-3/6">
                {/* Buyer */}
                <Box className="items-center w-1/2 lg:px-2">
                  <Text className="pl-4">Buyer</Text>
                </Box>
                {/* Note */}
                <Flex className="w-1/3 items-center justify-center">
                  <Text className="font-medium">Take Note</Text>
                </Flex>
                {/* Price */}
                <Box className="w-1/3 items-center">
                  <Text className="text-center">Price</Text>
                </Box>
              </Flex>
              {/* Review - only visible on smaller displays */}
              <Flex className="w-1/6 items-center justify-center text-center my-1 py-1 mx-auto">
                <Text className="font-medium">Reviews</Text>
              </Flex>
            </Flex>
            <OrderCard />
            <OrderCard />
          </TabPanel>
          {/* All */}
          <TabPanel className="px-0 flex w-screen lg:w-full items-center flex-col gap-3 lg:gap-0">
            {/* Table Heading - Only for large displays */}
            <Flex className="hidden lg:flex w-[95%] mx-auto bg-white font-medium shadow-lg border lg:rounded-none rounded-lg shadow-stone-400/40 px-3 py-2 gap-2">
              <Flex className="items-center w-2/6">Article Name</Flex>
              {/* Status */}
              <Flex className="w-1/6 items-center justify-center order-last">
                <Text className="pl-3">Status</Text>
              </Flex>
              {/* Details */}
              <Flex className="items-center justify-evenly lg:w-3/6">
                {/* Buyer */}
                <Box className="items-center w-1/2 lg:px-2">
                  <Text className="pl-4">Buyer</Text>
                </Box>
                {/* Note */}
                <Flex className="w-1/3 items-center justify-center">
                  <Text className="font-medium">Take Note</Text>
                </Flex>
                {/* Price */}
                <Box className="w-1/3 items-center">
                  <Text className="text-center">Price</Text>
                </Box>
              </Flex>
              {/* Review - only visible on smaller displays */}
              <Flex className="w-1/6 items-center justify-center text-center my-1 py-1 mx-auto">
                <Text className="font-medium">Reviews</Text>
              </Flex>
            </Flex>
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </main>
  );
};
export default page;
