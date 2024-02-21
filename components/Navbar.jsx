"use client";

import {
  ChevronDownIcon,
  ChevronRightIcon,
  CloseIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Collapse,
  Container,
  Flex,
  HStack,
  Hide,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputRightAddon,
  InputRightElement,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Show,
  Stack,
  Text,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import logo from "../assets/logo-w.png";
import AppModal from "./AppModal";
import SignupModal from "./SignupModal";
import SigninModal from "./SigninModal";
import useAuth from "@/hooks/useAuth";
import { MoneyRecive, ShoppingCart } from "iconsax-react";
import NavAvatar from "./NavAvatar";
import { useEffect, useState } from "react";
import { API } from "@/lib/api";
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const { isLoggedIn, user, currentRole, onLogout, onChangeRole } = useAuth();
  const { push } = useRouter();

  const [loggedIn, setLoggedIn] = useState(null);
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState([]);
  const [wallet, setWallet] = useState(0)

  useEffect(() => {
    (async () => {
      try {
        const res = await API.getAllCategories();
        setCategories(res);
        sessionStorage.setItem("categories", JSON.stringify(res));
      } catch (error) {
        toast.warn("Couldn't fetch categories");
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const res = await API.wallet();
        setWallet(res);
      } catch (error) {
        toast.warn("Couldn't fetch wallet balance");
      }
    })();
  }, []);

  useEffect(() => {
    setLoggedIn(isLoggedIn);
  }, [isLoggedIn]);

  return (
    <Box bg={"#FFF"} color={"#111"}>
      <Flex
        minH={"60px"}
        p={4}
        px={[4, 16, "7%"]}
        borderBottom={"0.75px"}
        borderStyle={"solid"}
        borderColor={"#E2E2E2"}
      >
        <Container maxW={["full", "3xl", "5xl", "7xl"]}>
          <HStack w={"full"} justifyContent={"space-between"}>
            <Flex
              flex={{ base: 1, md: "auto" }}
              ml={{ base: -2 }}
              display={{ base: "flex", md: "none" }}
            >
              <IconButton
                onClick={onToggle}
                icon={
                  isOpen ? (
                    <CloseIcon w={3} h={3} />
                  ) : (
                    <HamburgerIcon w={5} h={5} />
                  )
                }
                variant={"ghost"}
                aria-label={"Toggle Navigation"}
              />
            </Flex>
            <Flex flex={{ base: 1 }} justifyContent={["start"]}>
              <Flex alignItems={"center"} justifyContent={"flex-start"}>
                <Link href={"/"}>
                  <Image
                    // textAlign={useBreakpointValue({ base: "center", md: "left" })}
                    fontFamily={"heading"}
                    color={useColorModeValue("gray.800", "white")}
                    src={logo}
                    // className="h-auto w-30"
                    height={32}
                    alt={"workpido"}
                  />
                </Link>
                <Link href={"/"}>
                  <span
                    className="ml-0.5 text-2xl font-bold tracking-wider"
                    style={{ color: "#333" }}
                  >
                    WORKPIDO
                  </span>
                </Link>
                <Hide below="md">
                  <InputGroup size={"sm"} ml={4}>
                    <Input
                      w={"xs"}
                      bgColor={"#FFF"}
                      color={"#000"}
                      placeholder="Search"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      py={4}
                    />
                    <InputRightAddon
                      children={"Search"}
                      py={4}
                      bgColor={"brand.primary"}
                      color={"#FFF"}
                      cursor={"pointer"}
                      onClick={() => push(`./search?search=${search}`)}
                    />
                  </InputGroup>
                </Hide>
              </Flex>
            </Flex>

            {loggedIn == null ? null : loggedIn == false ? (
              <Stack
                flex={{ base: 1, md: 0 }}
                justify={"flex-end"}
                direction={"row"}
                spacing={6}
              >
                <HStack>
                  <SigninModal />
                  <SignupModal />
                </HStack>

                <Button
                  as={"a"}
                  fontSize={"sm"}
                  fontWeight={400}
                  variant={"link"}
                  href={"/for-freelancers"}
                  color={"#111"}
                >
                  Are you a freelancer?
                </Button>
              </Stack>
            ) : (
              <Stack
                flex={{ base: 1, md: 0 }}
                justify={"flex-end"}
                direction={"row"}
                spacing={6}
                color={"#000"}
              >
                <Hide below="md">
                  <Button
                    as={"a"}
                    fontSize={"sm"}
                    fontWeight={400}
                    variant={"link"}
                    _hover={"none"}
                    href={"/manage-gigs"}
                    color={"#111"}
                  >
                    Gigs
                  </Button>
                </Hide>
                <Hide below="md">
                  <Button
                    as={"a"}
                    fontSize={"sm"}
                    fontWeight={400}
                    variant={"link"}
                    _hover={"none"}
                    href={"/orders"}
                    color={"#111"}
                  >
                    Orders
                  </Button>
                </Hide>
                <Hide below="md">
                  <Button
                    as={"a"}
                    fontSize={"sm"}
                    fontWeight={400}
                    variant={"link"}
                    _hover={"none"}
                    href={"/inbox/me"}
                    color={"#111"}
                  >
                    Chat
                  </Button>
                </Hide>
                <Hide below="md">
                  <HStack display={["none", "flex"]}>
                    <MoneyRecive size="24" color="#F4CE14" />
                    <Text fontSize={"sm"}>${wallet}</Text>
                  </HStack>
                </Hide>
                {currentRole == "buyer" ? (
                  <Hide below="md">
                    <IconButton
                      p={0}
                      variant={"link"}
                      href={"#"}
                      icon={<ShoppingCart size="24" color="#FAFAFA" />}
                    />
                  </Hide>
                ) : null}
                <NavAvatar
                  user={user}
                  currentRole={currentRole}
                  onLogout={onLogout}
                  onChangeRole={(role) => onChangeRole(role)}
                />
              </Stack>
            )}
          </HStack>
        </Container>
      </Flex>

      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        // minH={"60px"}
        // py={1}
        // py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Container maxW={["full", "3xl", "5xl", "7xl"]}>
          <DesktopNav categories={categories} />
        </Container>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav categories={categories} />
      </Collapse>
    </Box>
  );
}

