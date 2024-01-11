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
import { BsStarFill } from "react-icons/bs";
import ContactSeller from "./ContactSeller";
import useApiHandler from "@/hooks/useApiHandler";
import useAuth from "@/hooks/useAuth";

const SellerCard = ({ user, showAvatar = true, height }) => {
  const [avatarUrl, setAvatarUrl] = useState("");
  const { getAvatar } = useAuth();

  useEffect(() => {
    const url = getAvatar(user?.seller?.avatar?.url);
    setAvatarUrl(url);
  }, [user]);

  return (
    <Card h={height ?? 'full'}>
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
          <ContactSeller username={user?.username} />
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
              6
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
              0
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
