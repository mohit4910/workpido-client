"use client";
import { API } from "@/lib/api";
import {
  Button,
  HStack,
  Icon,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import { toast } from "react-toastify";

const ReviewModal = ({ title, isOpen, onClose, orderId }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRatings, setHoveredRatings] = useState(0);
  const [qualities, setQualities] = useState([]);
  const [msg, setMsg] = useState("");

  const predefinedQualities = ["reliable", "punctual"];
  const stars = [1, 2, 3, 4, 5];

  function addOrUpdateQualities(quality) {
    const updatedQualities = [...qualities];
    const index = updatedQualities.indexOf(quality);

    if (index !== -1) {
      updatedQualities.splice(index, 1);
    } else {
      updatedQualities.push(quality);
    }

    setQualities(updatedQualities);
  }

  async function sendReview() {
    try {
      await API.postReview({
        msg: msg,
        orderId: orderId,
        rating: rating,
        qualities: qualities,
      });
      toast.success("Review submitted succesfully!");
      onClose();
    } catch (error) {
      console.log(error);
      toast.error("Error while submitting the review");
    }
  }

  return (
    <>
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontWeight={"medium"} fontSize={"md"}>
            {title ?? "Share your review"}
          </ModalHeader>
          <ModalBody>
            <VStack w={"full"}>
              <HStack w={"full"} justifyContent={"center"}>
                {stars?.map((item, key) => (
                  <Icon
                    key={key}
                    as={
                      hoveredRatings >= item || rating >= item
                        ? BsStarFill
                        : BsStar
                    }
                    color={
                      hoveredRatings >= item || rating >= item
                        ? "yellow.400"
                        : "black"
                    }
                    onMouseEnter={() => setHoveredRatings(item)}
                    onMouseLeave={() => setHoveredRatings(0)}
                    onClick={() => setRating(item)}
                    fontSize={"2xl"}
                    cursor={"pointer"}
                  />
                ))}
              </HStack>
              <Textarea
                my={4}
                w={"full"}
                h={28}
                fontSize={"sm"}
                resize={"none"}
                placeholder="Type your review here..."
                value={msg}
                onChange={(e) => setMsg(e.target.value)}
              />
              <Text w={"full"} fontSize={"sm"}>
                Please select:
              </Text>
              <HStack w={"full"} justifyContent={"flex-start"} gap={4}>
                {predefinedQualities?.map((item, key) => (
                  <Button
                    size={"sm"}
                    fontSize={"xs"}
                    key={key}
                    variant={qualities.includes(item) ? "solid" : "outline"}
                    colorScheme="twitter"
                    rounded={"full"}
                    onClick={() => addOrUpdateQualities(item)}
                    textTransform={"capitalize"}
                  >
                    {item}
                  </Button>
                ))}
              </HStack>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <HStack w={"full"} justifyContent={"flex-end"}>
              <Button
                bgColor={"brand.primary"}
                colorScheme="orange"
                fontWeight={"medium"}
                fontSize={"sm"}
                onClick={sendReview}
              >
                Submit
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ReviewModal;
