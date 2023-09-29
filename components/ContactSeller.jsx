import { Button, Text } from "@chakra-ui/react";
import React from "react";

const ContactSeller = () => {
  return (
    <Button
      className="mx-2 w-full px-4 py-8 text-base flex flex-col"
      as={"a"}
      color={"white"}
      bg={"brand.primary"}
      href={"#"}
      _hover={{
        bg: "green.300",
      }}
    >
      Contact Seller
      <Text className="text-xs text-white font-light my-1">
        Or order a custom work
      </Text>
    </Button>
  );
};

export default ContactSeller;
