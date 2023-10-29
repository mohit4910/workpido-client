'use client'
import { Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const error = () => {
  return (
    <VStack
        w={"full"}
        minH={"90vh"}
        alignItems={"center"}
        justifyContent={"center"}
        p={[8]}
      >
        <Text fontSize={"2xl"} fontWeight={"bold"}>
          An Error Occured On Our End 
        </Text>
        <Image
          src="/error.webp"
          boxSize={["sm", "xl"]}
          objectFit={"contain"}
        />
      </VStack>
  )
}

export default error