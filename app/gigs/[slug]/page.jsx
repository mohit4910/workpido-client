"use client";
import React, { useState, useEffect } from "react";
import GigCard from "@/components/GigCard";
import { API } from "@/lib/api";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  HStack,
  SimpleGrid,
  Stack,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { toast } from "react-toastify";
import GigFilters from "@/components/GigFilters";
import { useRouter, useSearchParams } from "next/navigation";
import { IoGridSharp } from "react-icons/io5";
import { FaList } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";

const Gigs = ({ params }) => {
  const { slug } = params;
  const queryParams = useSearchParams();
  const filters = queryParams.entries();

  const [gigs, setGigs] = useState([]);
  const [layout, setLayout] = useState("grid");
  const [sort, setSort] = useState("latest");

  const [services, setServices] = useState([]);
  const [category, setCategory] = useState({ title: "", id: "" });

  const readData = async (query) => {
    try {
      const res = await API.getGigs(slug, query);
      setGigs(res);
    } catch (error) {
      toast.error("Couldn't fetch Gigs");
    }
  };

  const getServices = async () => {
    try {
      const res = await API.getSubcategoryServices(
        slug?.replace(/-/g, " ")?.toLowerCase()
      );
      setServices(res);
    } catch (error) {
      console.log("There was an error fetching services");
      console.log(error);
    }
  };

  const findCategory = (data, target) => {
    if(!data) return
    for (const category of data) {
      if (category.title === target) {
        return { title: category.title, id: category.id };
      }

      if (category.subCategories) {
        for (const subCategory of category.subCategories) {
          if (subCategory.title === target) {
            return { title: category.title, id: category.id };
          }

          const result = findCategory(subCategory.subCategories, target);
          if (result) {
            return result;
          }
        }
      }
    }

    return null;
  };

  useEffect(() => {
    let existingFilters = {};
    for (const [key, value] of filters) {
      existingFilters[key] = value;
    }
    const queryString = new URLSearchParams(existingFilters);
    readData(queryString ? queryString?.toString() : null);
  }, [queryParams]);

  useEffect(() => {
    getServices();
    const categories = JSON.parse(sessionStorage.getItem("categories"));
    const res = findCategory(categories, slug?.replace(/-/g, " "));
    setCategory(res);
  }, []);

  return (
    <>
      <Container maxW={["full", "3xl", "5xl", "7xl"]}>
        <Box p={["4, 8, 16"]} my={8}>
          <HStack mb={2}>
            <Text
              fontSize={"sm"}
              color={"gray.600"}
              as={"a"}
              href={`/category/${category?.id}`}
            >
              {category?.title}
            </Text>
            <Text fontSize={"sm"} color={"gray.600"}>
              {">"}
            </Text>
            <Text fontSize={"sm"} color={"gray.600"}>
              {slug?.replace(/-/g, " ")}
            </Text>
          </HStack>
          <Text
            fontSize={["2xl", 26]}
            fontWeight={600}
            textTransform={"capitalize"}
          >
            {slug?.replace(/-/g, " ")}
          </Text>
          <Flex
            w={"full"}
            mt={3}
            mb={6}
            gap={4}
            direction={"row"}
            overflowX={"scroll"}
            className="hide-scrollbar"
          >
            {services?.map((item, key) => (
              <Button
                key={key}
                bgColor={"#FFF"}
                border={"1px"}
                borderColor={"#e2e2e2"}
                fontWeight={"normal"}
                fontSize={["xs", "sm"]}
                py={1}
                textTransform={"capitalize"}
                size={["sm", "md"]}
                onClick={() => readData(`service=${item?.id}`)}
              >
                {item?.title}
              </Button>
            ))}
          </Flex>
          <br />
          <HStack w={"full"} justifyContent={"space-between"}>
            <Text fontSize={"sm"} color={"gray.600"}>
              {gigs?.length} {gigs?.length == 1 ? "service" : "services"}{" "}
              available
            </Text>
            <HStack gap={4}>
              <HStack gap={2}>
                <IconButton
                  icon={<IoGridSharp fontSize={"12px"} />}
                  rounded={0}
                  p={0}
                  size={"xs"}
                  variant={"ghost"}
                  onClick={() => setLayout("grid")}
                  color={layout == "grid" ? "twitter.500" : "black"}
                />
                <IconButton
                  icon={<FaList fontSize={"12px"} />}
                  rounded={0}
                  p={0}
                  size={"xs"}
                  variant={"ghost"}
                  onClick={() => setLayout("stack")}
                  color={layout == "stack" ? "twitter.500" : "black"}
                />
              </HStack>
              <HStack gap={0}>
                <Text
                  fontSize={"xs"}
                  fontWeight={"semibold"}
                  color={"gray.800"}
                >
                  Sort by
                </Text>
                <Menu>
                  <MenuButton
                    as={Button}
                    variant={"ghost"}
                    size={"xs"}
                    fontSize={"xs"}
                    color={"twitter.500"}
                    rightIcon={<BsChevronDown />}
                  >
                    {sort}
                  </MenuButton>
                  <MenuList>
                    <MenuItem
                      fontSize={"xs"}
                      onClick={() => setSort("recommended")}
                    >
                      recommended
                    </MenuItem>
                    <MenuItem fontSize={"xs"} onClick={() => setSort("latest gigs")}>
                      latest gigs
                    </MenuItem>
                  </MenuList>
                </Menu>
              </HStack>
            </HStack>
          </HStack>
          <Stack
            w={"full"}
            spacing={8}
            direction={["column", "row"]}
            alignItems={"flex-start"}
          >
            <Box w={["full", "xs"]} pt={6}>
              <GigFilters category={slug} />
            </Box>
            <Flex
              w={"full"}
              justify={"flex-start"}
              gap={8}
              flexWrap={"wrap"}
              pt={layout == "stack" ? 6 : 0}
            >
              {gigs?.length ? (
                gigs?.map((gig, key) => (
                  <GigCard key={key} gig={gig} layout={layout} />
                ))
              ) : (
                <Box
                  mt={6}
                  p={4}
                  rounded={4}
                  w={"full"}
                  bgColor={"#fff"}
                  boxShadow={"base"}
                >
                  <Text fontSize={"xs"} textAlign={"center"}>
                    We could not find any Gigs with your applied filters. Please
                    consider changing or removing your filters.
                  </Text>
                </Box>
              )}
            </Flex>
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default Gigs;
