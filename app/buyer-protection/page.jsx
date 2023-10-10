"use client";

import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { GiCheckMark } from "react-icons/gi";

const page = () => {
  return (
    <main className="flex flex-col overflow-hidden items-center justify-between min-h-screen">
      {/* Banner */}
      <Flex
        className="relative max-h-[720px]"
        bgImage="url(https://images.pexels.com/photos/16585271/pexels-photo-16585271/free-photo-of-branch-of-pink-flowers-on-the-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)"
        h={{ base: "20vh", md: "35vh" }}
        w={"full"}
        justify="center"
        align="center"
        bgSize={"cover"}
      >
        <Heading className="mb-2 md:text-3xl md:mb-4 text-white text-center">
          Buyer Protection Program
        </Heading>
      </Flex>
      {/* Main Content */}
      <Flex
        flexDirection="column"
        align="center"
        className="my-0 py-[4vh] px-[5vw] mx-auto w-screen lg:w-3/4 lg:container"
      >
        <Box className="p-3">
          <Text>
            {`Workpido’s top priority is buyer satisfaction, which is why we
            strive to provide you with the best freelance services available.`}
          </Text>
          <Text>
            Here are the Five Principles we follow at Workpido to protect the
            interests of our buyers:
          </Text>
        </Box>
        <List>
          <ListItem>
            <Flex flexDirection="column" className="mt-8">
              {/* Image Container */}
              <Flex align="center" gap="15px" className="py-3 my-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32px"
                  height="32px"
                  color="green"
                  fill="currentColor"
                  className="text-green"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                </svg>
                <Heading className="font-normal text-3xl">
                  Buyer Obsession
                </Heading>
              </Flex>
              {/*Details Container*/}
              <Box className="w-full">
                <List>
                  <ListItem className="flex gap-1 mb-2">
                    <ListIcon as={GiCheckMark} color="green.500" />
                    <Text>
                      Workpido strives to provide you uncompromising quality at
                      the lowest prices on the market.
                    </Text>
                  </ListItem>
                  <ListItem className="flex gap-1 mb-2">
                    <ListIcon as={GiCheckMark} color="green.500" />
                    <Text>{`Workpido sellers are required to handle orders in full accordance
                      with Workpido’s terms. Those terms include: following the job
                      description, order requirements, and any agreed terms via the
                      workpido chat on your order page.`}</Text>
                  </ListItem>
                  <ListItem className="flex gap-1 mb-2">
                    <ListIcon as={GiCheckMark} color="green.500" />
                    <Text>
                      Any disputes or disagreements about a workpido description
                      or any communications between you and sellers will be
                      resolved in your favor.
                    </Text>
                  </ListItem>
                  <ListItem className="flex gap-1 mb-2">
                    <ListIcon as={GiCheckMark} color="green.500" />
                    <Text>
                      How to build, maintain, and perfect your ratings
                    </Text>
                  </ListItem>
                </List>
              </Box>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex flexDirection="column" className="mt-6">
              {/* Image Container */}
              <Flex align="center" gap="15px" className="py-3 my-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32px"
                  height="32px"
                  color="green"
                  fill="currentColor"
                  className="text-green"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z" />{" "}
                </svg>
                <Heading className="font-normal text-3xl">
                  Premium Quality
                </Heading>
              </Flex>
              {/*Details Container*/}
              <Box className="w-full">
                <List>
                  <ListItem className="flex gap-1 mb-2">
                    <ListIcon as={GiCheckMark} color="green.500" />
                    <Text>
                      You are entitled to a complete and fully functioning
                      product free of errors, bugs, or any defects that may
                      prevent its full intended use.
                    </Text>
                  </ListItem>
                  <ListItem className="flex gap-1 mb-2">
                    <ListIcon as={GiCheckMark} color="green.500" />
                    <Text>{`Work delivered to you must be as good as or better than the work
                      displayed in the seller’s portfolio.`}</Text>
                  </ListItem>
                </List>
              </Box>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex flexDirection="column" className="mt-6">
              {/* Image Container */}
              <Flex align="center" gap="15px" className="py-3 my-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32px"
                  height="32px"
                  color="green"
                  fill="currentColor"
                  className="text-green"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
                  <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z" />
                  <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z" />
                </svg>
                <Heading className="font-normal text-3xl">On the Dot</Heading>
              </Flex>
              {/*Details Container*/}
              <Box className="w-full">
                <List>
                  <ListItem className="flex gap-1 mb-2">
                    <ListIcon as={GiCheckMark} color="green.500" />
                    <Text>
                      You can cancel an order within 20 minutes of placing it—no
                      questions asked.
                    </Text>
                  </ListItem>
                  <ListItem className="flex gap-1 mb-2">
                    <ListIcon as={GiCheckMark} color="green.500" />
                    <Text>{`Workpido guarantees you a full and automatic refund if a seller
              does not accept an order within 24 hours.`}</Text>
                  </ListItem>
                  <ListItem className="flex gap-1 mb-2">
                    <ListIcon as={GiCheckMark} color="green.500" />
                    <Text>
                      {`Sellers must complete orders on time. If a seller misses a
              deadline, you can cancel the order and instantly receive a full
              refund.`}
                    </Text>
                  </ListItem>
                </List>
              </Box>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex flexDirection="column" className="mt-6">
              {/* Image Container */}
              <Flex align="center" gap="15px" className="py-3 my-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32px"
                  height="32px"
                  color="green"
                  fill="currentColor"
                  className="text-green"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721L8 2.42Zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063.045.041.089.084.132.129.043-.045.087-.088.132-.129 3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398Z"
                  />
                </svg>
                <Heading className="font-normal text-3xl">
                  Always on Your Side
                </Heading>
              </Flex>
              {/*Details Container*/}
              <Box className="w-full">
                <List>
                  <ListItem className="flex gap-1 mb-2">
                    <ListIcon as={GiCheckMark} color="green.500" />
                    <Text>
                      You can send any submitted work back for revision until it
                      meets the order requirements.
                    </Text>
                  </ListItem>
                  <ListItem className="flex gap-1 mb-2">
                    <ListIcon as={GiCheckMark} color="green.500" />
                    <Text>{`If you are not satisfied with the delivery even after multiple
              revisions, you can initiate arbitration for a full refund under
              Workpido’s Money-back Guarantee.`}</Text>
                  </ListItem>
                  <ListItem className="flex gap-1 mb-2">
                    <ListIcon as={GiCheckMark} color="green.500" />
                    <Text>
                      {`If a seller delivers incomplete work or if the work does not
              reflect the standards displayed in their portfolio, the order will
              be canceled immediately. You can choose to receive a full refund,
              in which case the product rights remain with the seller, or a
              partial refund, in which case the product rights are transferred
              to you.`}
                    </Text>
                  </ListItem>
                </List>
              </Box>
            </Flex>
          </ListItem>
          <ListItem>
            <Flex flexDirection="column" className="mt-6 ">
              {/* Image Container */}
              <Flex align="center" gap="15px" className="py-3 my-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32px"
                  height="32px"
                  color="green"
                  fill="currentColor"
                  className="text-green"
                  viewBox="0 0 16 16"
                >
                  <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5ZM9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8Zm1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Z" />
                  <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2ZM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96c.026-.163.04-.33.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1.006 1.006 0 0 1 1 12V4Z" />
                </svg>
                <Heading className="font-normal text-3xl">
                  Trust is Earned
                </Heading>
              </Flex>
              {/*Details Container*/}
              <Box className="w-full">
                <List>
                  <ListItem className="flex gap-1 mb-2">
                    <ListIcon as={GiCheckMark} color="green.500" />
                    <Text>
                      You have the right to leave a review for each order,
                      except after requesting additional services without paying
                      for them.
                    </Text>
                  </ListItem>
                  <ListItem className="flex gap-1 mb-2">
                    <ListIcon as={GiCheckMark} color="green.500" />
                    <Text>{`Cancelations initiated by sellers result in negative reviews.`}</Text>
                  </ListItem>
                  <ListItem className="flex gap-1 mb-2">
                    <ListIcon as={GiCheckMark} color="green.500" />
                    <Text>
                      {`Positive reviews increase a workpido’s ratings, while negative
              reviews reduce them. Workpidos with strong ratings rank higher in
              the Catalog, whereas workpidos with lower ratings are pushed down
              the listings. This ensures that the workpidos you see are always
              fulfilled by top-notch, vetted sellers.`}
                    </Text>
                  </ListItem>
                  <ListItem className="flex gap-1 mb-2">
                    <ListIcon as={GiCheckMark} color="green.500" />
                    <Text>
                      Once you leave a negative review, the seller cannot
                      contact you directly or on the order page without your
                      consent.
                    </Text>
                  </ListItem>
                </List>
              </Box>
            </Flex>
          </ListItem>
        </List>
      </Flex>
      {/* Support Bar */}
      <Flex
        flexDirection="column"
        align="center"
        justify="center"
        className=" bg-[#06703f3e] w-screen p-10 lg:w-3/4 lg:container"
      >
        <Text>Have any questions? Get in touch!</Text>
        <Button
          className="mt-4 w-3/4 md:w-1/2 px-4 py-6 text-sm"
          as={"a"}
          display={"inline-flex"}
          color={"white"}
          bg={"brand.primary"}
          href={"#"}
          _hover={{
            bg: "green.300",
          }}
        >
          Contact Support
        </Button>
      </Flex>
    </main>
  );
};

export default page;
