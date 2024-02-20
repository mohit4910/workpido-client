import useAuth from "@/hooks/useAuth";
import { API } from "@/lib/api";
import {
  Avatar,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Progress,
  Stack,
  Switch,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { toast } from "react-toastify";

const SellerStats = ({ seller }) => {
  const { avatarUrl, me } = useAuth();
  const [acceptingOrders, setAcceptingOrders] = useState(false);

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

  useEffect(() => {
    setAcceptingOrders(seller?.acceptingOrders);
  }, [seller]);

  return (
    <Flex className="flex-col items-center justify-center gap-23">
      <Stack direction={"column"} spacing={2} align={"center"}>
        <Avatar size={"2xl"} src={avatarUrl} />
        <Text
          fontSize={"md"}
          className="font-medium"
          textTransform={"uppercase"}
          mb={0}
        >
          {seller?.username}
        </Text>
        {/* <Text fontSize={"sm"}>{seller?.displayName}</Text> */}
      </Stack>
      <Flex align={"center"} className="gap-2">
        <Text fontSize="xs" className="text-neutral-600">
          Seller
        </Text>
        <HStack gap={1}>
          <BsStarFill
            className="font-semibold text-yellow-500"
            fontSize={"12"}
          />
          <Text fontSize="xs" className="font-semibold">
            3.4
          </Text>
          <Text className="text-neutral-600" fontSize={"xs"}>{`(2)`}</Text>
        </HStack>
      </Flex>

      {/* Toggle Bar */}
      <FormControl
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        borderBottom={"1px solid #DADADA"}
        pt={"20px"}
        pb={'2'}
        mb={4}
      >
        <FormLabel htmlFor="email-alerts" fontSize={'sm'}>
          Accepting Orders
        </FormLabel>
        <Switch
          id="email-alerts"
          colorScheme="yellow"
          isChecked={acceptingOrders}
          onChange={(e) => handleUpdate({ acceptingOrders: e.target.checked })}
        />
      </FormControl>

      {/* Stats */}

      <Flex className="items-center justify-between w-full" mb={2}>
        <Text>Reliablity</Text>
        <Stack direction={"row"} spacing={2} align={"center"}>
          <Progress
            value={100}
            colorScheme={"yellow"}
            bgColor={"brand.primary"}
            width={"80px"}
            className="h-2 rounded-full"
          />
          <Text fontWeight={'medium'}>100%</Text>
        </Stack>
      </Flex>

      <Flex className="items-center justify-between w-full" mb={2}>
        <Text>Punctuality</Text>
        <Stack direction={"row"} spacing={2} align={"center"}>
          <Progress
            value={100}
            colorScheme={"yellow"}
            bgColor={"brand.primary"}
            width={"80px"}
            className="h-2 rounded-full"
          />
          <Text fontWeight={'medium'}>100%</Text>
        </Stack>
      </Flex>

      <Flex className="items-center justify-between w-full" mb={2}>
        <Text>Response Time</Text>
        <Stack direction={"row"} spacing={2} align={"center"}>
          <Progress
            value={100}
            colorScheme={"yellow"}
            bgColor={"brand.primary"}
            width={"80px"}
            className="h-2 rounded-full"
          />
          <Text fontWeight={'medium'}>100%</Text>
        </Stack>
      </Flex>

      <Flex className="items-center justify-between w-full" mb={2}>
        <Text>Response Rate</Text>
        <Stack direction={"row"} spacing={2} align={"center"}>
          <Progress
            value={100}
            colorScheme={"yellow"}
            bgColor={"brand.primary"}
            width={"80px"}
            className="h-2 rounded-full"
          />
          <Text fontWeight={'medium'}>100%</Text>
        </Stack>
      </Flex>

    </Flex>
  );
};

export default SellerStats;
