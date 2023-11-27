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
import useAuth from "@/hooks/useAuth";

const page = () => {
  const { me } = useAuth();

  const [selectedTab, setSelectedTab] = useState("all");
  const [gigs, setGigs] = useState([]);
  const [unfilteredGigs, setUnfilteredGigs] = useState([]);
  const [acceptingOrders, setAcceptingOrders] = useState(false);

  const [search, setSearch] = useState("");

  async function handleUpdate(data) {
    try {
      await API.updateMe(data);
      await me();
      setAcceptingOrders(!acceptingOrders);
      toast.success("Updated successfully!");
    } catch (error) {
      toast.error("Could not update status");
      console.log(error);
    }
  }

  const tabs = [
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
        setUnfilteredGigs(res);
      } catch (error) {
        toast.error("Err while fetching gigs");
      }
    })();
  }, [selectedTab]);

  useEffect(() => {
    handleUpdate();
  }, []);

  useEffect(() => {
    if (!search) setGigs(unfilteredGigs);
    else {
      setGigs(unfilteredGigs?.filter((gig) => gig?.title?.toLowerCase()?.includes(search?.toLowerCase())));
    }
  }, [search]);

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
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <Spacer />
            <HStack gap={0}>
              <HStack pr={4} borderRightWidth={"0.5px"}>
                <Text fontWeight={"medium"}>Accepting Orders</Text>
                <Switch
                  colorScheme="yellow"
                  isChecked={acceptingOrders}
                  onChange={(e) =>
                    handleUpdate({ acceptingOrders: e.target.checked })
                  }
                />
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
            onChange={(index) => setSelectedTab(tabs[index]?.value)}
          >
            <TabList>
              {tabs?.map((status, key) => (
                <Tab value={status?.value} key={key}>
                  {status?.name}
                </Tab>
              ))}
            </TabList>

            <TabPanels>
              {tabs?.map((status, key) => (
                <TabPanel key={key}>
                  {gigs?.map((gig, i) => (
                    <MyGigCard
                      key={i}
                      title={gig?.title}
                      banner={gig?.banner}
                      views={gig?.views || "0"}
                      currency={gig?.currency}
                      price={
                        gig?.pricingModel == "plans"
                          ? gig?.startingPrice
                          : gig?.pricingModel == "fixed"
                          ? gig?.fixedPrice
                          : gig?.hourlyPrice
                      }
                      orders={gig?.orders || "0"}
                      earnings={gig?.earnings || "0"}
                    />
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
