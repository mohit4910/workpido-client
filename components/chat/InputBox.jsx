"use client";
import React, { useState } from "react";
import {
  Input,
  Button,
  Flex,
  HStack,
  useDisclosure,
  Modal,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
} from "@chakra-ui/react";
import { BsPaperclip } from "react-icons/bs";
import { VscSend } from "react-icons/vsc";
import FileDropzone from "../FileDropzone";

export const InputBox = ({ addMessage }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [input, setInput] = useState("");
  const [files, setFiles] = useState(null);

  const handleSubmit = () => {
    if (input.trim() !== "") {
      addMessage({ text: input, files: files });
      setInput("");
      onClose();
    }
  };

  return (
    <>
      <HStack pt="4" borderTop={"1px"}>
        <BsPaperclip
          size={24}
          color={"#999"}
          cursor={"pointer"}
          onClick={onOpen}
        />
        <Input
          variant="unstyled"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <VscSend onClick={handleSubmit} cursor={"pointer"} size={24} />
      </HStack>

      <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size={"2xl"}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Upload Files</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FileDropzone onUpload={(attachments) => setFiles(attachments)} />
            <br />
            <Input
              variant={"flushed"}
              placeholder="Add caption"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </ModalBody>
          <ModalFooter>
            <HStack justifyContent={"flex-end"}>
              <Button colorScheme={"blue"} onClick={handleSubmit}>
                Send
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
