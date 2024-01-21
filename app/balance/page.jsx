"use client";
import useAuth from "@/hooks/useAuth";
import {
  Box,
  Button,
  Container,
  HStack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

const page = () => {
  const { user } = useAuth();

  return (
    <>
      <Container maxW={["full", "3xl", "5xl", "7xl"]}>
        <Box w={"full"} minH={"100vh"} p={[4, 8, 16]}>
          <Text fontSize={["2xl", "3xl"]} fontWeight={"semibold"}>
            Cash Flow
          </Text>
          <br />
          <br />
          <Box
            w={"full"}
            border={"0.5px solid"}
            borderColor={"gray.200"}
            bgColor={"whiteAlpha.600"}
            p={4}
          >
            <HStack w={"full"} justifyContent={"flex-start"} gap={4}>
              <Text fontSize={["xl", "3xl", "5xl"]}>
                {user?.currency?.symbol}0
              </Text>
              <Button
                size={"sm"}
                fontSize={"xs"}
                rounded={2}
                bgColor={"#FFF"}
                boxShadow={"base"}
              >
                Withdraw Funds
              </Button>
            </HStack>
          </Box>
          <br />
          <TableContainer>
            <Table>
              <Thead
                border={"0.5px solid"}
                borderColor={"gray.200"}
                bgColor={"whiteAlpha.600"}
              >
                <Tr>
                  <Th>Date</Th>
                  <Th w={["xl"]}>Description</Th>
                  <Th textAlign={"center"}>Amount</Th>
                  <Th textAlign={"center"}>Status</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td></Td>
                  <Td></Td>
                  <Td textAlign={"center"}></Td>
                  <Td textAlign={"center"}></Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </>
  );
};

export default page;
