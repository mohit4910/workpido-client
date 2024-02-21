"use client";
import { API } from "@/lib/api";
import {
  Button,
  Input,
  NumberInput,
  NumberInputField,
  Stack,
  Tooltip,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const WithdrawalForm = ({ onCancel, onSubmit, maxAmount }) => {
  const [amount, setAmount] = useState("");
  const [paypalEmail, setPaypalEmail] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setPaypalEmail(user?.paypalEmail);
    }
  }, []);

  async function handleRequest() {
    if(amount > maxAmount){
        toast.warn("Invalid amount")
        return
    }
    try {
      await API.withdrawalRequest({ amount: amount });
      toast.success("Request submitted succesfully!");
      onSubmit();
    } catch (error) {
      toast.error("Error while submitting your request");
    }
  }

  return (
    <>
      <Stack direction={["column", "row"]} gap={4}>
        <NumberInput size={"sm"} maxW={["full", "48"]} max={maxAmount}>
          <NumberInputField
            onChange={(e) => setAmount(e.target.value)}
            bgColor={"#FFF"}
            placeholder="Amount"
            max={maxAmount}
          />
        </NumberInput>
        <Tooltip
          label={
            paypalEmail
              ? "Your Paypal Email"
              : "Please update your paypal email from settings"
          }
        >
          <Input
            isDisabled
            value={paypalEmail}
            size={"sm"}
            maxW={["full", "48"]}
            bgColor={"#FFF"}
          />
        </Tooltip>

        <Button
          fontWeight={"medium"}
          bgColor={"brand.primary"}
          colorScheme="yellow"
          size={"sm"}
          color={"#FFF"}
          rounded={4}
          px={4}
          onClick={handleRequest}
        >
          Withdraw
        </Button>

        <Button
          fontWeight={"medium"}
          variant={"outline"}
          size={"sm"}
          rounded={4}
          px={4}
          onClick={onCancel}
        >
          Cancel
        </Button>
      </Stack>
    </>
  );
};

export default WithdrawalForm;
