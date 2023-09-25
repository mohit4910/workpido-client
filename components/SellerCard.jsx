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

import React from "react";
import { BsStarFill } from "react-icons/bs";
import ContactSeller from "./ContactSeller";

const SellerCard = () => {
  return (
    <Card>
      <CardHeader>
        <Link href={"/profile"}>
          <Stack my={4} direction={"row"} spacing={2} align={"center"}>
            <Avatar
              size={"lg"}
              src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
            />
            <Stack direction={"column"} spacing={0} fontSize={"lg"}>
              <Text fontSize={"md"}>geekguyadarsh</Text>
              <Text fontSize={"md"}>Adarsh P.</Text>
            </Stack>
          </Stack>
        </Link>
        <Box className="pr-6 pl-1">
          <ContactSeller />
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
