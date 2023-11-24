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

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const [loggedIn, setLoggedIn] = useState(null);
  const { isLoggedIn, user, currentRole, onLogout, onChangeRole } = useAuth();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await API.getAllCategories();
        setCategories(res);
      } catch (error) {
        toast.warn("Couldn't fetch categories");
      }
    })();
  }, []);

  useEffect(() => {
    setLoggedIn(isLoggedIn);
  }, [isLoggedIn]);

  return (
    <Box bg={"#333333"} color={"#fff"}>
      <Container maxW={["full", "3xl", "5xl", "7xl"]}>
        <Flex
          minH={"60px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          // borderBottom={1}
          // borderStyle={"solid"}
          // borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"center"}
        >
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
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <Flex as={"a"} href="/" alignItems={"center"}>
              <Image
                // textAlign={useBreakpointValue({ base: "center", md: "left" })}
                fontFamily={"heading"}
                color={useColorModeValue("gray.800", "white")}
                src={logo}
                // className="h-auto w-30"
                height={32}
                alt={"workpido"}
              />
              <span className="ml-0.5 text-2xl font-bold tracking-wider text-white">
                WORKPIDO
              </span>
            </Flex>

            {/* <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex> */}
          </Flex>

          {loggedIn == null ? null : loggedIn == false ? (
            <Stack
              flex={{ base: 1, md: 0 }}
              justify={"flex-end"}
              direction={"row"}
              spacing={6}
            >
              <SigninModal />
              <SignupModal />

              <Button
                as={"a"}
                fontSize={"sm"}
                fontWeight={400}
                variant={"link"}
                href={"/for-freelancers"}
                color="white"
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
            >
              <Hide below="md">
                <Button
                  as={"a"}
                  fontSize={"sm"}
                  fontWeight={400}
                  variant={"link"}
                  _hover={"none"}
                  href={"/manage-gigs"}
                  color="white"
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
                  href={"#"}
                  color="white"
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
                  color="white"
                >
                  Chat
                </Button>
              </Hide>
              <Hide below="md">
                <HStack display={["none", "flex"]}>
                  <MoneyRecive size="24" color="#F4CE14" />
                  <Text fontSize={"sm"} color={"#FFF"}>
                    $1200
                  </Text>
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
        </Flex>
      </Container>
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
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Flex
      direction={"row"}
      justify={"space-between"}
      w={"full"}
      overflowX="hidden"
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
                p={2}
                px={4}
                href={navItem?.frontendLink ?? "#"}
                fontSize={"sm"}
                fontWeight={400}
                borderRight={`${categories?.length - 1 !== i && "1px"}`}
                borderColor={"gray.300"}
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
                <Center whiteSpace={"nowrap"}>{navItem.title}</Center>
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
              >
                <Stack>
                  {navItem?.subCategories?.map((child, key) => (
                    <DesktopSubNav
                      key={key}
                      href={child?.frontendLink ?? "#"}
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

const DesktopSubNav = ({ title, frontendLink }) => {
  return (
    <Box
      as="a"
      href={frontendLink}
      role={"group"}
      display={"block"}
      px={6}
      _hover={{ color: "blue.400", borderLeft: "3px solid #177de5" }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "blue.400" }}
            fontWeight={500}
          >
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

const MobileNavItem = ({ title, subCategories, frontendLink }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={subCategories && onToggle}>
      <Box
        py={2}
        as="a"
        href={frontendLink ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
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
                <Box as="a" key={key} py={2} href={child.frontendLink ?? "#"}>
                  {child.title}
                </Box>
              ))
            : null}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Design",
    children: [
      {
        label: "Explore Design Work",
        subLabel: "Trending Design to inspire you",
        href: "/categories/design",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories/new",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories/new",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories/new",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories/new",
      },
    ],
  },
  {
    label: "Development & IT",
    children: [
      {
        label: "Job Board",
        subLabel: "Find your dream design job",
        href: "/categories/new",
      },
      {
        label: "Freelance Projects",
        subLabel: "An exclusive list for contract work",
        href: "/categories/new",
      },
      {
        label: "Web Development",
        subLabel: "Find professional web developers",
        href: "/categories/web-development",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories/new",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories/new",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories/new",
      },
    ],
  },
  {
    label: "Writing",
    children: [
      {
        label: "Explore Design Work",
        subLabel: "Trending Design to inspire you",
        href: "/categories/new",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories/new",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories/new",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories/new",
      },
    ],
  },
  {
    label: "SEO & Traffic",
    children: [
      {
        label: "Job Board",
        subLabel: "Find your dream design job",
        href: "/categories/new",
      },
      {
        label: "Freelance Projects",
        subLabel: "An exclusive list for contract work",
        href: "/categories/new",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories/new",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories/new",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories/new",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories/new",
      },
    ],
  },
  {
    label: "Digital Marketing",
    children: [
      {
        label: "Explore Design Work",
        subLabel: "Trending Design to inspire you",
        href: "/categories/new",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories/new",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories/new",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories/new",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories/new",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories/new",
      },
    ],
  },
  {
    label: "Audio & Video",
    children: [
      {
        label: "Job Board",
        subLabel: "Find your dream design job",
        href: "/categories/new",
      },
      {
        label: "Freelance Projects",
        subLabel: "An exclusive list for contract work",
        href: "/categories/new",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories/new",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories/new",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories/new",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories/new",
      },
    ],
  },
  {
    label: "Business & Lifestyle",
    children: [
      {
        label: "Explore Design Work",
        subLabel: "Trending Design to inspire you",
        href: "/categories/new",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories/new",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories/new",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories/new",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories/new",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories/new",
      },
    ],
  },

  //   {
  //     label: "Learn Design",
  //     href: "#",
  //   },
  //   {
  //     label: "Hire Designers",
  //     href: "#",
  //   },
];
