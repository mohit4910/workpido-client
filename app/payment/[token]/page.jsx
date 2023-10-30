"use client";
import { Box, Button, HStack, Stack, Text } from "@chakra-ui/react";
import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import { BsArrowRight, BsPaypal } from "react-icons/bs";
import { FaStripe, FaStripeS } from "react-icons/fa";
import { SiRazorpay } from "react-icons/si";

const page = ({ params }) => {
  const { token } = params;
  const [orderInfo, setOrderInfo] = useState(null);

  const [selectedPaymentGateway, setSelectedPaymentGateway] = useState("");

  useEffect(() => {
    if (Cookies.get("order")) {
      const parsedOrderInfo = JSON.parse(Cookies.get("order"));
      setOrderInfo(parsedOrderInfo);
    }
  }, []);
  return (
    <>
      <Box p={[4, 8, 12]}>
        <Text fontSize={"xl"} fontWeight={"bold"}>
          Confirm Payment
        </Text>
        <br />
        <br />
        <HStack py={4} alignItems={"flex-start"}>
          <Text fontSize={'lg'}>Gig: </Text>
          <Box>
            <Text fontSize={'lg'} fontWeight={'semibold'}>{orderInfo?.title}</Text>
            <Text fontSize={'sm'}>{orderInfo?.type}</Text>
          </Box>
        </HStack>
        <HStack py={4}>
          <Text fontSize={'lg'}>Amount: </Text>
          <Text fontSize={'lg'}>{orderInfo?.currency} {orderInfo?.amount}</Text>
        </HStack>
        <br />
        <br />
        <Text fontWeight={"semibold"}>Select Payment Gateway: </Text>
        <Stack
          direction={["column", "row"]}
          alignItems={"center"}
          gap={8}
          py={8}
        >
          <Button
            leftIcon={
              <FaStripeS
                color={selectedPaymentGateway == "stripe" ? "#FFF" : "#6B71E3"}
                size={20}
              />
            }
            colorScheme="twitter"
            variant={selectedPaymentGateway == "stripe" ? "solid" : "outline"}
            size={"lg"}
            onClick={() => setSelectedPaymentGateway("stripe")}
          >
            Stripe
          </Button>
          <Button
            leftIcon={
              <BsPaypal
                color={selectedPaymentGateway == "paypal" ? "#FFF" : "#6B71E3"}
                size={20}
              />
            }
            colorScheme="twitter"
            variant={selectedPaymentGateway == "paypal" ? "solid" : "outline"}
            size={"lg"}
            onClick={() => setSelectedPaymentGateway("paypal")}
          >
            Paypal
          </Button>
          <Button
            leftIcon={
              <SiRazorpay
                color={
                  selectedPaymentGateway == "razorpay" ? "#FFF" : "#6B71E3"
                }
                size={20}
              />
            }
            colorScheme="twitter"
            variant={selectedPaymentGateway == "razorpay" ? "solid" : "outline"}
            size={"lg"}
            onClick={() => setSelectedPaymentGateway("razorpay")}
          >
            Razorpay
          </Button>
        </Stack>
        <HStack py={4} justifyContent={"flex-end"}>
          {selectedPaymentGateway ? (
            <Button colorScheme="whatsapp" rightIcon={<BsArrowRight />}>Proceed to Pay</Button>
          ) : null}
        </HStack>
      </Box>
    </>
  );
};

export default page;
