"use client";
import React from "react";
import {
  Avatar,
  Box,
  Button,
  HStack,
  IconButton,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { InputBox } from "./InputBox";
import { FiSearch } from "react-icons/fi";
import { FaCirclePlus } from "react-icons/fa6";
import { monthNames } from "@/lib/constants";
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from "react-virtualized";

export const ChatBox = ({ messages, addMessage, receiver }) => {
  const cache = new CellMeasurerCache({
    fixedWidth: true,
    defaultHeight: 50,
  });

  const rowRenderer = ({ index, key, parent, style }) => (
    <CellMeasurer
      cache={cache}
      key={key}
      parent={parent}
      columnIndex={0}
      rowIndex={index}
    >
      <HStack
        p={4}
        gap={4}
        alignItems={"flex-start"}
        _hover={{ bgColor: "gray.50" }}
        style={style}
      >
        <Avatar size={"xs"} name={messages[index].sender?.name} />
        <Box w={"85%"}>
          <Text fontWeight="semibold">{messages[index].sender?.name}</Text>
          <Text>{messages[index].text}</Text>
        </Box>
        <Text fontSize={"xs"} color={"#999"}>
          {`${new Date(messages[index]?.timestamp ?? messages[index]?.createdAt).getDate()} ${monthNames[
            new Date(messages[index]?.timestamp ?? messages[index]?.createdAt).getMonth() - 1
          ].slice(0, 3)}`}
        </Text>
      </HStack>
    </CellMeasurer>
  );

  return (
    <>
      <Box p={4} borderBottom={"1px"}>
        <HStack>
          <Avatar size={"sm"} name={receiver?.username} />
          <Box>
            <Text fontSize="12px" fontWeight={"semibold"}>
              {receiver?.displayName || receiver?.username}
            </Text>
            <Text fontSize="8px" fontWeight={"medium"} color={"gray.500"}>
              {receiver?.profession}
            </Text>
          </Box>
          <Spacer />
          <HStack gap={4}>
            <FiSearch size={20} cursor={"pointer"} color={"#999"} />
            <Button
              size={"sm"}
              colorScheme="whatsapp"
              leftIcon={<FaCirclePlus />}
            >
              Order
            </Button>
          </HStack>
        </HStack>
      </Box>
      <Box h={"80%"} overflowY={"scroll"}>
        <AutoSizer>
          {({ height, width }) => (
            <List
              width={width}
              height={height}
              rowCount={messages.length}
              rowHeight={cache.rowHeight}
              rowRenderer={rowRenderer}
            />
          )}
        </AutoSizer>
      </Box>
      <Box px={3}>
        <InputBox addMessage={addMessage} />
      </Box>
    </>
  );
};
