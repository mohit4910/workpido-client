import { API } from "@/lib/api";
import { Avatar, Box, Flex, Image, Text, keyframes } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";

const Chats = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchChats();
  }, []);

  async function fetchChats() {
    try {
      const res = await API.getChats();
      setContacts(res);
    } catch (error) {
      toast.error("Error while fetching chats");
    }
  }

  return (
    <Box className="w-full py-3 overflow-y-scroll">
      {contacts?.map((user, key) => (
        <Flex
          key={key}
          className="p-2 items-center cursor-pointer gap-3 hover:bg-gray-200 mb-2"
          as={"a"}
          href={`/inbox/${user?.name}`}
        >
          <Avatar size={'md'} src={user?.avatarUrl} name={user?.name} alt="" />
          <Box>
            <Text className="font-medium text-md">{user?.name}</Text>
            <Text className="text-gray-700 text-xs">{user?.recentMessage}</Text>
          </Box>
        </Flex>
      ))}
    </Box>
  );
};

export default Chats;
