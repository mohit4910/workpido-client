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
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import { FaFile, FaQuestion, FaUserCircle } from "react-icons/fa";
import { LuFileStack } from "react-icons/lu";
import { TbWriting } from "react-icons/tb";
import AppModal from "@/components/AppModal";
import { useFormik } from "formik";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import { toast } from "react-toastify";
import {
  BsSend,
  BsSendFill,
  BsTrash2Fill,
  BsXCircleFill,
} from "react-icons/bs";
import useAuth from "@/hooks/useAuth";
import { GoPaperclip } from "react-icons/go";
import FileDropzone from "@/components/FileDropzone";

const page = ({ params }) => {
  const { id } = params;
  const { replace, refresh } = useRouter();
  const { getMediaUrl, uploadAndAttachMedia } = useApiHandler();
  const { user } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [sellerAvatar, setSellerAvatar] = useState("");
  const [buyerAvatar, setBuyerAvatar] = useState("");
  const [authUser, setAuthUser] = useState(null);

  const [orderUpdates, setOrderUpdates] = useState([]);
  const [msg, setMsg] = useState("");
  const [bannerUrl, setBannerUrl] = useState();
  const [files, setFiles] = useState([]);
  const [orderDetails, setOrderDetails] = useState(null);
  const [cancelOrderModal, setCancelOrderModal] = useState(false);
  const [filesModal, setFilesModal] = useState(false);
  const [attachments, setAttachments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [reason, setReason] = useState("");
  const [note, setNote] = useState("");
  const [review, setReview] = useState(null);
  const [showReviewInput, setShowReviewInput] = useState(false);

  const steps = [
    { title: "Order created", label: "pending requirements" },
    { title: "Submitted for approval", label: "requirements submitted" },
    { title: "Order accepted", label: "ongoing" },
    { title: "Order completed", label: "finished" },
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
    setAuthUser(user);
  }, [user?.id]);

  useEffect(() => {
    if (orderDetails?.id) {
      let attachments = [];

      const sellerAvatarUrl = getMediaUrl(
        orderDetails?.gig?.seller?.avatar?.url
      );
      setSellerAvatar(sellerAvatarUrl);

      const buyerAvatarUrl = getMediaUrl(orderDetails?.buyer?.avatar?.url);
      setBuyerAvatar(buyerAvatarUrl);

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

      setActiveStep(
        steps.indexOf(
          steps?.find((item) => item?.label == orderDetails?.status)
        ) + 1
      );
      fetchOrderUpdates(orderDetails?.id);
      fetchOrderReview();
    }
  }, [orderDetails?.id]);

  useEffect(() => {
    if (orderDetails?.status == "finished") {
      if (
        user?.id == orderDetails?.gig?.seller?.id &&
        review?.review &&
        !review?.reviewResponse
      ) {
        setShowReviewInput(true);
      }
      if (user?.id == orderDetails?.buyer?.id && !review?.review) {
        setShowReviewInput(true);
      }
    }
  }, [review?.id, orderDetails?.id, user?.id]);

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
        note: note,
        order: orderDetails?.id,
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
          status: "cancelled",
          review: reason,
        },
      });
      setCancelOrderModal(false);
      toast.success("Order status updated!");
      await fetchOrderDetails();
    } catch (error) {
      toast.error("Error cancelling order");
    }
  }

  async function completeOrder() {
    try {
      await API.updateOrder(orderDetails?.id, {
        data: {
          status: "finished",
        },
      });
      toast.success("Order status updated!");
      await fetchOrderDetails();
    } catch (error) {
      toast.error("Error updating order");
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

  async function fetchOrderUpdates(id) {
    try {
      const res = await API.getOrderUpdates(id || orderDetails?.id);
      setOrderUpdates(res);
    } catch (error) {
      toast.error("Error while fetching updates");
    }
  }

  async function postOrderUpdate() {
    try {
      setLoading(true);
      const data = await API.postOrderUpdate({
        message: msg,
        orderId: orderDetails?.id,
      });
      setMsg("");
      setLoading(false);
      if (attachments?.length) {
        await uploadAndAttachMedia({
          entryId: data?.id,
          field: "attachments",
          files: attachments,
          modelName: "api::order-update.order-update",
        });
      }
      await fetchOrderUpdates();
      toast.success("Update posted successfully!");
    } catch (error) {
      setLoading(false);
      toast.error("Error while posting update");
    }
  }

  async function fetchOrderReview() {
    try {
      const res = await API.getOrderReview(orderDetails?.id);
      if (res.length) {
        setReview(res[0]);
      }
    } catch (error) {
      console.log(error);
      toast.error("Error while fetching reviews");
    }
  }

  async function sendOrderReview() {
    try {
      await API.postReview({ msg: msg, orderId: orderDetails?.id });
      fetchOrderReview();
      fetchOrderUpdates();
      toast.success("Review posted successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Error while posting reviews");
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
                <Text>Price</Text>
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
                    {orderDetails?.gig?.overview ? (
                      <Text className="mb-6">
                        {orderDetails?.gig?.overview}
                      </Text>
                    ) : null}
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
          <HStack>
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
            ) : (
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
                View Requirements
              </Button>
            )}

            {orderDetails?.status == "cancelled" ||
            orderDetails?.status == "finished" ? null : orderDetails?.buyer
                ?.id == authUser?.id ? (
              <Button
                p={"2.5"}
                w={"48"}
                fontSize={"sm"}
                bgColor={"red.400"}
                colorScheme="'red"
                fontWeight={"medium"}
                onClick={() => setCancelOrderModal(true)}
                color={"#FFF"}
              >
                Cancel Order
              </Button>
            ) : (
              <Button
                p={"2.5"}
                w={"48"}
                fontSize={"sm"}
                colorScheme="whatsapp"
                fontWeight={"medium"}
                color={"#FFF"}
                onClick={completeOrder}
              >
                Mark Finished
              </Button>
            )}
          </HStack>

          {/* Order Updates */}
          <Flex className="w-full flex-col bg-white p-5 gap-5">
            {/* <Text className="bg-[#f8f8f8] p-2 -mx-5 text-neutral-700 sticky top-0">
              August 15
            </Text> */}
            {orderUpdates.map((data, key) => (
              <Message
                key={key}
                username={data?.sender?.username}
                updateType={data?.updateType}
                avatar={
                  data?.sender?.id == orderDetails?.buyer?.id
                    ? buyerAvatar
                    : sellerAvatar
                }
                msg={data?.message}
                files={data?.attachments}
              />
            ))}
            <br />

            {orderDetails?.status == "cancelled" ||
            orderDetails?.status == "finished" ? null : (
              <HStack gap={4}>
                <InputGroup>
                  <InputLeftElement
                    children={<GoPaperclip />}
                    onClick={() => setFilesModal(true)}
                  />
                  <Input
                    w={"full"}
                    placeholder="Type your message here..."
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                  />
                </InputGroup>
                <Button
                  bgColor="brand.primary"
                  colorScheme="orange"
                  fontSize={"sm"}
                  rightIcon={<BsSendFill />}
                  onClick={postOrderUpdate}
                  isLoading={loading}
                >
                  Send
                </Button>
              </HStack>
            )}

            {showReviewInput ? (
              <HStack gap={4}>
                <Input
                  w={"full"}
                  placeholder={
                    review?.review
                      ? "Type your response here"
                      : "Type your review here..."
                  }
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                />
                <Button
                  bgColor="brand.primary"
                  colorScheme="orange"
                  fontSize={"sm"}
                  rightIcon={<BsSendFill />}
                  onClick={sendOrderReview}
                  isLoading={loading}
                >
                  Send
                </Button>
              </HStack>
            ) : null}
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
              <Text pr={3}>Buyer </Text>
              <Stack direction={"row-reverse"} spacing={2} align={"flex-start"}>
                <Avatar size={"md"} src={buyerAvatar} />
                <Stack direction={"column"} spacing={0} fontSize={"lg"}>
                  <Link href={"/profile"} className="hover:text-indigo-600">
                    <Text fontSize={"sm"}>{orderDetails?.buyer?.username}</Text>
                  </Link>
                  <Text fontSize={"xs"} className="text-neutral-500 text-right">
                    {orderDetails?.buyer?.online ? "Online" : "Offline"}
                  </Text>
                </Stack>
              </Stack>
            </Flex>
            {/* Order Progress Bar */}
            {orderDetails?.status != "cancelled" ? (
              <Stepper
                index={orderDetails?.status == "cancelled" ? 1 : activeStep}
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
            ) : (
              <Stepper
                index={2}
                size={"sm"}
                orientation="vertical"
                height="300px"
                colorScheme="green"
                gap="0"
                className="py-4"
              >
                <Step>
                  <StepIndicator>
                    <StepStatus
                      complete={<StepIcon />}
                      incomplete={<StepNumber />}
                      active={<StepNumber />}
                    />
                  </StepIndicator>
                  <Box overflowX={"hidden"}>
                    <StepTitle>Order Created</StepTitle>
                  </Box>
                  <StepSeparator />
                </Step>
                <Step>
                  <StepIndicator>
                    <StepStatus
                      complete={<StepIcon />}
                      incomplete={<StepNumber />}
                      active={<StepNumber />}
                    />
                  </StepIndicator>
                  <Box overflowX={"hidden"}>
                    <StepTitle>Cancelled</StepTitle>
                  </Box>
                  <StepSeparator />
                </Step>
              </Stepper>
            )}
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
                      w={"full"}
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
                          icon={<BsXCircleFill color="red" />}
                          color={"red"}
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

      <AppModal
        isOpen={filesModal}
        setIsOpen={() => setFilesModal(false)}
        title={"Send Attachments"}
        size={"xl"}
      >
        <FileDropzone onUpload={(files) => setAttachments(files)} />
        <br />
        <HStack w={"full"}>
          <Input
            placeholder="Type your message here..."
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
          <Button
            bgColor={"brand.primary"}
            colorScheme="whatsapp"
            rightIcon={<BsSendFill />}
            onClick={postOrderUpdate}
            isLoading={loading}
          >
            Send
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
