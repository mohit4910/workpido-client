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
      <AccordionItem border={"none"} my={4}>
        {({ isExpanded }) => (
          <>
            <AccordionButton>
              <HStack w={"full"} gap={8}>
                <Box
                  boxSize={"12"}
                  rounded={"full"}
                  display={"grid"}
                  placeContent={"center"}
                  bgColor={isExpanded ? "facebook.500" : "facebook.100"}
                >
                  <Text
                    fontSize={"lg"}
                    fontWeight={"semibold"}
                    color={isExpanded ? "#FFF" : "#333"}
                  >
                    {step}
                  </Text>
                </Box>
                <Text fontSize={"lg"} fontWeight={"bold"}>
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
