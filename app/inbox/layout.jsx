"use client";
import { Box, Container, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { ContactList } from "@/components/chat/ContactList";

const page = ({ children }) => {
  return (
    <>
      <Box p={[4]} bgColor={"#f6f6f6"}>
        <Container maxW={["full", "4xl", "6xl"]}>
          <Flex
            h={["full", "xl", "2xl"]}
            rounded={"8"}
            boxShadow={"base"}
            overflow={"hidden"}
            bgColor={"#FFF"}
          >
            <ContactList />
            <Box flex="1">
              {children}
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default page;
