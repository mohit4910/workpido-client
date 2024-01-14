"use client";
import useApiHandler from "@/hooks/useApiHandler";
import { API } from "@/lib/api";
import {
  Box,
  Button,
  HStack,
  Icon,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { HiPencil } from "react-icons/hi";
import { IoMdCart, IoMdEye } from "react-icons/io";
import {
  MdContentCopy,
  MdDelete,
  MdPause,
  MdPlayArrow,
  MdPlayCircle,
} from "react-icons/md";
import { TbCoin } from "react-icons/tb";
import { toast } from "react-toastify";

const MyGigCard = ({
  id,
  banner,
  title,
  views,
  orders,
  earnings,
  currency,
  price,
  isActive,
  onUpdate,
}) => {
  const { getMediaUrl } = useApiHandler();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [bannerUrl, setBannerUrl] = useState(
    "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
  );

  async function updateGig(data) {
    try {
      await API.updateGig(id, data);
      toast.success("Gig updated successfully!");
      onClose();
      onUpdate();
    } catch (error) {
      toast.error("Error while updating Gig");
    }
  }

  useEffect(() => {
    if (!banner) return;
    const mediaUrl = getMediaUrl(banner);
    setBannerUrl(mediaUrl);
  }, [banner]);

  return (
    <>
      <Box w={["full"]} bgColor={"#FFF"} rounded={4} boxShadow={"base"} my={4}>
        <Stack p={[4]} direction={["column", "row"]} gap={4}>
          <Image
            w={["full", 56]}
            height={36}
            objectFit={"cover"}
            src={
              bannerUrl ??
              "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
            }
          />
          <Box w={"full"}>
            <Stack
              direction={["column", "row"]}
              p={2}
              pt={0}
              w={"full"}
              borderBottom={"1px"}
              borderColor={"#e2e2e2"}
              fontWeight={"medium"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Text>{title}</Text>
              <HStack
                w={["full", "auto"]}
                justifyContent={["space-between", "flex-end"]}
              >
                <IconButton
                  variant={"ghost"}
                  icon={<MdDelete />}
                  onClick={onOpen}
                />
                <IconButton variant={"ghost"} icon={<MdContentCopy />} />
                <IconButton
                  variant={"ghost"}
                  onClick={() => updateGig({ isActive: !isActive })}
                  icon={isActive ? <MdPause /> : <MdPlayArrow />}
                />
                <IconButton variant={"ghost"} icon={<HiPencil />} />
              </HStack>
            </Stack>
            <Stack
              direction={["column", "row"]}
              justifyContent={"space-between"}
              gap={8}
              py={4}
            >
              <Box w={["full", "40%"]}>
                <HStack gap={2} mb={1}>
                  <HStack flex={4}>
                    <Icon as={IoMdEye} color={"gray.400"} />
                    <Text fontSize={"xs"}>Views : </Text>
                  </HStack>
                  <Text fontSize={"xs"} flex={1}>
                    {views}
                  </Text>
                </HStack>
                <HStack gap={2} mb={1}>
                  <HStack flex={4}>
                    <Icon as={IoMdCart} color={"gray.400"} />
                    <Text fontSize={"xs"}>Orders : </Text>
                  </HStack>
                  <Text fontSize={"xs"} flex={1}>
                    {orders}
                  </Text>
                </HStack>
                <HStack gap={2} mb={1}>
                  <HStack flex={4}>
                    <Icon as={TbCoin} color={"gray.400"} />
                    <Text fontSize={"xs"}>Earnings : </Text>
                  </HStack>
                  <Text fontSize={"xs"} flex={1}>
                    {earnings}
                  </Text>
                </HStack>
              </Box>
              <VStack
                w={"full"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Text fontSize={"xs"}>
                  Ratings are available after 8 orders
                </Text>
              </VStack>
              <VStack
                w={"full"}
                alignItems={"flex-end"}
                justifyContent={"flex-end"}
              >
                <Text fontSize={"xs"} color={"gray.500"}>
                  Starting from
                </Text>
                <Text fontSize={"xs"} fontWeight={"semibold"}>
                  {currency}
                  {price}
                </Text>
              </VStack>
            </Stack>
          </Box>
        </Stack>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontWeight={"medium"}>Are you sure?</ModalHeader>
          <ModalBody>
            <Text fontSize={"sm"}>
              Are you sure you want to delete this gig?
            </Text>
          </ModalBody>
          <ModalFooter>
            <HStack w={"full"} justifyContent={"flex-end"}>
              <Button fontWeight={"medium"} onClick={onClose}>
                Cancel
              </Button>
              <Button
                fontWeight={"medium"}
                colorScheme="red"
                onClick={() => updateGig({ status: "deleted" })}
              >
                Delete
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MyGigCard;
