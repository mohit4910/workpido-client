"use client";
import React, { useState, useEffect } from "react";
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
import { toast } from "react-toastify";
import { API } from "@/lib/api";
import { useFormik } from "formik";

export const ChatBox = ({ messages, addMessage, receiver, isTyping }) => {
  const { user } = useAuth();
  const [categories, setCategories] = useState([]);
  const [order, setOrder] = useState({
    status: false,
  });

  useEffect(() => {
    const res = JSON.parse(sessionStorage.getItem("categories"));
    setCategories(JSON.parse(sessionStorage.getItem("categories")));
  }, []);

  const cache = new CellMeasurerCache({
    fixedWidth: true,
    defaultHeight: 50,
  });

  async function sendOrder(data) {
    try {
      await API.sendOrder({ ...data });
      setOrder({ status: false });
    } catch (error) {
      console.log(error);
      toast.error("Error while sending your order");
      setOrder({ status: false });
    }
  }

  const Formik = useFormik({
    initialValues: {
      requirements: "",
      deliveryDays: "",
      amount: "",
      title: "",
      category: "",
      subCategory: "",
      buyer: receiver?.username,
    },
    onSubmit: async (values) => {
      await sendOrder({ ...values });
    },
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
          <Text fontWeight="semibold">
            {messages[index].sender?.name}{" "}
            {messages[index].type == "order" ? "sent you an offer" : null}{" "}
          </Text>
          {messages[index].type == "order" ? (
            <Box mt={4} w={"full"} border={"1px"} rounded={"4"}>
              <Box w={"full"} p={3} roundedTop={4} bgColor={"facebook.50"}>
                <Text fontSize={"md"} fontWeight={"semibold"}>
                  {messages[index]?.order?.title}
                </Text>
              </Box>
              <Box p={4}>
                <Text fontSize={"sm"} mb={4}>
                  {messages[index]?.order?.requirements}
                </Text>
                <Text fontSize={"sm"} mb={2}>
                  <strong>Price</strong>: {messages[index]?.order?.amount}
                </Text>
                <Text fontSize={"sm"} mb={2}>
                  <strong>Delivery Time</strong>:{" "}
                  {messages[index]?.order?.deliveryDays} Days
                </Text>
              </Box>
              <HStack p={3} w={"full"} justifyContent={"flex-end"}>
                {messages[index]?.order?.isAccepted ? (
                  <Button
                    size={"sm"}
                    colorScheme="whatsapp"
                    variant={"outline"}
                    fontWeight={"medium"}
                    fontSize={"xs"}
                  >
                    Accepted
                  </Button>
                ) : messages[index]?.order?.isRejected ? (
                  <Button
                    size={"sm"}
                    colorScheme="red"
                    variant={"outline"}
                    fontWeight={"medium"}
                    fontSize={"xs"}
                  >
                    Rejected
                  </Button>
                ) : (
                  <HStack gap={4} justifyContent={"flex-end"}>
                    <Button
                      size={"sm"}
                      colorScheme="red"
                      variant={"solid"}
                      fontWeight={"medium"}
                      fontSize={"xs"}
                    >
                      Reject
                    </Button>
                    <Button
                      size={"sm"}
                      colorScheme="whatsapp"
                      variant={"solid"}
                      fontWeight={"medium"}
                      fontSize={"xs"}
                    >
                      Accept
                    </Button>
                  </HStack>
                )}
              </HStack>
            </Box>
          ) : (
            <Text>{messages[index].text}</Text>
          )}
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
          {`${new Date(messages[index]?.timestamp).getDate()} ${monthNames[
            new Date(messages[index]?.timestamp).getMonth() - 1 == -1
              ? 0
              : new Date(messages[index]?.timestamp).getMonth() - 1
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

      <Modal
        size={["full", "3xl"]}
        isOpen={order?.status}
        onClose={() => setOrder({ ...order, status: false })}
        isCentered
      >
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
            <Box mt={4}>
              <FormLabel fontSize={"sm"}>Title</FormLabel>
              <Input
                fontSize={"sm"}
                placeholder="Give your offer a title"
                name="title"
                value={Formik.values.title}
                onChange={Formik.handleChange}
              />
            </Box>
            <Textarea
              mt={4}
              name="requirements"
              value={Formik.values.requirements}
              onChange={Formik.handleChange}
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
                name="category"
                value={Formik.values.category}
                onChange={Formik.handleChange}
              >
                {categories?.map((data, key) => (
                  <option value={data?.id} key={key}>
                    {data?.title}
                  </option>
                ))}
              </Select>
              <Select
                placeholder="Select subcategory"
                maxW={["full", "xs"]}
                name="subCategory"
                value={Formik.values.subCategory}
                onChange={Formik.handleChange}
              >
                {categories
                  ?.find((data) => data?.id == Formik.values.category)
                  ?.subCategories?.map((data, key) => (
                    <option value={data?.id} key={key}>
                      {data?.title}
                    </option>
                  ))}
              </Select>
            </Stack>
            <Stack
              direction={["column", "row"]}
              alignItems={"center"}
              justifyContent={"space-between"}
              mt={8}
              mb={3}
            >
              <Box w={["full", "xs"]}>
                <FormLabel fontSize={"sm"} fontWeight={"medium"}>
                  Price
                </FormLabel>
                <InputGroup maxW={["full", "xs"]}>
                  <InputLeftElement children={user?.currency?.label ?? "₹"} />
                  <Input
                    placeholder="10-1000"
                    min={10}
                    name="amount"
                    value={Formik.values.amount}
                    onChange={Formik.handleChange}
                  />
                </InputGroup>
              </Box>
              <Box w={["full", "xs"]}>
                <FormLabel fontSize={"sm"} fontWeight={"medium"}>
                  Delivery
                </FormLabel>
                <InputGroup maxW={["full", "xs"]}>
                  <Input
                    name="deliveryDays"
                    value={Formik.values.deliveryDays}
                    onChange={Formik.handleChange}
                  />
                  <InputRightElement children={"Days"} paddingRight={6} />
                </InputGroup>
              </Box>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <HStack>
              <Button
                variant="outline"
                onClick={() => setOrder({ status: false })}
              >
                Cancel
              </Button>
              <Button
                colorScheme="green"
                bgColor={"brand.primary"}
                onClick={Formik.handleSubmit}
              >
                Send
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
