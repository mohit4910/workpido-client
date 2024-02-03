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

const GigAccordion = ({ children, step, title, isDisabled }) => {
  return (
    <>
      <AccordionItem
        border={"none"}
        my={0}
        py={0}
        overflowY={"visible"}
        isDisabled={isDisabled}
      >
        {({ isExpanded }) => (
          <>
            <AccordionButton
              borderBottom={isExpanded ? "1px solid" : "0.5px solid"}
              py={4}
              w={["full", "3xl", "4xl"]}
              rounded={0}
              borderBottomColor={"gray.100"}
              bgColor={"#FFF"}
            >
              <HStack w={"full"} gap={8}>
                <Box
                  boxSize={"10"}
                  rounded={"full"}
                  display={"grid"}
                  placeContent={"center"}
                  bgColor={isExpanded ? "brand.primary" : "facebook.100"}
                >
                  <Text
                    fontSize={"md"}
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
              <Box w={["full", "3xl", "4xl"]} pt={8} bgColor={"#FFF"}>
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
