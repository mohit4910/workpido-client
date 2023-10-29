'use client'
import { Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const forbidden = () => {
  return (
    <VStack
        w={"full"}
        minH={"90vh"}
        alignItems={"center"}
        justifyContent={"center"}
        p={[8]}
      >
        <Text fontSize={"2xl"} fontWeight={"bold"}>
          403: You are not allowed on this page
        </Text>
        <Image
          src="/not-allowed.webp"
          boxSize={["sm", "xl"]}
          objectFit={"contain"}
        />
      </VStack>
  )
}

export default forbidden