import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

import React from "react";

const SellerCard = () => {
  return (
    <Card>
      <CardHeader>
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
        <Button
          className="my-2 ml-1 mr-2 w-full px-4 py-2 text-base"
          as={"a"}
          display={"inline-flex"}
          color={"white"}
          bg={"brand.primary"}
          href={"#"}
          _hover={{
            bg: "green.300",
          }}
        >
          Contact Seller
        </Button>
      </CardHeader>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box className="text-black">
            <Heading size="sm" textTransform="uppercase" className="text-black">
              {`Seller's Rating`}
            </Heading>
            <Text pt="2" fontSize="sm">
              3.4
            </Text>
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
