"use client";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Text,
} from "@chakra-ui/react";
import React from "react";

const PlanAccordion = ({ data, onClick }) => {
  return (
    <>
      <Accordion
        allowToggle
        allowMultiple
        gap={8}
        bgColor={"#FFF"}
        boxShadow={"base"}
      >
        {data?.plans?.map((plan, i) => (
          <AccordionItem key={i}>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                <Text
                  fontSize={"md"}
                  fontWeight={"medium"}
                  color={"brand.primary"}
                >
                  {plan}
                </Text>
              </Box>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel pb={4}>
              {Object.keys(data?.data)?.map((attribute, index) => (
                <Text key={index} py={2}>
                  {attribute} : {data?.data[attribute][i] || ""}
                </Text>
              ))}
              <Box py={4}>
                <Button
                  w={"full"}
                  bgColor={"brand.primary"}
                  colorScheme="green"
                  onClick={() =>
                    onClick({
                      name: plan,
                      amount: data?.data?.hasOwnProperty("Price")
                        ? data?.data["Price"][i]
                        : data?.data["Pricing"][i],
                    })
                  }
                >
                  Buy Now
                </Button>
              </Box>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default PlanAccordion;
