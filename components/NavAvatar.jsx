"use client";
import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Avatar,
  Code,
  Text,
  HStack,
  Stack,
  Box,
  useAvatar,
  Button,
} from "@chakra-ui/react";
import { ArrowDown2 } from "iconsax-react";
import Link from "next/link";
import useAuth from "@/hooks/useAuth";

const NavAvatar = ({ user, currentRole, onLogout, onChangeRole }) => {
  const { avatarUrl } = useAuth();
  // console.log(user.avatar.url, avatarUrl);

  return (
    <>
      <Popover trigger="hover">
        <PopoverTrigger>
          <HStack px={4} cursor={"pointer"}>
            <Link href={"/seller-dashboard"}>
              {/* <Avatar
                name={user?.username}
                src={user?.avatar?.url}
                size={"sm"}
              /> */}
              <Box rounded={9} p={2}>
                <Avatar
                  name={user?.username} // This automatically uses the first letter as fallback
                  src={avatarUrl || undefined} // If imageUrl is empty or null, fallback to initials
                  size={"sm"}
                />
              </Box>
            </Link>
            <ArrowDown2 size="28" color="#111" />
          </HStack>
        </PopoverTrigger>
        <PopoverContent
          maxW={"64"}
          color={"#000"}
          fontSize={"sm"}
          zIndex={99999}
          pb={0}
        >
          <Box p={4} pb={2}>
            <Text fontWeight={"semibold"} color={"#000"} fontSize={"16px"}>
              {user?.username}
            </Text>
          </Box>
          <HStack px={2}>
            <Button
              size={"sm"}
              w={"full"}
              as={"a"}
              href="#"
              variant={"ghost"}
              color={currentRole == "buyer" ? "facebook.500" : "#000"}
              onClick={() => onChangeRole("buyer")}
              fontWeight={"medium"}
            >
              Buyer
            </Button>
            <Button
              size={"sm"}
              w={"full"}
              as={"a"}
              href="#"
              variant={"ghost"}
              color={currentRole == "seller" ? "facebook.500" : "#000"}
              onClick={() => onChangeRole("seller")}
              fontWeight={"medium"}
            >
              Seller
            </Button>
          </HStack>
          <hr />
          <Link href={"/profile/me"}>
            <Box w={"full"} _hover={{ bgColor: "twitter.50" }} py={2} px={4}>
              <Text>Profile</Text>
            </Box>
          </Link>
          <Link href="/edit-profile">
            <Box w={"full"} _hover={{ bgColor: "twitter.50" }} py={2} px={4}>
              Settings
            </Box>
          </Link>
          <Link href={"/balance"}>
            <Box w={"full"} _hover={{ bgColor: "twitter.50" }} py={2} px={4}>
              Cashflow
            </Box>
          </Link>
          <Box w={"full"} _hover={{ bgColor: "twitter.50" }} py={2} px={4}>
            Help
          </Box>
          <hr />
          <Box
            w={"full"}
            cursor={"pointer"}
            _hover={{ bgColor: "twitter.50" }}
            py={2}
            px={4}
            onClick={() => onLogout()}
          >
            Signout
          </Box>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default NavAvatar;
