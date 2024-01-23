import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

import React, { useEffect, useState } from "react";
import { BsGearFill, BsStarFill } from "react-icons/bs";
import ContactSeller from "./ContactSeller";
import useApiHandler from "@/hooks/useApiHandler";
import useAuth from "@/hooks/useAuth";
import { API } from "@/lib/api";

const SellerCard = ({ user, showAvatar = true, height, showSettings }) => {
  const { getAvatar } = useAuth();

  const [avatarUrl, setAvatarUrl] = useState("");
  const [overview, setOverview] = useState(null);

  useEffect(() => {
    const url = getAvatar(user?.seller?.avatar?.url);
    setAvatarUrl(url);
    if (user?.id) {
      fetchOverview();
    }
  }, [user]);

  async function fetchOverview() {
    try {
      const res = await API.overview(user?.id);
      setOverview(res);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Card h={height ?? "full"}>
      <CardHeader>
        <Link href={"/profile"}>
          <Stack my={4} direction={"row"} spacing={2} align={"center"}>
            {showAvatar ? <Avatar size={"lg"} src={avatarUrl} /> : null}
            <Stack direction={"column"} spacing={0} fontSize={"lg"}>
              <Text fontSize={"md"}>{user?.username}</Text>
              <Text fontSize={"md"}>{user?.displayName}</Text>
            </Stack>
          </Stack>
        </Link>
        <Box className="pr-6 pl-1">
          {showSettings ? (
            <Button
              className="mx-2 w-full px-4 py-8 text-base flex flex-row"
              as={"a"}
              color={"white"}
              bg={"brand.primary"}
              href={"/edit-profile"}
              _hover={{
                bg: "green.300",
              }}
              leftIcon={<BsGearFill />}
            >
              Account Settings
            </Button>
          ) : (
            <ContactSeller username={user?.username} />
          )}
        </Box>
      </CardHeader>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box className="text-black">
            <Heading size="sm" textTransform="uppercase" className="text-black">
              {`Seller's Rating`}
            </Heading>
            <Flex align={"center"} className="pt-2 gap-1">
              <BsStarFill className="text-yellow-500 font-semibold" />
              <Text fontSize="md" className="text-yellow-500 font-semibold">
                3.4
              </Text>
            </Flex>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Completed Orders
            </Heading>
            <Text pt="2" fontSize="sm">
              {overview?.finishedOrders}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Total Reviews
            </Heading>
            <Text pt="2" fontSize="sm">
              2
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Order in progress
            </Heading>
            <Text pt="2" fontSize="sm">
              {overview?.activeOrders}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              India
            </Heading>
            <Text pt="2" fontSize="sm">
              Joined September 2023
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default SellerCard;
