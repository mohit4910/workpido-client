"use client";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

export default function AppModal({
  title,
  btnText = "Open Modal",
  children,
  isOpen,
  setIsOpen,
  size
}) {
  const { onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* <Button
        onClick={onOpen}
        cursor={"pointer"}
        display={{ base: "none", md: "inline-flex" }}
        fontSize={"sm"}
        color={"white"}
        bg={"brand.primary"}
        _hover={{
          bg: "green.300",
        }}
      >
        {btnText}
      </Button> */}

      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
        size={size ?? "sm"}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody py={4}>{children}</ModalBody>

          <ModalFooter>
            {/* <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button> */}
            {/* <Button variant="ghost">Secondary Action</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
