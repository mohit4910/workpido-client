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

const GigDetail = ({ params }) => {
  const [gig, setGigs] = useState({});

  const { id } = params;

  async function fetchData() {
    console.log("hererer");
    try {
      const res = await API.getGig(id)
      setGigs(res.data.attributes);
    } catch (error) {
      toast.error("Err while fetching gigs");
    }
  }
  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <>
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
