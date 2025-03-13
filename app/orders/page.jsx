"use client";

import OrderCard from "@/components/OrderCard";
import { API } from "@/lib/api";
import {
  Box,
  Container,
  Flex,
  Heading,
  Hide,
  Input,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Cookies from "js-cookie";

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const page = ({ params }) => {
  const { type } = params;
  console.log(type, "fkalskfdjalsjd");
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedTab, setSelectedTab] = useState("all");
  const currentRole = Cookies.get("currentRole");
  const [filterByCatogeries, setFilterByCatogeries] = useState([]);

  async function fetchOrders() {
    try {
      const res = await API.myOrders(selectedTab);
      const user = JSON.parse(window.localStorage.getItem("user"));
      if(currentRole === 'seller'){
       const data = res.filter((item) => item.gig.seller?.id === user?.id)
       setOrders(data);
       setFilteredOrders(data );
      } else {
        const data = res.filter((item) => item.buyer?.id === user?.id)
        setOrders(data);
        setFilteredOrders(data);
      }
    } catch (error) {
      toast.error("Err while fetching orders");
      console.log(error);
    }
  }

  const data = orders.filter((item) => item.order_type === "buyer");

  const tabs = [
    { name: "All", value: "all" },
    { name: "Active", value: "ongoing" },
    { name: "Completed", value: "finished" },
    { name: "Cancelled", value: "cancelled" },
  ];

  useEffect(() => {
    fetchOrders(selectedTab);
  }, [selectedTab]);

  useEffect(() => {
    if (!search) setFilteredOrders(orders);
    else {
      setFilteredOrders(
        orders?.filter(
          (order) =>
            order?.gig?.title?.toLowerCase().includes(search) ||
            order?.buyer?.username?.toLowerCase().includes(search)
        )
      );
    }
  }, [search]);

  return (
    <>
      <Box px={[4, 8, 16]} py={8}>
        <Container maxW={["full", "3xl", "5xl", "7xl"]}>
          <Stack
            direction={["column", "row"]}
            gap={6}
            justifyContent={"space-between"}
          >
            <Heading className="text-3xl font-medium">My Orders</Heading>
            <Input
              w={["full", "xs"]}
              bgColor={"#FFF"}
              rounded={"full"}
              placeholder="Search Order"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Stack>
          <br />

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
                  fontWeight={"medium"}
                >
                  {tab?.name}
                </Tab>
              ))}
            </TabList>
            <TabPanels>
              {/* Completed */}
              {tabs?.map((tab, key) => (
                <TabPanel
                  key={key}
                  className="px-0 flex w-screen md:w-full items-center flex-col gap-3 lg:gap-0"
                >
                  {/* Table Heading - Only for large displays */}
                  <Hide below="md">
                    <Flex
                      w={"full"}
                      className="mx-auto bg-white font-medium lg:rounded-none rounded-lg py-2 gap-2"
                    >
                      <Flex className="items-center w-2/6 pl-3">
                        Article Name
                      </Flex>
                      {/* Status */}
                      <Flex className="w-full lg:w-1/6 items-center justify-center lg:order-last">
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
                  </Hide>
                  {data?.map((order, index) => (
                    <OrderCard key={index} order={order} />
                  ))}
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </Container>
      </Box>
    </>
  );
};
export default page;
