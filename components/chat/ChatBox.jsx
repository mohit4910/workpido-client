"use client";
import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  FormLabel,
  HStack,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Spacer,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { InputBox } from "./InputBox";
import { FiSearch } from "react-icons/fi";
import { FaCirclePlus } from "react-icons/fa6";
import { API_BASE_URL, monthNames } from "@/lib/constants";
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from "react-virtualized";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";

export const ChatBox = ({ messages, addMessage, receiver, isTyping }) => {
  const { user } = useAuth();
  const [order, setOrder] = useState({
    status: false,
    description: "",
    price: "",
  });

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
          {messages[index]?.files?.length ? (
            <Box
              marginTop={4}
              maxW={"xs"}
              display={"flex"}
              flexDir={"row"}
              alignItems={"flex-start"}
              justifyContent={"flex-start"}
              gap={2}
            >
              {messages[index]?.files?.map((file) => (
                <Link
                  href={API_BASE_URL?.replace("/api", "") + file?.url}
                  target="_blank"
                >
                  <HStack p={2} rounded={4} boxShadow={"base"}>
                    <Image
                      width="12"
                      height={12}
                      objectFit={"contain"}
                      src={API_BASE_URL?.replace("/api", "") + file?.url}
                    />
                  </HStack>
                </Link>
              ))}
            </Box>
          ) : null}
        </Box>
        <Text fontSize={"xs"} color={"#a2a2a2"}>
          {`${new Date(
            messages[index]?.timestamp ?? messages[index]?.createdAt
          ).getDate()} ${monthNames[
            new Date(
              messages[index]?.timestamp ?? messages[index]?.createdAt
            ).getMonth() - 1
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
              {isTyping ? "Typing..." : receiver?.profession}
            </Text>
          </Box>
          <Spacer />
          <HStack gap={4}>
            <FiSearch size={20} cursor={"pointer"} color={"#a2a2a2"} />
            <Button
              size={"sm"}
              colorScheme="whatsapp"
              leftIcon={<FaCirclePlus />}
              onClick={() => setOrder({ ...order, status: true })}
            >
              Order
            </Button>
          </HStack>
        </HStack>
      </Box>
      <Box h={"80%"} overflowY={"scroll"} overflowX={"hidden"}>
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
        <InputBox addMessage={addMessage} receiver={receiver?.username} />
      </Box>

      <Modal size={["full", "3xl"]} isOpen={order?.status} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontWeight={"medium"}>Send Custom Order</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Send a custom offer to your buyer.</Text>
            <Text py={2}>
              1. Describe the services that you are offering, along with the
              steps you will take to complete the client's project successfully.
            </Text>
            <Text>
              2. Describe your related experience, including 1-3 similar
              projects you've worked on.
            </Text>
            <Textarea
              mt={4}
              value={order?.description}
              onChange={(e) =>
                setOrder({ ...order, description: e.target.value })
              }
              w={"full"}
              h={48}
              resize={"none"}
              placeholder="Write about your offer here..."
              fontSize={"sm"}
            />
            <br />
            <Stack
              direction={["column", "row"]}
              alignItems={"center"}
              justifyContent={"space-between"}
              mt={6}
              mb={3}
            >
              <Select
                placeholder="Select category"
                maxW={["full", "xs"]}
              ></Select>
              <Select
                placeholder="Select subcategory"
                maxW={["full", "xs"]}
              ></Select>
            </Stack>
            <Box mt={6} mb={3}>
              <FormLabel fontWeight={"medium"}>Price</FormLabel>
              <InputGroup maxW={["full", "xs"]}>
                <InputLeftElement children={user?.currency?.label ?? "₹"} />
                <Input placeholder="10-1000" min={10} />
              </InputGroup>
            </Box>
            <Box mt={6} mb={3}>
              <FormLabel fontWeight={"medium"}>Delivery</FormLabel>
              <InputGroup maxW={["full", "xs"]}>
                <Input />
                <InputRightElement children={"Days"} paddingRight={6} />
              </InputGroup>
            </Box>
          </ModalBody>
          <ModalFooter>
            <HStack>
              <Button
                variant="outline"
                onClick={() => setOrder({ status: false })}
              >
                Cancel
              </Button>
              <Button colorScheme="green" bgColor={"brand.primary"}>
                Send
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
