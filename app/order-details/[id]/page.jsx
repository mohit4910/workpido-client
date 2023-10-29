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
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import { FaQuestion, FaUserCircle } from "react-icons/fa";
import { GiCheckMark } from "react-icons/gi";
import { LuFileStack } from "react-icons/lu";
import { TbWriting } from "react-icons/tb";
import AppModal from "@/components/AppModal";
import { useFormik } from "formik";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import { FiPaperclip } from "react-icons/fi";

const page = ({ params }) => {
  const { id } = params;
  const { replace, push } = useRouter();
  const { getMediaUrl } = useApiHandler();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [sellerAvatar, setSellerAvatar] = useState("");
  const [orderDetails, setOrderDetails] = useState(null);
  const steps = [
    { title: "Order created" },
    { title: "Order requirements submitted" },
    { title: "Submitted for approval" },
    { title: "Order accepted" },
    { title: "Order completed" },
  ];

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  useEffect(() => {
    (async () => {
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
    })();
  }, []);

  useEffect(() => {
    if (orderDetails?.id) {
      const avatarUrl = getMediaUrl(orderDetails?.gig?.seller?.avatar?.url);
      setSellerAvatar(avatarUrl);
    }
  }, [orderDetails]);

  const Formik = useFormik({
    initialValues: {
      requirements: "",
      files: null,
    },
  });

  return (
    <main className="relative min-h-screen">
      <Flex className="w-[98%] md:w-[95%] md:container lg:w-10/12 flex-col md:flex-row items-center md:items-start mx-auto">
        {/* Main Content */}
        <Flex className="md:mx-3 lg:mx-auto w-[98%] md:w-10/12 md:my-10 lg:w-8/12 flex-col gap-6">
          {/* Order Info */}
          <Flex className="w-full flex-col bg-white p-5 gap-5">
            {/* order heading */}
            <Stack direction={"row"} spacing={2} align={"flex-start"}>
              <Avatar size={"lg"} src={sellerAvatar} />
              <Link href={"/article-details"} className="hover:text-indigo-600">
                <Text className="text-2xl md:text-3xl font-semibold">
                  I will create responsive websites in NextJS
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
              <Text>August 15, 2023</Text>
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
                    <Text>$100</Text>
                  </Flex>
                  <AccordionPanel pb={4}>
                    <Text className="block font-bold text-lg my-3">
                      Seller Requirements
                    </Text>
                    <Text className="my-3 overflow-x-clip">
                      For the orders to be completed the following are the
                      requirements for quality work to be delivered and on the
                      speculated period.
                    </Text>
                    {parse(orderDetails?.gig?.requirements ?? "<p></p>")}
                    <Text className="my-3">
                      <span className="font-bold">Delivery: </span>
                      <span>1 month</span>
                    </Text>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <br />
            </Flex>
          </Flex>

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
          <Flex className="bg-white flex-col px-3">
            {/* Order Details */}
            <List className="flex flex-col gap-4 border-y py-4">
              <ListItem className="flex justify-between items-center">
                <Text>Order Status</Text>
                <Box className="py-1 px-2 border border-brand-primary rounded-md bg-brand-primary">
                  <Text className="text-xs text-white font-medium">
                    Completed
                  </Text>
                </Box>
              </ListItem>
              <ListItem className="flex justify-between items-center">
                <Text>Order Price</Text>
                <Text>$100</Text>
              </ListItem>
            </List>
            {/* Buyer Details */}
            <Flex className="justify-between py-4 border-y">
              <Text>Buyer</Text>
              <Stack direction={"row-reverse"} spacing={2} align={"flex-start"}>
                <Avatar size={"md"} src={sellerAvatar} />
                <Stack direction={"column"} spacing={0} fontSize={"lg"}>
                  <Link href={"/profile"} className="hover:text-indigo-600">
                    <Text fontSize={"sm"}>geekguyadarsh</Text>
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
          <Accordion allowToggle className="my-3 mx-auto w-full border">
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
                  <ListItem className="my-3 flex">
                    <ListIcon as={FaUserCircle} color="black" />
                    <Text>File 1</Text>
                  </ListItem>
                  <ListItem className="my-3 flex">
                    <ListIcon as={FaUserCircle} color="black" />
                    <Text>File 2</Text>
                  </ListItem>
                </List>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          {/* FAQs */}
          <Accordion allowToggle className="my-3 mx-auto w-full border">
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
                    <Text className="font-bold mb-2">{`The buyer hasn't submitted the order requirements. What should I do?`}</Text>
                    <Text>{`First of all, remember to carefully fill out the Order Requirements field when creating your kwork. This helps orders begin quickly and smoothly. If the buyer hasn't submitted the order requirements and your 24-hour acceptance window is coming to an end, request to cancel the order and select The buyer hasn't submitted the order requirements as your cancelation reason.`}</Text>
                  </ListItem>
                  <ListItem className="my-3">
                    <Text className="font-bold mb-2">{`The buyer isn't responding to my messages. What should I do?`}</Text>
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
          <Accordion allowToggle className="my-3 mx-auto w-full border">
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
                <Textarea placeholder="Wanna write something about this order" />
                <Button className="border border-emerald-600 w-full text-emerald-600 mt-2">
                  Save
                </Button>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Flex>

      <AppModal
        title={"Submit Seller Requirements"}
        isOpen={isOpen}
        setIsOpen={(data) => onClose()}
        size={"xl"}
      >
        <Box>
          <Text fontWeight={"semibold"}>
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
          <Button colorScheme="orange">Submit</Button>
        </HStack>
      </AppModal>
    </main>
  );
};

export default page;
