import { Box, Button, HStack, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import { v4 as uuidv4 } from "uuid"; // Import the uuid library

const QnaBox = ({ faq, onDelete, onQuestionChange, onAnswerChange }) => {
  return (
    <Box
      p={4}
      my={4}
      rounded={"8"}
      bgColor={"blue.50"}
      border={"1px"}
      borderColor={"blue.400"}
    >
      <HStack pb={4} justifyContent={"flex-end"}>
        <Button colorScheme="red" size={"sm"} onClick={() => onDelete(faq.id)}>
          Delete Question
        </Button>
      </HStack>
      <Box>
        <Text fontSize={"sm"} fontWeight={"semibold"}>
          Question
        </Text>
        <Input
          value={faq.question}
          onChange={(e) => onQuestionChange(faq.id, e.target.value)}
          w={"full"}
          fontSize={"lg"}
          bgColor={"#FFF"}
        />
      </Box>
      <br />
      <Box>
        <Text fontSize={"sm"} fontWeight={"semibold"}>
          Answer
        </Text>
        <SunEditor
          height="180px"
          defaultValue={faq.answer}
          onChange={(content) => onAnswerChange(faq.id, content)}
        />
      </Box>
    </Box>
  );
};

const FaqsContainer = ({ data, onUpdate }) => {
  const [faqs, setFaqs] = useState(data || []);

  useEffect(() => {
    onUpdate(faqs);
  }, [faqs]);

  function handleFaqAdd() {
    setFaqs((prevFaqs) => [
      ...prevFaqs,
      {
        id: uuidv4(), // Generate a unique ID for the new FAQ
        question: "",
        answer: "",
      },
    ]);
  }

  function handleFaqDelete(id) {
    setFaqs((prevFaqs) => prevFaqs.filter((faq) => faq.id !== id));
  }

  function handleQuestionChange(id, newQuestion) {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq) =>
        faq.id === id ? { ...faq, question: newQuestion } : faq
      )
    );
  }

  function handleAnswerChange(id, newAnswer) {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq) =>
        faq.id === id ? { ...faq, answer: newAnswer } : faq
      )
    );
  }

  return (
    <>
      {faqs.map((faq) => (
        <QnaBox
          faq={faq}
          key={faq.id}
          onDelete={() => handleFaqDelete(faq.id)}
          onQuestionChange={handleQuestionChange}
          onAnswerChange={handleAnswerChange}
        />
      ))}
      <HStack py={4} justifyContent={"flex-end"}>
        <Button colorScheme="whatsapp" size={"sm"} onClick={handleFaqAdd}>
          Add One Question
        </Button>
      </HStack>
    </>
  );
};

export default FaqsContainer;
