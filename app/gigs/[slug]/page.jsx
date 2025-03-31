"use client";
import React, { useState, useEffect, useMemo } from "react";
import GigCard from "@/components/GigCard";
import { API } from "@/lib/api";
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
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

  // State Management
  const [gigs, setGigs] = useState([]);
  const [layout, setLayout] = useState("grid");
  const [sort, setSort] = useState("latest");
  const [services, setServices] = useState([]);
  const [category, setCategory] = useState({ title: "", id: "" });

  // Memoized Filters
  const existingFilters = useMemo(() => {
    const filters = {};
    for (const [key, value] of queryParams.entries()) {
      filters[key] = value;
    }
    filters.subcategory = slug; // Dynamically add subcategory
    return new URLSearchParams(filters).toString();
  }, [queryParams, slug]);

  // Fetch Gigs Based on Filters
  const fetchGigs = async (query) => {
    try {
      const res = await API.getGigs(slug, query);
      setGigs(res || []);
    } catch (error) {
      toast.error("Couldn't fetch Gigs");
    }
  };

  // Fetch Services Based on Slug
  const fetchServices = async () => {
    try {
      const res = await API.getSubcategoryServices(
        slug?.replace(/-/g, " ")?.toLowerCase()
      );
      setServices(res || []);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  // Find Category Helper
  const findCategory = (data, target) => {
    if (!data) return null;

    for (const category of data) {
      if (category.title === target) {
        return { title: category.title, id: category.id };
      }
      if (category.subCategories) {
        const result = findCategory(category.subCategories, target);
        if (result) return result;
      }
    }
    return null;
  };

  // Initial Data Fetch
  useEffect(() => {
    fetchGigs(existingFilters);
    fetchServices();

    // Load Categories from Session Storage
    const categories = JSON.parse(sessionStorage.getItem("categories")) || [];
    const matchedCategory = findCategory(categories, slug?.replace(/-/g, " "));
    setCategory(matchedCategory || { title: "", id: "" });
  }, [existingFilters, slug]);

  return (
    <Container maxW={["full", "3xl", "5xl", "7xl"]}>
      <Box p={[4, 8, 16]} my={8}>
        {/* Breadcrumbs */}
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

        {/* Page Title */}
        <Text
          fontSize={["2xl", 26]}
          fontWeight={600}
          textTransform={"capitalize"}
        >
          {slug?.replace(/-/g, " ")}
        </Text>

        {/* Service Buttons */}
        <Flex
          w={"full"}
          mt={3}
          mb={6}
          gap={4}
          direction={"row"}
          overflowX={"scroll"}
          className="hide-scrollbar"
        >
          {services?.map((item) => (
            <Button
              key={item.id}
              bgColor={"#FFF"}
              border={"1px"}
              borderColor={"#e2e2e2"}
              fontWeight={"normal"}
              fontSize={["xs", "sm"]}
              py={1}
              textTransform={"capitalize"}
              size={["sm", "md"]}
              onClick={() => fetchGigs(`service=${item?.id}`)}
            >
              {item?.title}
            </Button>
          ))}
        </Flex>

        {/* Filters & Sorting */}
        <HStack w={"full"} justifyContent={"space-between"} mb={4}>
          <Text fontSize={"sm"} color={"gray.600"}>
            {gigs?.length} {gigs?.length === 1 ? "service" : "services"}{" "}
            available
          </Text>
          <HStack gap={4}>
            {/* Layout Toggle */}
            <HStack gap={2}>
              <IconButton
                icon={<IoGridSharp fontSize={"12px"} />}
                size={"xs"}
                variant={"ghost"}
                onClick={() => setLayout("grid")}
                color={layout === "grid" ? "twitter.500" : "black"}
              />
              <IconButton
                icon={<FaList fontSize={"12px"} />}
                size={"xs"}
                variant={"ghost"}
                onClick={() => setLayout("stack")}
                color={layout === "stack" ? "twitter.500" : "black"}
              />
            </HStack>

            {/* Sort Dropdown */}
            <HStack gap={0}>
              <Text fontSize={"xs"} fontWeight={"semibold"} color={"gray.800"}>
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
                    Recommended
                  </MenuItem>
                  <MenuItem fontSize={"xs"} onClick={() => setSort("latest")}>
                    Latest Gigs
                  </MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </HStack>
        </HStack>

        {/* Content Layout */}
        <Stack
          w={"full"}
          spacing={8}
          direction={["column", "row"]}
          alignItems={"flex-start"}
        >
          {/* Sidebar Filters */}
          <Box w={["full", "xs"]} pt={6}>
            <GigFilters category={slug} />
          </Box>

          {/* Gigs List */}
          <Flex
            w={"full"}
            justify={"flex-start"}
            gap={8}
            flexWrap={"wrap"}
            pt={layout === "stack" ? 6 : 0}
          >
            {gigs?.length ? (
              gigs?.map((gig) => (
                <GigCard key={gig.id} gig={gig} layout={layout} />
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
  );
};

export default Gigs;