const DesktopNav = ({ categories }) => {
  const linkColor = useColorModeValue("gray.800", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (

    <Flex
      direction={"row"}
      justify={"space-between"}
      w={"full"}
      overflowX="hidden"
      display={["none", "flex"]}
    >
      {categories?.map((navItem, i) => (
        <Box
          key={i}
          justifyContent="space-around"
          alignItems="center"
          display="flex"
          w="full"
          marginX="auto"
        >
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Center
                as="a"
                py={2}
                pt={3}
                href={
                  navItem?.frontendLink ??
                  `/category/${navItem?.id}`
                }
                fontSize={"xs"}
                fontWeight={400}
                // borderRight={`${categories?.length - 1 !== i && "1px"}`}
                // borderColor={"gray.300"}
                color={linkColor}
                borderBottom={"3px solid transparent"}
                _hover={{
                  textDecoration: "none",
                  color: "#177de5",
                  borderBottom: "3px solid #177de5",
                }}
                // flex="1"
                w={"full"}
                mx={"auto"}
              >
                <Center
                  w={"full"}
                  whiteSpace={"nowrap"}
                  borderRight={`${categories?.length - 1 !== i && "1px"}`}
                  borderColor={"gray.300"}
                >
                  {navItem.title}
                </Center>
              </Center>
            </PopoverTrigger>

            {navItem?.subCategories?.length ? (
              <PopoverContent
                border={"1px"}
                borderColor="gray.400"
                bg={popoverContentBgColor}
                py={4}
                rounded={"none"}
                minW={"xs"}
                w={navItem?.subCategories?.length > 5 ? "md" : "auto"}
              >
                <Stack
                  w={["full", navItem?.subCategories?.length > 5 ? "md" : "xs"]}
                  gap={0}
                  direction={
                    navItem?.subCategories?.length > 5 ? "row" : "column"
                  }
                  alignItems={"flex-start"}
                  justifyContent={"flex-start"}
                  flexWrap={"wrap"}
                >
                  {navItem?.subCategories?.map((child, key) => (
                    <DesktopSubNav
                      inheritedWidth={
                        navItem?.subCategories?.length > 5 ? "50%" : "full"
                      }
                      key={key}
                      hasBorder={key % 2 === 0}
                      href={child?.frontendLink}
                      {...child}
                    />
                  ))}
                </Stack>
              </PopoverContent>
            ) : null}
          </Popover>
        </Box>
      ))}
    </Flex>
  );
};

const DesktopSubNav = ({ title, frontendLink, inheritedWidth, hasBorder }) => {
  return (
    <Box
      as="a"
      href={frontendLink ?? `/gigs/${title?.toLowerCase()?.replace(/ /g, "-")}`}
      role={"group"}
      display={"block"}
      px={6}
      py={1}
      w={inheritedWidth ?? "full"}
      _hover={{ color: "blue.400", borderLeft: "3px solid #177de5" }}
      borderRight={hasBorder ? "1px" : "none"}
      borderRightColor={"#E2E2E2"}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text transition={"all .3s ease"} _groupHover={{ color: "blue.400" }}>
            {title}
          </Text>
          {/* <Text fontSize={"sm"}>{subLabel}</Text> */}
        </Box>
      </Stack>
    </Box>
  );
};

const MobileNav = ({ categories }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {categories?.map((navItem, key) => (
        <MobileNavItem key={key} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ id, title, subCategories, frontendLink }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={subCategories && onToggle}>
      <Box
        py={2}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
          as="a"
          href={
            frontendLink ?? `/category/${id}`
          }
        >
          {title}
        </Text>
        {subCategories && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {subCategories?.length
            ? subCategories.map((child, key) => (
                <Box as="a" key={key} py={2} href={child.frontendLink ?? `/gigs/${child?.title?.toLowerCase()?.replace(/ /g, "-")}`}>
                  {child.title}
                </Box>
              ))
            : null}
        </Stack>
      </Collapse>
    </Stack>
  );
};
