"use client";
import {
  Box,
  Button,
  Checkbox,
  Container,
  HStack,
  Icon,
  IconButton,
  Image,
  Input,
  Spacer,
  Stack,
  Switch,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { MdContentCopy, MdDelete, MdPause } from "react-icons/md";
import { HiPencil } from "react-icons/hi";
import { IoMdCart, IoMdEye } from "react-icons/io";
import { TbCoin } from "react-icons/tb";

const page = () => {
  return (
    <>
      <Box w={["full"]} p={[4, 8]} bgColor={"#f6f6f6"}>
        <Container maxW={["full", "3xl", "5xl", "6xl"]}>
          <HStack w={"full"} justifyContent={"space-between"} py={4}>
            <Text fontSize={["2xl", "3xl"]} fontWeight={"medium"}>
              My Gigs
            </Text>
            <Button
              colorScheme="yellow"
              bgColor={"brand.primary"}
              fontSize={"sm"}
              color={"#FFF"}
            >
              Create Gig
            </Button>
          </HStack>
          <Stack
            direction={["column", "row"]}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Input
              w={["full", "xs"]}
              bgColor={"#FFF"}
              rounded={"full"}
              placeholder="Search gig"
            />
            <Spacer />
            <HStack gap={0}>
              <HStack pr={4} borderRightWidth={"0.5px"}>
                <Text fontWeight={"medium"}>Accepting Orders</Text>
                <Switch colorScheme="yellow" />
              </HStack>
              <HStack pl={4} borderLeftWidth={"0.5px"}>
                <Checkbox bgColor={"#FFF"} />
                <Text fontWeight={"medium"}>Weekends Off</Text>
              </HStack>
            </HStack>
          </Stack>
          <br />
          <Box w={["full"]} bgColor={"#FFF"} rounded={4} boxShadow={"base"}>
            <Stack p={[4]} direction={["row"]} gap={4}>
              <Image
                w={56}
                height={36}
                src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
              />
              <Box w={"full"}>
                <HStack
                  p={2}
                  pt={0}
                  w={"full"}
                  borderBottom={"1px"}
                  borderColor={"#e2e2e2"}
                  fontWeight={"medium"}
                  justifyContent={"space-between"}
                >
                  <Text>Gig title will appear here</Text>
                  <HStack>
                    <IconButton variant={"ghost"} icon={<MdDelete />} />
                    <IconButton variant={"ghost"} icon={<MdContentCopy />} />
                    <IconButton variant={"ghost"} icon={<MdPause />} />
                    <IconButton variant={"ghost"} icon={<HiPencil />} />
                  </HStack>
                </HStack>
                <Stack
                  direction={["column", "row"]}
                  justifyContent={"space-between"}
                  gap={8}
                  py={4}
                >
                  <Box w={'full'}>
                    <HStack gap={8}>
                      <HStack gap={1}>
                        <Icon as={IoMdEye} color={"gray.400"} />
                        <Text fontSize={"xs"}>Views : </Text>
                      </HStack>
                      <Text fontSize={"xs"}> 25</Text>
                    </HStack>
                    <HStack gap={7}>
                      <HStack gap={1}>
                        <Icon as={IoMdCart} color={"gray.400"} />
                        <Text fontSize={"xs"}>Orders : </Text>
                      </HStack>
                      <Text fontSize={"xs"}> 8</Text>
                    </HStack>
                    <HStack gap={4}>
                      <HStack gap={1}>
                        <Icon as={TbCoin} color={"gray.400"} />
                        <Text fontSize={"xs"}>Earnings : </Text>
                      </HStack>
                      <Text fontSize={"xs"}> 2400</Text>
                    </HStack>
                  </Box>
                  <VStack w={'full'} alignItems={"center"} justifyContent={"center"}>
                    <Text fontSize={"xs"}>
                      Ratings are available after 8 orders
                    </Text>
                  </VStack>
                  <VStack w={'full'} alignItems={'flex-end'} justifyContent={'flex-end'}>
                    <Text fontSize={'xs'} color={'gray.500'}>Starting from</Text>
                    <Text fontSize={'xs'} fontWeight={'semibold'}>₹4999</Text>
                  </VStack>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default page;
