"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  Badge,
  VStack,
  Container,
  HStack,
  Button,
  Divider,
} from "@chakra-ui/react";
import { API } from "@/lib/api";
import { toast } from "react-toastify";
import PaymentButton from "@/components/PaymentButton";
import Script from "next/script";
import { useRouter } from "next/navigation";

const GigDetail = ({ params }) => {
  const router = useRouter();
  const [gig, setGigs] = useState({});

  const { id } = params;

  async function fetchData() {
    console.log("hererer");
    try {
      const res = await API.getGig(id);
      setGigs(res.data.attributes);
    } catch (error) {
      toast.error("Err while fetching gigs");
    }
  }
  useEffect(() => {
    fetchData();
  }, [id]);
  console.log(gig, "gig detail is here");

  const createOrder = async () => {
    const res = await API.createOrder({
      provider: "razorpay",
      amount: gig?.fixedPrice,
      gigId: id,
      currency: gig?.amount,
      metadata: {
        title: gig?.title,
      },
    });

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
        const res = await fetch(
          "http://localhost:1337/api/verify-razorpay-order",
          {
            method: "POST",
            body: JSON.stringify({
              orderId: response.razorpay_order_id,
              razorpayPaymentId: response.razorpay_payment_id,
              razorpaySignature: response.razorpay_signature,
            }),
          }
        );
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
      {id ? (
        <Container maxW={["full", "3xl", "5xl", "7xl"]}>
          {/* Hero Section */}
          <VStack spacing={4} align="start">
            <Heading size="xl" className="pt-14 pb-6">
              {gig.title || "No Title Available"}
            </Heading>
            <Badge colorScheme={gig.isActive ? "green" : "red"}>
              {gig.isActive ? "Active" : "Inactive"}
            </Badge>
            <Text fontSize="lg" color="gray.600">
              Status: {gig.status || "N/A"}
            </Text>
            <Text fontSize="lg" color="gray.600">
              Delivery Time:{" "}
              {gig.deliveryDays ? `${gig.deliveryDays} Days` : "Not specified"}
            </Text>
          </VStack>

          <Divider my={6} />

          {/* Description Section */}
          <Text fontSize="md" color="gray.700">
            {gig.description || "No description available"}
          </Text>

          <Divider my={6} />

          {/* Pricing Section */}
          <VStack spacing={3} align="start">
            <Heading size="md">Pricing</Heading>
            <Text fontSize="lg" fontWeight="bold">
              Fixed Price: {gig.fixedPrice ? `$${gig.fixedPrice}` : "N/A"}
            </Text>
            <Text fontSize="lg">
              Hourly Price: {gig.hourlyPrice ? `$${gig.hourlyPrice}/hr` : "N/A"}
            </Text>
            <Text fontSize="lg">
              Min Price: {gig.minPrice ? `$${gig.minPrice}` : "N/A"}
            </Text>
            <Text fontSize="lg">
              Max Price: {gig.maxPrice ? `$${gig.maxPrice}` : "N/A"}
            </Text>
          </VStack>

          <Divider my={6} />

          {/* Reviews Section */}
          <VStack spacing={3} align="start">
            <Heading size="md">Reviews</Heading>
            <Text fontSize="lg">
              Positive Reviews:{" "}
              {gig.positiveReviews !== null
                ? gig.positiveReviews
                : "No reviews yet"}
            </Text>
            <Text fontSize="lg">
              Views: {gig.viewsCount !== null ? gig.viewsCount : "No views"}
            </Text>
          </VStack>

          <Divider my={6} />

          {/* Admin Remarks & FAQs */}
          <VStack spacing={3} align="start">
            <Heading size="md">Admin Remarks</Heading>
            <Text fontSize="md">
              {gig.adminRemarks || "No remarks from admin"}
            </Text>

            <Heading size="md">FAQs</Heading>
            <Text fontSize="md">{gig.faqs || "No FAQs available"}</Text>
          </VStack>

          <Divider my={6} />
          <PaymentButton createOrder={createOrder} price={gig.fixedPrice} />
        </Container>
      ) : (
        <Container maxW={["full", "3xl", "5xl", "7xl"]}>
          No Detail found
        </Container>
      )}
    </>
  );
};

export default GigDetail;
