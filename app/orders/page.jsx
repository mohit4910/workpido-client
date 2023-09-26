"use client";

import OrderCard from "@/components/OrderCard";
import {
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

import React from "react";
import { GiCheckMark } from "react-icons/gi";

const page = () => {
  return (
    <main className="flex flex-col items-center justify-evenly min-h-screen">
      {/* Banner */}
      <Flex flexDirection="column" className="px-5 py-3 w-full">
        <Heading className="mb-3 text-white text-3xl font-medium">
          My Orders
        </Heading>
      </Flex>
      {/* TabBar */}
      <Tabs className="my-5 w-screen lg:w-3/4">
        <TabList>
          <Tab _selected={{ color: "brand.primary" }}>Completed</Tab>
          <Tab _selected={{ color: "brand.primary" }}>Canceled</Tab>
          <Tab _selected={{ color: "brand.primary" }}>All</Tab>
        </TabList>
        <TabPanels>
          {/* Completed */}
          <TabPanel className="px-0 flex w-screen lg:w-3/4 items-center flex-col gap-3">
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
          </TabPanel>
          {/* Canceled */}
          <TabPanel>
            <OrderCard />
            <OrderCard />
          </TabPanel>
          {/* All */}
          <TabPanel>
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
