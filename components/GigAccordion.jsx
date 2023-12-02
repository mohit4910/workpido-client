"use client";

import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  HStack,
  Text,
  Box,
} from "@chakra-ui/react";

const GigAccordion = ({ children, step, title }) => {
  return (
    <>
      <AccordionItem border={"none"} my={4} py={2} overflowY={"visible"}>
        {({ isExpanded }) => (
          <>
            <AccordionButton
              borderBottom={isExpanded ? "1px" : "0"}
              py={4}
              w={["full", "3xl", "4xl"]}
              rounded={"6"}
              boxShadow={"base"}
              bgColor={"#FFF"}
            >
              <HStack w={"full"} gap={8}>
                <Box
                  boxSize={"12"}
                  rounded={"full"}
                  display={"grid"}
                  placeContent={"center"}
                  bgColor={isExpanded ? "yellow.500" : "facebook.100"}
                >
                  <Text
                    fontSize={"lg"}
                    fontWeight={"semibold"}
                    color={isExpanded ? "#FFF" : "#333"}
                  >
                    {step}
                  </Text>
                </Box>
                <Text fontSize={"lg"} fontWeight={"medium"}>
                  {title}
                </Text>
              </HStack>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel p={0} overflowY={"visible"}>
              <Box w={["full", "3xl", "4xl"]} px={6} py={8} bgColor={"#FFF"}>
                {children}
              </Box>
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </>
  );
};

export default GigAccordion;
