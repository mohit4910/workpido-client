"use client";
import React, { useEffect, useState } from "react";
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
import { API } from "@/lib/api";
import useAuth from "@/hooks/useAuth";

export const InputBox = ({ addMessage, receiver }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { user } = useAuth();
  const [input, setInput] = useState("");
  const [files, setFiles] = useState(null);

  const handleSubmit = () => {
    if (input.trim() !== "") {
      addMessage({ text: input, files: files });
      setInput("");
      onClose();
    }
  };

  useEffect(() => {
    if (input) {
      isTyping(true);
    } else {
      isTyping(false);
    }
  }, [input]);

  async function isTyping(status) {
    try {
      await API.typingStatus({
        receiver: receiver,
        sender: user?.username,
        isTyping: status,
      });
    } catch (error) {
      console.log("Error while updating typing status");
    }
  }

  return (
    <>
      <HStack pt="4" borderTop={"1px"}>
        <BsPaperclip
          size={24}
          color={"#e2e2e2"}
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
