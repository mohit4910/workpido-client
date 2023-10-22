import useAuth from "@/hooks/useAuth";
import { API } from "@/lib/api";
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
import React, { useEffect, useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { toast } from "react-toastify";

const SellerStats = ({ seller }) => {
  const { avatarUrl, me } = useAuth();
  const [acceptingOrders, setAcceptingOrders] = useState(false)

  async function handleUpdate(data) {
    try {
      await API.updateMe(data);
      await me()
      setAcceptingOrders(!acceptingOrders)
      toast.success("Updated successfully!");
    } catch (error) {
      toast.error("Could not update status");
      console.log(error);
    }
  }

  useEffect(()=>{
    setAcceptingOrders(seller?.acceptingOrders)
  },[seller])

  return (
    <Flex className="flex-col items-center justify-center gap-3">
      <Stack direction={"column"} spacing={2} align={"center"}>
        <Avatar size={"2xl"} src={avatarUrl} />
        <Text fontSize={"md"} className="font-semibold">
          {seller?.username}
        </Text>
        <Text fontSize={"md"}>{seller?.displayName}</Text>
      </Stack>
      <Flex align={"center"} className="gap-2">
        <Text fontSize="md">Seller</Text>
        <BsStarFill className="font-semibold text-yellow-500" />
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
        <Switch
          id="email-alerts"
          colorScheme="green"
          isChecked={acceptingOrders}
          onChange={(e) => handleUpdate({ acceptingOrders: e.target.checked })}
        />
      </FormControl>

      {/* Stats */}
      <Flex className="items-center justify-between w-full">
        <Text>Reliablity</Text>
        <Stack direction={"row"} spacing={2} align={"center"}>
          <Progress
            value={100}
            colorScheme={"green"}
            width={"120px"}
            className="h-2 rounded-full"
          />
          <Text>100%</Text>
        </Stack>
      </Flex>
      <Flex className="items-center justify-between w-full">
        <Text>Punctuality</Text>
        <Stack direction={"row"} spacing={2} align={"center"}>
          <Progress
            value={100}
            colorScheme={"green"}
            width={"120px"}
            className="h-2 rounded-full"
          />
          <Text>100%</Text>
        </Stack>
      </Flex>
      <Flex className="items-center justify-between w-full">
        <Text>Response Time</Text>
        <Stack direction={"row"} spacing={2} align={"center"}>
          <Progress
            value={100}
            colorScheme={"green"}
            width={"120px"}
            className="h-2 rounded-full"
          />
          <Text>100%</Text>
        </Stack>
      </Flex>
      <Flex className="items-center justify-between w-full">
        <Text>Response Rate</Text>
        <Stack direction={"row"} spacing={2} align={"center"}>
          <Progress
            value={100}
            colorScheme={"green"}
            width={"120px"}
            className="h-2 rounded-full"
          />
          <Text>100%</Text>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default SellerStats;
