"use client";
import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Avatar,
  Text,
  HStack,
  Box,
  Button,
} from "@chakra-ui/react";
import { ArrowDown2 } from "iconsax-react";
import Link from "next/link";

const NavAvatar = ({ user, currentRole, onLogout, onChangeRole }) => {
  return (
    <>
      <Menu>
        <MenuButton>
          <HStack px={4}>
            <Link href={"/dashboard/seller-dashboard"}>
              <Avatar
                name={user?.username}
                src={user?.avatar?.url}
                size={"sm"}
              />
            </Link>
            <ArrowDown2 size="28" color="#111" />
          </HStack>
        </MenuButton>
        <MenuList color={"#000"} fontSize={"sm"} zIndex={99999} pb={0}>
          <Box px={4}>
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
          <MenuDivider />
          <Link href={"/profile/me"}>
            <MenuItem py={1}>
              <Text>Profile</Text>
            </MenuItem>
          </Link>
          <Link href="/edit-profile">
            <MenuItem py={1}>Settings</MenuItem>
          </Link>
          <MenuItem py={1}>Cashflow</MenuItem>
          <MenuItem py={1}>Help</MenuItem>
          <hr />
          <MenuItem py={1} onClick={() => onLogout()}>
            Signout
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default NavAvatar;
