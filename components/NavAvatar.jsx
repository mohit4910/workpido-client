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

const NavAvatar = ({ user, currentRole, onLogout }) => {
  return (
    <>
      <Menu>
        <MenuButton>
          <HStack px={4}>
            <Avatar name={user?.username} src={user?.avatar?.url} size={"sm"} />
            <ArrowDown2 size="28" color="#FFF" />
          </HStack>
        </MenuButton>
        <MenuList color={"#000"} fontSize={"sm"}>
          <Box px={4}>
            <Text fontWeight={"semibold"} color={"#000"} fontSize={"16px"}>
              {user?.username}
            </Text>
          </Box>
          <HStack p={2}>
            <Button
              size={"sm"}
              w={"full"}
              as={"a"}
              href="#"
              variant={"link"}
              color={currentRole == "buyer" ? "facebook.500" : "#000"}
            >
              Buyer
            </Button>
            <Button
              size={"sm"}
              w={"full"}
              as={"a"}
              href="#"
              variant={"link"}
              color={currentRole == "seller" ? "facebook.500" : "#000"}
            >
              Seller
            </Button>
          </HStack>
          <MenuDivider />
          <MenuItem>Profile</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Cashflow</MenuItem>
          <MenuItem>Help</MenuItem>
          <MenuDivider />
          <MenuItem onClick={() => onLogout()}>Signout</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default NavAvatar;
