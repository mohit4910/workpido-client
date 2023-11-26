"use client";
import {
  Box,
  Button,
  Checkbox,
  Container,
  HStack,
  Input,
  Spacer,
  Stack,
  Switch,
  Text,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import MyGigCard from "@/components/MyGigCard";
import { API } from "@/lib/api";
import { toast } from "react-toastify";

const page = () => {
  const [selectedTab, setSelectedTab] = useState("all");
  const [gigs, setGigs] = useState([]);

  const statuses = [
    { name: "All", value: "all" },
    { name: "Active", value: "active" },
    { name: "In Review", value: "processing" },
    { name: "Rejected", value: "rejected" },
  ];

  useEffect(() => {
    (async () => {
      try {
        const res = await API.myGigs(selectedTab);
        setGigs(res);
      } catch (error) {
        toast.error("Err while fetching gigs");
      }
    })();
  }, [selectedTab]);

  return (
    <>
      <Box w={["full"]} p={[4, 8]} bgColor={"#f6f6f6"}>
        <Container maxW={["full", "3xl", "5xl", "6xl"]}>
          <HStack w={"full"} justifyContent={"space-between"} py={4}>
            <Text fontSize={["2xl", "3xl"]} fontWeight={"medium"}>
              My Gigs
            </Text>
            <Button
              colorScheme="yellow"
              bgColor={"brand.primary"}
              fontSize={"sm"}
              color={"#FFF"}
              as={"a"}
              href="/seller-dashboard/create-gig"
            >
              Create Gig
            </Button>
          </HStack>
          <Stack
            direction={["column", "row"]}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Input
              w={["full", "xs"]}
              bgColor={"#FFF"}
              rounded={"full"}
              placeholder="Search gig"
            />
            <Spacer />
            <HStack gap={0}>
              <HStack pr={4} borderRightWidth={"0.5px"}>
                <Text fontWeight={"medium"}>Accepting Orders</Text>
                <Switch colorScheme="yellow" />
              </HStack>
              <HStack pl={4} borderLeftWidth={"0.5px"}>
                <Checkbox bgColor={"#FFF"} />
                <Text fontWeight={"medium"}>Weekends Off</Text>
              </HStack>
            </HStack>
          </Stack>
          <br />

          <Tabs
            colorScheme="yellow"
            onChange={(index) => setSelectedTab(statuses[index]?.value)}
          >
            <TabList>
              {statuses?.map((status, key) => (
                <Tab value={status?.value} key={key}>
                  {status?.name}
                </Tab>
              ))}
            </TabList>

            <TabPanels>
              {statuses?.map((status, key) => (
                <TabPanel key={key}>
                  {gigs?.map((gig, i) => (
                    <MyGigCard key={i} title={gig?.title} />
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
