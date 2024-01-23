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
const features = Array.apply(null, Array(8)).map(function (x, i) {
  return {
    id: i,
    title: "Lorem ipsum dolor sit amet",
    text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam.",
  };
});

export default function AboutUs() {
  return (
    <Container maxW={["full", "3xl", "5xl", "7xl"]}>
      <Box p={4} mt={12}>
        <Stack spacing={2} maxW={"3xl"} textAlign={"center"}>
          <Heading fontSize={"3xl"} textAlign={("center", "left")}>
            Workpido Professional Services
          </Heading>
          <Text
            color={"gray.600"}
            fontSize={"md"}
            textAlign={("center", "left")}
          >
            Getting things done has never been easier.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <HStack align={"top"}>
            <VStack align={"start"}>
              <Text fontWeight={600}></Text>
              <Text
                color={"gray.600"}
              >{`Want to save time and money without compromising on quality? That's what we're here for.

We built Kwork to help independent and results-oriented entrepreneurs like you find talented freelancers for all your business needs.

On Kwork, thousands of talented freelancers compete for your business by listing their services in the Catalog. These services are sold like convenient grab-and-go items in a real store. On our platform, there are no confusing and costly hourly rates.

There's also no more haggling over price and deadlines. Prices, deadlines, and services included are specified in advance, saving you time, money, and energy.

You can shop freelance services with confidence on Kwork. If anything ever goes wrong, you're protected by our 100% Money Back Guarantee, one-of-a-kind Buyer Protection Program, and incredible Support Team.

Why wait? Get things done today!`}</Text>
            </VStack>
          </HStack>
          <HStack align={"top"}>
            <VStack align={"start"}>
              <Text fontWeight={600}></Text>
              <Text
                color={"gray.600"}
              >{`Have a unique job, or too busy to browse for freelancers? Post a buyer request in our tailor-made Exchange section!

              Just provide a description, delivery time, and budget. Kwork's seasoned freelancers will send in bespoke offers customized to your task. Best suited for complex or large projects.
              
              The quality of offers on Kwork is unique. Thanks to a proprietary feature on our platform, you don't need to sift through a sea of generic offers you might receive on other freelance platforms. Since Kwork professionals are rewarded for putting special thought and effort into every offer, you get to choose from the crème de la crème.
              
              Have a project you need to check off? Post your request today!`}</Text>
            </VStack>
          </HStack>
        </SimpleGrid>
      </Box>
    </Container>
  );
}
