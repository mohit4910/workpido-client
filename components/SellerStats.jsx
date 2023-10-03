import {
  Avatar,
  Flex,
  FormControl,
  FormLabel,
  Progress,
  Stack,
  Switch,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsStarFill } from "react-icons/bs";

const SellerStats = () => {
  return (
    <Flex className="items-center flex-col gap-3 justify-center">
      <Stack direction={"column"} spacing={2} align={"center"}>
        <Avatar
          size={"2xl"}
          src={"https://avatars0.githubusercontent.com/u/1164541?v=4"}
        />
        <Text fontSize={"md"} className="font-semibold">
          geekguyadarsh
        </Text>
        <Text fontSize={"md"}>Adarsh P.</Text>
      </Stack>
      <Flex align={"center"} className="gap-2">
        <Text fontSize="md">Seller</Text>
        <BsStarFill className="text-yellow-500 font-semibold" />
        <Text fontSize="md" className="font-semibold">
          3.4
        </Text>
        <Text className="text-sm text-neutral-600">{`(2)`}</Text>
      </Flex>
      {/* Toggle Bar */}
      <FormControl
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        borderBottom={"1px solid black"}
        paddingY={"20px"}
      >
        <FormLabel htmlFor="email-alerts" mb="0">
          Accepting Orders
        </FormLabel>
        <Switch id="email-alerts" colorScheme="green" defaultChecked />
      </FormControl>

      {/* Stats */}
      <Flex className="w-full justify-between items-center">
        <Text>Reliablity</Text>
        <Stack direction={"row"} spacing={2} align={"center"}>
          <Progress
            value={100}
            colorScheme={"green"}
            width={"120px"}
            className="rounded-full h-2"
          />
          <Text>100%</Text>
        </Stack>
      </Flex>
      <Flex className="w-full justify-between items-center">
        <Text>Punctuality</Text>
        <Stack direction={"row"} spacing={2} align={"center"}>
          <Progress
            value={100}
            colorScheme={"green"}
            width={"120px"}
            className="rounded-full h-2"
          />
          <Text>100%</Text>
        </Stack>
      </Flex>
      <Flex className="w-full justify-between items-center">
        <Text>Response Time</Text>
        <Stack direction={"row"} spacing={2} align={"center"}>
          <Progress
            value={100}
            colorScheme={"green"}
            width={"120px"}
            className="rounded-full h-2"
          />
          <Text>100%</Text>
        </Stack>
      </Flex>
      <Flex className="w-full justify-between items-center">
        <Text>Response Rate</Text>
        <Stack direction={"row"} spacing={2} align={"center"}>
          <Progress
            value={100}
            colorScheme={"green"}
            width={"120px"}
            className="rounded-full h-2"
          />
          <Text>100%</Text>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default SellerStats;
