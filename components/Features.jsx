"use client";

import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

// Replace test data with your own
const features = [
  {
    id: 1,
    title: "Scaling Made Easy",
    text: "Find professional talent to boost your conversion, sales, and traffic.",
  },
  {
    id: 2,
    title: "Outsource & Save (up to 87%!)",
    text: "Dramatically reduce your expenses with fixed-price freelance services for every budget.",
  },
  {
    id: 3,
    title: "Focus on Priorities",
    text: " Spend up to 75% less time on business tasks and focus on what really matters for growth.",
  },
  {
    id: 4,
    title: "Scaling Made Easy",
    text: "Find professional talent to boost your conversion, sales, and traffic.",
  },
  {
    id: 5,
    title: "Outsource & Save (up to 87%!)",
    text: "Dramatically reduce your expenses with fixed-price freelance services for every budget.",
  },
  {
    id: 6,
    title: "Focus on Priorities",
    text: " Spend up to 75% less time on business tasks and focus on what really matters for growth.",
  },
];

export default function Features() {
  return (
    <Box p={4} mt={8}>
      <Container maxW={"6xl"} mt={10}>
        <HStack align={"top"} mb={8}>
          <VStack align={"start"}>
            <Text fontWeight={600} fontSize={26}>
              {"Intelligent business solutions for entrepreneurs"}
            </Text>
          </VStack>
        </HStack>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {features.map((feature, key) => (
            <HStack key={key} align={"top"}>
              <Box color={"green.400"} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={"start"}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={"gray.600"}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
