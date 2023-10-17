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
  Flex,
  Icon,
  IconButton,
  Popover,
  PopoverContent,
  PopoverTrigger,
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

export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={"#333333"}
        color={"#fff"}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
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
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
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
              ORKPIDO
            </span>
          </Flex>

          {/* <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex> */}
        </Flex>

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
      </Flex>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        // minH={"60px"}
        py={1}
        // py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <DesktopNav />
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
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
      {NAV_ITEMS.map((navItem, i) => (
        <Box
          key={navItem.label}
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
                p={1}
                px={4}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={400}
                borderRight={`${NAV_ITEMS.length - 1 !== i && "1px"}`}
                borderColor={"gray.300"}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: "#177de5",
                  borderBottom: "3px solid #177de5",
                }}
                // flex="1"
                w={"full"}
                mx={"auto"}
              >
                <Center whiteSpace={"nowrap"}>{navItem.label}</Center>
              </Center>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={"1px"}
                borderColor="gray.400"
                bg={popoverContentBgColor}
                py={4}
                rounded={"none"}
                minW={"xs"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav
                      key={child.label}
                      href="/categories"
                      {...child}
                    />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Flex>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Box
      as="a"
      href={href}
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
            {label}
          </Text>
          {/* <Text fontSize={"sm"}>{subLabel}</Text> */}
        </Box>
      </Stack>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? "#"}
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
          {label}
        </Text>
        {children && (
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
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
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
        href: "/categories",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories",
      },
    ],
  },
  {
    label: "Development & IT",
    children: [
      {
        label: "Job Board",
        subLabel: "Find your dream design job",
        href: "/categories",
      },
      {
        label: "Freelance Projects",
        subLabel: "An exclusive list for contract work",
        href: "/categories",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories",
      },
    ],
  },
  {
    label: "Writing",
    children: [
      {
        label: "Explore Design Work",
        subLabel: "Trending Design to inspire you",
        href: "/categories",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories",
      },
    ],
  },
  {
    label: "SEO & Traffic",
    children: [
      {
        label: "Job Board",
        subLabel: "Find your dream design job",
        href: "/categories",
      },
      {
        label: "Freelance Projects",
        subLabel: "An exclusive list for contract work",
        href: "/categories",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories",
      },
    ],
  },
  {
    label: "Digital Marketing",
    children: [
      {
        label: "Explore Design Work",
        subLabel: "Trending Design to inspire you",
        href: "/categories",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories",
      },
    ],
  },
  {
    label: "Audio & Video",
    children: [
      {
        label: "Job Board",
        subLabel: "Find your dream design job",
        href: "/categories",
      },
      {
        label: "Freelance Projects",
        subLabel: "An exclusive list for contract work",
        href: "/categories",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories",
      },
    ],
  },
  {
    label: "Business & Lifestyle",
    children: [
      {
        label: "Explore Design Work",
        subLabel: "Trending Design to inspire you",
        href: "/categories",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories",
      },
      {
        label: "New & Noteworthy",
        subLabel: "Up-and-coming Designers",
        href: "/categories",
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
