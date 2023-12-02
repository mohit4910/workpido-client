import {
  Box,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const CreateGigPopup = ({ trigger, body, hasImage = true, arrowColor }) => {
  return (
    <>
      <Popover
        placement="right"
        offset={[0, 48]}
        arrowSize={20}
        trigger="hover"
      >
        <PopoverTrigger>{trigger}</PopoverTrigger>
        <PopoverContent w={64}>
          <PopoverArrow bgColor={arrowColor ?? "#FFF"} />
          <PopoverBody p={0}>
            {hasImage ? (
              <VStack
                w={"full"}
                h={32}
                p={4}
                bgColor={"#60a343"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Image src="/docs.png" width={16} objectFit={"contain"} />
              </VStack>
            ) : null}
            <Box p={4} bgColor={"#FFF"}>
              {body}
            </Box>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default CreateGigPopup;
