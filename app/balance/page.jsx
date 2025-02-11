"use client";
import WithdrawalForm from "@/components/WithdrawalForm";
import useAuth from "@/hooks/useAuth";
import { API } from "@/lib/api";
import {
  Badge,
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
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const page = () => {
  const { user } = useAuth();
  const [wallet, setWallet] = useState(0);
  const [data, setData] = useState([]);
  const [showWithdrawalForm, setShowWithdrawalForm] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await API.wallet();
        setWallet(res);
      } catch (error) {
        toast.warn("Couldn't fetch transactions");
      }
    })();
  }, []);

  useEffect(() => {
    getTransactions();
  }, []);

  async function getTransactions() {
    try {
      const res = await API.getTransactions();
      setData(res);
    } catch (error) {
      toast.warn("Couldn't fetch transactions");
    }
  }

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
                {user?.currency?.symbol}
                {wallet || 0}
              </Text>
              {showWithdrawalForm ? (
                <WithdrawalForm
                  onCancel={() => setShowWithdrawalForm(!showWithdrawalForm)}
                  onSubmit={() => {
                    setShowWithdrawalForm(!showWithdrawalForm);
                    getTransactions();
                  }}
                  maxAmount={wallet}
                />
              ) : (
                <Button
                  size={"sm"}
                  fontSize={"xs"}
                  rounded={2}
                  bgColor={"#FFF"}
                  boxShadow={"base"}
                  onClick={() => setShowWithdrawalForm(!showWithdrawalForm)}
                >
                  Withdraw Funds
                </Button>
              )}
            </HStack>
          </Box>
          <br />
          <TableContainer>
            <Table variant={"striped"}>
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
                {data?.map((item, key) => (
                  <Tr key={key}>
                    <Td>
                      {new Date(item?.updatedAt).toLocaleDateString(undefined, {
                        timeZone: "Asia/Kolkata",
                      })}
                    </Td>
                    <Td>{item?.description}</Td>
                    <Td textAlign={"center"}>{item?.amount}</Td>
                    <Td textAlign={"center"}>
                      <Badge textTransform={"uppercase"}>{item?.status}</Badge>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
    </>
  );
};

export default page;
