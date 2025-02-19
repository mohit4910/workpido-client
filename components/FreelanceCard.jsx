import { Box, Image, Text, Button, Flex, Icon } from "@chakra-ui/react";
import { FaBriefcase, FaStar } from "react-icons/fa";

const FreelanceCard = ({ image, name, rating, desc, button_text,experties }) => {
  return (
    <Box
      maxW="sm"
      bg="white"
      shadow="lg"
      rounded="2xl"
      p={5}
      borderWidth={1}
      borderColor="gray.200"
      _hover={{ transform: "scale(1.05)", transition: "0.3s" }}
    >
      <Flex alignItems="center" mb={4}>
        <Image
          src={image}
          alt="Freelancer"
          boxSize="16"
          borderRadius="full"
          border="2px solid"
          borderColor="gray.300"
          mr={4}
        />
        <Box>
          <Text fontSize="lg" fontWeight="semibold">
            {name}
          </Text>
          <Flex alignItems="center" color="gray.500" fontSize="sm">
            <Icon as={FaBriefcase} mr={1} /> {experties}
          </Flex>
        </Box>
      </Flex>

      <Text fontSize="sm" color="gray.600" mb={3}>
        {desc}
      </Text>

      <Flex gap={1} mb={4}>
        {[...Array(rating)].map((_, index) => (
          <Icon key={index} as={FaStar} color="yellow.500" />
        ))}
      </Flex>

      <Button width="full" colorScheme="blue">
       {button_text}
      </Button>
    </Box>
  );
};

export default FreelanceCard;
