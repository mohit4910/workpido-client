"use client";

import OrderCard from "@/components/OrderCard";
import { API } from "@/lib/api";
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

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const page = () => {
  const [orders, setOrders] = useState([]);
  const [selectedTab, setSelectedTab] = useState("all");

  async function fetchOrders() {
    try {
      const res = await API.myOrders(selectedTab);
      setOrders(res);
    } catch (error) {
      toast.error("Err while fetching orders");
      console.log(error);
    }
  }

  const tabs = [
    { name: "All", value: "all" },
    { name: "Ongoing", value: "ongoing" },
    { name: "Pending Requirements", value: "pending requirements" },
    { name: "Requirements Submitted", value: "requirements submitted" },
    { name: "Finished", value: "finished" },
    { name: "Cancelled", value: "cancelled" },
  ];

  useEffect(() => {
    fetchOrders(selectedTab);
  }, [selectedTab]);

  return (
    <main className="flex flex-col items-center justify-start min-h-screen">
      {/* Banner */}
      <Flex flexDirection="column" className="px-5 py-3 w-[95%]  lg:container">
        <Heading className="text-3xl font-medium">My Orders</Heading>
      </Flex>
      {/* TabBar */}
      <Tabs
        className="my-5 w-screen md:w-[95%] lg:w-[95%]  lg:container"
        onChange={(index) => setSelectedTab(tabs[index]?.value)}
      >
        <TabList
          borderBottom={"5px solid transparent"}
          className="font-semibold text-md"
        >
          {tabs?.map((tab, key) => (
            <Tab
              key={key}
              _selected={{
                color: "brand.primary",
                borderBottomColor: "brand.primary",
              }}
            >
              {tab?.name}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {/* Completed */}
          {tabs?.map((tab, key) => (
            <TabPanel className="px-0 flex w-screen md:w-full items-center flex-col gap-3 lg:gap-0">
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
              {orders?.map((order, index) => (
                <OrderCard key={index} order={order} />
              ))}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </main>
  );
};
export default page;
