"use client";
import GigAccordion from "@/components/GigAccordion";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const page = () => {
  return (
    <>
      <Box p={[4, 8, 12]}>
        <Text fontWeight={"bold"} fontSize={"2xl"}>
          Create New Gig
        </Text>
        <br />
        <br />

        <Box w={["full", "3xl", "4xl"]}>
          <Accordion allowMultiple>
            <GigAccordion step={1} title={"Title & Category"}>
              <Text>Text Inside Gig Accordion</Text>
            </GigAccordion>

            <GigAccordion step={2} title={"Description & Files"}>
              <Text>Text Inside Gig Accordion</Text>
            </GigAccordion>

            <GigAccordion step={3} title={"Pricing"}>
              <Text>Text Inside Gig Accordion</Text>
            </GigAccordion>

            <GigAccordion step={4} title={"Frequently Asked Questions (FAQs)"}>
              <Text>Text Inside Gig Accordion</Text>
            </GigAccordion>
          </Accordion>
          <HStack w={"full"} justifyContent={"flex-end"} mt={8}>
            <Button>Cancel</Button>
            <Button isDisabled colorScheme="whatsapp">Submit for Review</Button>
          </HStack>
        </Box>
      </Box>
    </>
  );
};

export default page;
