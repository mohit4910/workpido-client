"use client";
import ZoomableImage from "@/components/ZoomableImage";
import { API_BASE_URL } from "@/lib/constants";
import {
  Box,
  Container,
  HStack,
  Hide,
  Image,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

const ZoomImage = ({ src, alt, link, width, height, fontSize }) => {
  const [zoomed, setZoomed] = useState(false);

  return (
    <Box
      borderRadius="sm"
      overflow="hidden"
      className="catalog"
      transition="0.3s ease-in-out"
      _hover={{ shadow: "xl", brightness: "0.2" }}
      cursor={"pointer"}
      as={"a"}
      href={link ?? "#"}
      pos={"relative"}
      width={width ?? "full"}
      h={height ?? "48"}
    >
      <Box textDecoration="none" _hover={{ textDecoration: "none" }}>
        <Image
          w={"inherit"}
          h={"full"}
          src={src}
          alt={alt}
          objectFit="cover"
          transform={zoomed ? "scale(1.05)" : "scale(1.0)"}
          transition="0.3s ease-in-out"
        />
      </Box>
      <Box
        pos={"absolute"}
        w={"full"}
        h={"100%"}
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgGradient="linear(blackAlpha.50 10%, blackAlpha.200 30%, blackAlpha.400 40%, blackAlpha.500 60%, blackAlpha.700 100%)"
        p={4}
        display={"flex"}
        flexDirection={"row"}
        alignItems={"flex-end"}
        justifyContent={"flex-start"}
        onMouseEnter={() => setZoomed(true)}
        onMouseLeave={() => setZoomed(false)}
      >
        <Text fontSize={fontSize ?? "lg"} color={"#FFF"}>
          {alt}
        </Text>
      </Box>
    </Box>
  );
};

const page = ({ params }) => {
  const { id } = params;
  const [data, setData] = useState(null);

  useEffect(() => {
    const categories = JSON.parse(sessionStorage.getItem("categories"));
    const category = categories?.find((item) => item?.id == id);
    setData(category);
  }, []);

  return (
    <>
      <Box p={[4, 8, 16]} bgColor={"#FFF"}>
        <Container maxW={["full", "3xl", "5xl", "7xl"]}>
          <Stack direction={["column", "row"]} gap={4}>
            <Hide below="md">
              <Box w={"xs"}>
                <Text fontSize={"xl"} fontWeight={"medium"}>
                  {data?.title}
                </Text>
                <br />
                <VStack
                  gap={2}
                  alignItems={"flex-start"}
                  justifyContent={"flex-start"}
                >
                  {data &&
                    data?.subCategories?.map((data, key) => (
                      <Text as={"a"} href={data?.frontendLink} key={key}>
                        {data?.title}
                      </Text>
                    ))}
                </VStack>
              </Box>
            </Hide>
            <Box flexGrow={1}>
              <Text fontWeight={'medium'} fontSize={['xl', '3xl']}>{data?.title}</Text>
              <Text>{data?.title}</Text>
              <br />
              <Stack
                py={2}
                direction={["column", "row"]}
                alignItems={"center"}
                justifyContent={"center"}
                gap={4}
              >
                {data &&
                  data?.subCategories
                    ?.slice(0, 3)
                    ?.map((data, key) => (
                      <ZoomImage
                        alt={data?.title}
                        src={
                          API_BASE_URL?.replace("/api", "") + data?.cover?.url
                        }
                        link={`/gigs/${data?.title
                          ?.toLowerCase()
                          ?.replace(/ /g, "-")}`}
                        width={["100%", "xs"]}
                      />
                    ))}
              </Stack>
              <Stack
                py={2}
                direction={["row"]}
                alignItems={"center"}
                justifyContent={"center"}
                gap={4}
                flexWrap={"wrap"}
              >
                {data &&
                  data?.subCategories
                    ?.slice(3, data?.subCategories?.length)
                    ?.map((data, key) => (
                      <ZoomImage
                        alt={data?.title}
                        src={
                          API_BASE_URL?.replace("/api", "") + data?.cover?.url
                        }
                        link={`/gigs/${data?.title
                          ?.toLowerCase()
                          ?.replace(/ /g, "-")}`}
                        width={["40vw", "23.75%"]}
                        height={["36", "36"]}
                        fontSize={'sm'}
                      />
                    ))}
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default page;
