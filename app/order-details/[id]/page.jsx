"use client";

import Message from "@/components/Message";
import useApiHandler from "@/hooks/useApiHandler";
import { API } from "@/lib/api";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Button,
  Flex,
  List,
  ListIcon,
  ListItem,
  Stack,
  Step,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Text,
  Textarea,
  useSteps,
  useDisclosure,
  HStack,
  FormControl,
  FormLabel,
  Input,
  VStack,
  IconButton,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import { FaFile, FaQuestion, FaUserCircle } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { LuFileStack } from "react-icons/lu";
import { TbWriting } from "react-icons/tb";
import AppModal from "@/components/AppModal";
import { useFormik } from "formik";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import { FiPaperclip } from "react-icons/fi";
import { toast } from "react-toastify";
import { BsTrash2Fill } from "react-icons/bs";

const page = ({ params }) => {
  const { id } = params;
  const { replace, push, refresh } = useRouter();
  const { getMediaUrl, uploadAndAttachMedia } = useApiHandler();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [sellerAvatar, setSellerAvatar] = useState("");
  const [bannerUrl, setBannerUrl] = useState();
  const [files, setFiles] = useState([]);
  const [orderDetails, setOrderDetails] = useState(null);
  const [cancelOrderModal, setCancelOrderModal] = useState(false);
  const [reason, setReason] = useState("");
  const [note, setNote] = useState("");

  const steps = [
    { title: "Order created" },
    { title: "Order requirements submitted" },
    { title: "Submitted for approval" },
    { title: "Order accepted" },
    { title: "Order completed" },
  ];

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  useEffect(() => {
    fetchOrderDetails();
  }, []);

  useEffect(() => {
    if (orderDetails?.id) {
      let attachments = [];
      const avatarUrl = getMediaUrl(orderDetails?.gig?.seller?.avatar?.url);
      setSellerAvatar(avatarUrl);

      if (orderDetails?.gig?.banners?.length) {
        const firstBanner = getMediaUrl(orderDetails?.gig?.banners[0]?.url);
        setBannerUrl(firstBanner);
      }

      if (orderDetails?.gig?.attachments?.length) {
        for (let i = 0; i < orderDetails?.gig?.attachments?.length; i++) {
          const file = orderDetails?.gig?.attachments[i];
          attachments.push(file?.url);
        }
        setFiles(attachments);
      }

      setActiveStep(orderDetails == "requirements submitted" ? 2 : 1);
    }
  }, [orderDetails]);

  const Formik = useFormik({
    initialValues: {
      requirements: "",
      files: null,
    },
    onSubmit: async (values) => {
      try {
        await API.updateOrder(orderDetails?.id, {
          data: {
            requirements: values.requirements,
            status: "requirements submitted",
          },
        });
        if (values?.files?.length) {
          await uploadAndAttachMedia({
            field: "attachments",
            modelName: "api::order.order",
            entryId: orderDetails?.id,
            files: values.files,
          });
        }
        refresh();
        toast.success("Updated successfully!");
      } catch (error) {
        toast.error("Err updating order");
      }
    },
  });

  async function addNote() {
    try {
      await API.addNote({
        data: {
          note: note,
          order: {
            connect: [orderDetails?.id],
          },
        },
      });
      await fetchOrderDetails();
    } catch (error) {
      toast.error("Error adding notes");
    }
  }

  async function deleteNote(id) {
    try {
      await API.deleteNote(id);
      await fetchOrderDetails();
    } catch (error) {
      toast.error("Error deleting notes");
    }
  }

  async function cancelOrder() {
    try {
      await API.updateOrder(orderDetails?.id, {
        data: {
          status: "camcelled",
          review: reason,
        },
      });
      setCancelOrderModal(false);
      await fetchOrderDetails();
    } catch (error) {
      toast.error("Error cancelling notes");
    }
  }

  async function fetchOrderDetails() {
    try {
      const res = await API.getOrderInfo(id);
      setOrderDetails(res);
    } catch (error) {
      if (error?.status == 403) {
        replace("/system/forbidden");
      } else {
        // push("/system/error")
        console.log(error);
      }
    }
  }

  return (
    <main className="relative min-h-screen">
      <Flex className="w-[98%] md:w-[95%] md:container lg:w-10/12 flex-col md:flex-row items-center md:items-start mx-auto">
        {/* Main Content */}
        <Flex className="md:mx-3 lg:mx-auto w-[98%] md:w-10/12 md:my-10 lg:w-8/12 flex-col gap-6">
          {/* Order Info */}
          <Flex
            className="w-full flex-col bg-white p-5 gap-5"
            boxShadow={"base"}
          >
            {/* order heading */}
            <Stack direction={"row"} spacing={2} align={"flex-start"}>
              {orderDetails?.gig?.banners?.length ? (
                <Avatar size={"lg"} src={bannerUrl} />
              ) : null}
              <Link href={"/article-details"} className="hover:text-indigo-600">
                <Text className="text-2xl md:text-3xl font-semibold">
                  {orderDetails?.gig?.title}
                </Text>
              </Link>
            </Stack>
            {/* Date */}
            <Flex className="items-center justify-between">
              <Text className="hidden md:inline-block">
                <Link className="text-indigo-500" href={"/orders"}>
                  Manage My Orders
                </Link>{" "}
                {` > Order Id #${id}`}
              </Text>
              <Text>{new Date(orderDetails?.createdAt)?.toDateString()}</Text>
            </Flex>
            {/* Order Details */}
            <Flex className="flex-col gap-1">
              <Flex className="items-center justify-between">
                <Text className="w-1/2">Service</Text>
                <Text>Delivery</Text>
                <Text isNumeric>Price</Text>
              </Flex>
              <Accordion
                allowToggle
                className="mx-auto w-full border-none px-0"
              >
                <AccordionItem className="border-none">
                  <Flex className="items-center justify-between">
                    <AccordionButton
                      _expanded={{ bg: "white", color: "black" }}
                      _disabled={{ bg: "white", color: "black" }}
                      _hover={{ bg: "white", color: "black" }}
                      className="px-0 border-none w-2/4"
                    >
                      <Flex textAlign="left" className="gap-2 items-start py-1">
                        <Text className="text-indigo-600">
                          {orderDetails?.packageName ?? "Overview"}
                        </Text>
                        <AccordionIcon />
                      </Flex>
                    </AccordionButton>
                    <Text>1 month</Text>
                    <Text>{orderDetails?.amount}</Text>
                  </Flex>
                  <AccordionPanel pb={4}>
                    <Text className="block font-medium text-lg my-3">
                      Seller Requirements
                    </Text>
                    <Text className="my-3 overflow-x-clip">
                      For the orders to be completed the following are the
                      requirements for quality work to be delivered and on the
                      speculated period.
                    </Text>
                    {parse(orderDetails?.gig?.requirements ?? "<p></p>")}
                    <Text className="my-3">
                      <span className="font-medium">Delivery: </span>
                      <span>1 month</span>
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <br />
            </Flex>
          </Flex>

          {orderDetails?.status == "pending requirements" ? (
            <Button
              p={"2.5"}
              w={"48"}
              fontSize={"sm"}
              bgColor={"orange.400"}
              colorScheme="'orange"
              color={"#FFF"}
              fontWeight={"medium"}
              onClick={onOpen}
            >
              Submit Requirements
            </Button>
          ) : null}

          {orderDetails?.status == "completed" ||
          orderDetails?.status == "cancelled" ? null : (
            <Button
              p={"2.5"}
              w={"48"}
              fontSize={"sm"}
              bgColor={"red.400"}
              colorScheme="'red"
              fontWeight={"medium"}
              onClick={() => setCancelOrderModal(true)}
            >
              Cancel Order
            </Button>
          )}

          {/* Order Updates */}
          <Flex className="w-full flex-col bg-white p-5 gap-5">
            <Text className="bg-[#f8f8f8] p-2 -mx-5 text-neutral-700 sticky top-0">
              August 15
            </Text>
            <Message />
            <Message />
          </Flex>
        </Flex>
        {/* SideBar - Comes Down on smaller displays */}
        <Box className="w-[96%] order-last md:w-[30%] my-10 mx-3 md:mx-0">
          <Flex className="bg-white flex-col px-4" boxShadow={"base"}>
            {/* Order Details */}
            <List className="flex flex-col gap-4 border-y py-4">
              <ListItem className="flex justify-between items-center">
                <Text>Order Status</Text>
                <Box
                  className="py-1 px-2 border rounded-md"
                  bgColor={
                    orderDetails?.status == "cancelled"
                      ? "red"
                      : "brand.primary"
                  }
                >
                  <Text
                    className="text-xs text-white font-medium"
                    textTransform={"capitalize"}
                  >
                    {orderDetails?.status}
                  </Text>
                </Box>
              </ListItem>
              <ListItem className="flex justify-between items-center">
                <Text>Order Price</Text>
                <Text>{orderDetails?.amount}</Text>
              </ListItem>
            </List>
            {/* Buyer Details */}
            <Flex className="justify-between py-4 border-y">
              <Text>Buyer</Text>
              <Stack direction={"row-reverse"} spacing={2} align={"flex-start"}>
                <Avatar size={"md"} src={sellerAvatar} />
                <Stack direction={"column"} spacing={0} fontSize={"lg"}>
                  <Link href={"/profile"} className="hover:text-indigo-600">
                    <Text fontSize={"sm"}>
                      {orderDetails?.gig?.seller?.username}
                    </Text>
                  </Link>
                  <Text fontSize={"xs"} className="text-neutral-500 text-right">
                    Offline 3d ago
                  </Text>
                </Stack>
              </Stack>
            </Flex>
            {/* Order Progress Bar */}
            <Stepper
              index={activeStep}
              size={"sm"}
              orientation="vertical"
              height="300px"
              colorScheme="green"
              gap="0"
              className="py-4"
            >
              {steps.map((step, index) => (
                <Step key={index}>
                  <StepIndicator>
                    <StepStatus
                      complete={<StepIcon />}
                      incomplete={<StepNumber />}
                      active={<StepNumber />}
                    />
                  </StepIndicator>
                  <Box overflowX={"hidden"}>
                    <StepTitle>{step.title}</StepTitle>
                  </Box>
                  <StepSeparator />
                </Step>
              ))}
            </Stepper>
          </Flex>
          {/* Three Drop-downs */}
          {/* Files */}
          <Accordion
            allowToggle
            className="my-3 mx-auto w-full border"
            bgColor={"#FFF"}
          >
            <AccordionItem>
              <h2>
                <AccordionButton
                  _expanded={{ bg: "white", color: "black" }}
                  _disabled={{ bg: "white", color: "black" }}
                  _hover={{ bg: "white", color: "black" }}
                >
                  <Flex
                    flex="1"
                    textAlign="left"
                    className="gap-2 items-center py-1"
                  >
                    <LuFileStack />
                    Files
                  </Flex>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <List>
                  {files?.map((file, key) => (
                    <ListItem
                      as={"a"}
                      href={file}
                      target="_blank"
                      key={key}
                      className="my-3 flex"
                    >
                      <ListIcon as={FaFile} color="black" />
                      <Text>File {key + 1}</Text>
                    </ListItem>
                  ))}
                </List>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          {/* FAQs */}
          <Accordion
            allowToggle
            className="my-3 mx-auto w-full border"
            bgColor={"#FFF"}
          >
            <AccordionItem>
              <h2>
                <AccordionButton
                  _expanded={{ bg: "white", color: "black" }}
                  _disabled={{ bg: "white", color: "black" }}
                  _hover={{ bg: "white", color: "black" }}
                >
                  <Flex
                    flex="1"
                    textAlign="left"
                    className="gap-2 items-center py-1"
                  >
                    <FaQuestion />
                    FAQs
                  </Flex>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <List>
                  <ListItem className="my-3">
                    <Text className="font-semibold mb-2">{`The buyer hasn't submitted the order requirements. What should I do?`}</Text>
                    <Text>{`First of all, remember to carefully fill out the Order Requirements field when creating your kwork. This helps orders begin quickly and smoothly. If the buyer hasn't submitted the order requirements and your 24-hour acceptance window is coming to an end, request to cancel the order and select The buyer hasn't submitted the order requirements as your cancelation reason.`}</Text>
                  </ListItem>
                  <ListItem className="my-3">
                    <Text className="font-semibold mb-2">{`The buyer isn't responding to my messages. What should I do?`}</Text>
                    <Text>
                      {`Weekends, holidays, and time zones differences can prevent buyers from responding immediately. Be patient and make several attempts to connect with the buyer. If they are still unresponsive and you are not able to complete the order without their input, you can request to cancel the order.
                      `}
                    </Text>
                  </ListItem>
                </List>
                <Text>
                  If you have any further questions, visit our{" "}
                  <Link className="text-indigo-600" href={"#"}>
                    FAQs
                  </Link>{" "}
                  or contact our{" "}
                  <Link className="text-indigo-600" href={"#"}>
                    Support Team
                  </Link>
                  .
                  {` We're
                  here for you!`}
                </Text>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          {/* Notes */}
          <Accordion
            allowToggle
            className="my-3 mx-auto w-full border"
            bgColor={"#FFF"}
          >
            <AccordionItem>
              <h2>
                <AccordionButton
                  _expanded={{ bg: "white", color: "black" }}
                  _disabled={{ bg: "white", color: "black" }}
                  _hover={{ bg: "white", color: "black" }}
                >
                  <Flex
                    flex="1"
                    textAlign="left"
                    className="gap-2 items-center py-1"
                  >
                    <TbWriting />
                    Order Notes
                  </Flex>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <VStack w={"full"} mb={4}>
                  {orderDetails?.notes?.map((data, key) => (
                    <Box
                      key={key}
                      p={3}
                      bgColor={"#FFF"}
                      rounded={4}
                      boxShadow={"base"}
                    >
                      <HStack
                        w={"full"}
                        justifyContent={"space-between"}
                        my={2}
                      >
                        <Text fontSize={"xs"} fontWeight={"medium"}>
                          {new Date(data?.createdAt)?.toDateString()}
                        </Text>

                        <IconButton
                          icon={<BsTrash2Fill />}
                          colorScheme="red"
                          size={"xs"}
                          rounded={"full"}
                          onClick={() => deleteNote(data?.id)}
                        />
                      </HStack>
                      <Text fontSize={"xs"}>{data?.note}</Text>
                    </Box>
                  ))}
                </VStack>
                <Textarea
                  placeholder="Wanna write something about this order"
                  onChange={(e) => setNote(e.target.value)}
                />
                <Button
                  className="border border-emerald-600 w-full text-emerald-600 mt-2"
                  onClick={addNote}
                >
                  Save
                </Button>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Flex>

      {/* Seller requirements modal */}
      <AppModal
        title={"Submit Seller Requirements"}
        isOpen={isOpen}
        setIsOpen={(data) => onClose()}
        size={"xl"}
      >
        <Box>
          <Text fontWeight={"medium"}>
            To complete this project, the seller needs following things from
            you.
          </Text>
          <br />
          {parse(orderDetails?.gig?.requirements ?? "<p></p>")}
        </Box>
        <FormControl py={4}>
          <SunEditor
            hideToolbar
            onChange={(value) => Formik.setFieldValue("requirements", value)}
            height="240px"
          />
        </FormControl>
        <FormControl py={4}>
          <FormLabel>Attachments</FormLabel>
          <Input
            type="file"
            onChange={(e) => Formik.setFieldValue("files", e.target.files)}
          />
        </FormControl>
        <HStack py={4} justifyContent={"flex-end"}>
          <Button colorScheme="orange" onClick={Formik.handleSubmit}>
            Submit
          </Button>
        </HStack>
      </AppModal>

      {/* Cancel order modal */}
      <AppModal
        title={"Cancel Order"}
        isOpen={cancelOrderModal}
        setIsOpen={(data) => setCancelOrderModal(false)}
        size={"xl"}
      >
        <Box>
          <Text fontWeight={"medium"}>
            Please tell us why you want to cancel this order
          </Text>
        </Box>
        <FormControl py={4}>
          <SunEditor
            hideToolbar
            onChange={(value) => setReason(value)}
            height="240px"
          />
        </FormControl>
        <HStack py={4} justifyContent={"flex-end"}>
          <Button colorScheme="orange" onClick={cancelOrder}>
            Submit & Cancel Order
          </Button>
        </HStack>
      </AppModal>
    </main>
  );
};

export default page;
