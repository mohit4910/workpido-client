"use client";
import {
  Box,
  Button,
  Checkbox,
  Container,
  HStack,
  Hide,
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
    { name: "Review", value: "processing" },
    { name: "Rejected", value: "rejected" },
  ];

  useEffect(() => {
    fetchData();
  }, [selectedTab]);

  useEffect(() => {
    handleUpdate();
  }, []);

  useEffect(() => {
    if (!search) setGigs(unfilteredGigs);
    else {
      setGigs(
        unfilteredGigs?.filter((gig) =>
          gig?.title?.toLowerCase()?.includes(search?.toLowerCase())
        )
      );
    }
  }, [search]);

  async function fetchData() {
    try {
      const res = await API.myGigs(selectedTab);
      setGigs(res);
      setUnfilteredGigs(res);
    } catch (error) {
      toast.error("Err while fetching gigs");
    }
  }

  return (
    <>
      <Box w={["full"]} p={[4, 8]} bgColor={"#f6f6f6"}>
        <Container maxW={["full", "3xl", "5xl", "6xl"]}>
          <HStack w={"full"} justifyContent={"space-between"} py={4}>
            <Text fontSize={["2xl", "3xl"]} fontWeight={"medium"} mb={2}>
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
            mb={4}
            w={"full"}
          >
            <Input
              w={["full", "xs"]}
              bgColor={"#FFF"}
              rounded={"full"}
              placeholder="Search gig"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Spacer />
            <Stack
              w={"full"}
              direction={["row", "row"]}
              alignItems={["center", "flex-end"]}
              gap={[4, 0]}
              pt={[2, 0]}
            >
              <HStack
                w={"full"}
                pr={[0, 4]}
                borderRightWidth={"0.5px"}
                justifyContent={["flex-start", "flex-end"]}
                flex={6}
              >
                <Text fontSize={["xs", "sm"]} fontWeight={"medium"}>
                  Accepting Orders
                </Text>
                <Switch
                  size={["sm", "md"]}
                  colorScheme="yellow"
                  isChecked={acceptingOrders}
                  onChange={(e) =>
                    handleUpdate({ acceptingOrders: e.target.checked })
                  }
                />
              </HStack>
              <HStack
                pl={[0, 4]}
                borderLeftWidth={"0.5px"}
                justifyContent={["flex-end", "flex-start"]}
              >
                <Checkbox bgColor={"#FFF"} />
                <Text fontWeight={"medium"} fontSize={["xs", "sm"]}>
                  Weekends Off
                </Text>
              </HStack>
            </Stack>
          </Stack>
          <br />

          <Tabs
            colorScheme="yellow"
            onChange={(index) => setSelectedTab(tabs[index]?.value)}
          >
            <TabList>
              {tabs?.map((status, key) => (
                <Tab
                  value={status?.value}
                  key={key}
                  fontWeight={"medium"}
                  fontSize={["sm", "md"]}
                >
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
                      id={gig?.id}
                      title={gig?.title}
                      banner={gig?.banner}
                      views={gig?.viewsCount || "0"}
                      currency={gig?.currency}
                      price={gig?.minPrice}
                      orders={gig?.orders || "0"}
                      earnings={gig?.earnings || "0"}
                      isActive={gig?.isActive}
                      onUpdate={() => fetchData()}
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
