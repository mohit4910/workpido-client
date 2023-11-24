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
      <AccordionItem
        border={"none"}
        my={4}
        bgColor={"#FFF"}
        py={2}
        rounded={"6"}
        boxShadow={"base"}
      >
        {({ isExpanded }) => (
          <>
            <AccordionButton borderBottom={isExpanded ? '1px' : '0'} pb={isExpanded ? 4 : 2}>
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
            <AccordionPanel pb={4}>{children}</AccordionPanel>
          </>
        )}
      </AccordionItem>
    </>
  );
};

export default GigAccordion;
