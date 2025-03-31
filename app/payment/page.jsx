"use client";
import { API } from "@/lib/api";
import { API_BASE_URL } from "@/lib/constants";
import { Box, Button, HStack, Stack, Text } from "@chakra-ui/react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Script from "next/script";
import React, { useState, useEffect } from "react";
import { BsArrowRight, BsPaypal } from "react-icons/bs";
import { FaStripe, FaStripeS } from "react-icons/fa";
import { SiRazorpay } from "react-icons/si";
import { toast } from "react-toastify";

const page = ({ params }) => {
  const { token } = params;
  const router = useRouter();

  const [orderInfo, setOrderInfo] = useState(null);
  const [selectedPaymentGateway, setSelectedPaymentGateway] = useState("");

  useEffect(() => {
    if (Cookies.get("order")) {
      const parsedOrderInfo = JSON.parse(Cookies.get("order"));
      setOrderInfo(parsedOrderInfo);
    }
  }, []);

  const createPaymentLink = async () => {
    try {
      const res = await API.createOrder({
        provider: selectedPaymentGateway,
        amount: orderInfo?.amount,
        gigId: orderInfo?.gig,
        currency: orderInfo?.currency,
        metadata: {
          title: orderInfo?.title,
          type: orderInfo?.type,
        },
      });
      console.log("res");
      console.log(res);

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: res.amount,
        currency: "INR",
        name: "6 Pack Programmer",
        description: "Tutorial of RazorPay",
        image: "https://avatars.githubusercontent.com/u/25058652?v=4",
        order_id: res.payment_url.orderId,
        callback_url: "/api/verify-razorpay-order",
        prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#121212",
        },
      };
      const razor = new window.Razorpay(options);
      razor.open();
      console.log(razor);

      if (selectedPaymentGateway == "stripe") {
        push(res?.url);
      }
    } catch (error) {
      toast.error("Error while creating payment link");
    }
  };

  const createOrder = async () => {
    const res = await API.createOrder({
      provider: selectedPaymentGateway,
      amount: orderInfo?.amount,
      gigId: orderInfo?.gig,
      currency: orderInfo?.currency,
      metadata: {
        title: orderInfo?.title,
        type: orderInfo?.type,
      },
    });

    console.log("dfasdfasd", res.payment_url.order.id);

    const paymentData = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      order_id: res.payment_url.order.id,

      handler: async function (response) {
        console.log(response, "dfasdfas");
        if (!response.razorpay_signature) {
          console.error("Missing razorpay_signature!");
          return;
        }
        // verify payment
        const res = await fetch(`${API_BASE_URL}/verify-razorpay-order`, {
          method: "POST",
          body: JSON.stringify({
            orderId: response.razorpay_order_id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpaySignature: response.razorpay_signature,
            // amount: orderInfo?.amount,
            // buyerId,
            gigId: orderInfo?.gig,
            // sellerId,
          }),
        });
        const data = await res.json();
        console.log(data);
        if (data.isOk) {
          // do whatever page transition you want here as payment was successful
          router.push(`/payment-sucessfull`);
        } else {
          alert("Payment failed");
        }
      },
    };

    const payment = new window.Razorpay(paymentData);
    payment.open();
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
      <Box p={[4, 8, 12]}>
        <Text fontSize={"xl"} fontWeight={"bold"}>
          Confirm Payment
        </Text>
        <br />
        <br />
        <HStack py={4} alignItems={"flex-start"}>
          <Text fontSize={"lg"}>Gig: </Text>
          <Box>
            <Text fontSize={"lg"} fontWeight={"semibold"}>
              {orderInfo?.title}
            </Text>
          </Box>
        </HStack>
        <HStack py={4}>
          <Text fontSize={"lg"}>Amount: </Text>
          {/* <Text fontSize={'lg'} textTransform={'capitalize'}>{orderInfo?.type}</Text> */}
          <Text fontSize={"lg"}>
            {orderInfo?.currency} {orderInfo?.amount}
          </Text>
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
            <Button
              colorScheme="whatsapp"
              rightIcon={<BsArrowRight />}
              onClick={() => createOrder()}
              className="!text-black border-black border-2"
            >
              Proceed to Pay
            </Button>
          ) : null}
        </HStack>
      </Box>
    </>
  );
};

export default page;
