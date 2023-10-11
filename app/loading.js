"use client";

import { CircularProgress, Flex } from "@chakra-ui/react";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <Flex
      height={"100vh"}
      width={"100vw"}
      justifyContent={"center"}
      alignItems="center"
    >
      <CircularProgress isIndeterminate color="brand.primary" />;
    </Flex>
  );
}
