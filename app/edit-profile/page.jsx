"use client";
import useAuth from "@/hooks/useAuth";
import { API } from "@/lib/api";
import { CLIENT_BASE_URL, COUNTRIES } from "@/lib/constants";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  Textarea,
  Select as ChakraSelect,
  Container,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Link from "next/link";
import { BsPaypal } from "react-icons/bs";
import useApiHandler from "@/hooks/useApiHandler";

const EditProfile = () => {
  const { avatarUrl, me, user } = useAuth();
  const { uploadAndAttachMedia } = useApiHandler();
  const { push, refresh } = useRouter();

  const [currencies, setCurrencies] = useState([]);
  const [changePasswordModal, setChangePasswordModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(null);

  const avatarInputRef = useRef(null);

  const handleClick = () => {
    avatarInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      // Read the selected file as a data URL
      setAvatar(selectedFile);
      const reader = new FileReader();

      reader.onloadend = () => {
        // Set the data URL as the image preview
        setAvatarPreview(reader.result);
      };

      reader.readAsDataURL(selectedFile);
    }
  };

  useEffect(() => {
    me();
  }, []);

  useEffect(() => {
    if (user?.id) {
      Formik.setFieldValue("username", user?.username);
      Formik.setFieldValue("phone", user?.phone);
      Formik.setFieldValue("email", user?.email);
      Formik.setFieldValue("displayName", user?.displayName);
      Formik.setFieldValue("profession", user?.profession);
      Formik.setFieldValue("acceptingOrders", user?.acceptingOrders);
      Formik.setFieldValue("country", user?.country);
      Formik.setFieldValue("bio", user?.bio);
      Formik.setFieldValue("defaultDashboard", user?.defaultDashboard);
      Formik.setFieldValue("skills", user?.skills);
      Formik.setFieldValue("currency", user?.currency);
      Formik.setFieldValue("paypalEmail", user?.paypalEmail);
    }
  }, [user?.id]);

  useEffect(() => {
    (async () => {
      try {
        const res = await API.getCurrencies();
        setCurrencies(res?.data);
      } catch (error) {
        console.log("Error fetching currencies");
        console.log(error);
      }
    })();
  }, []);

  const Formik = useFormik({
    initialValues: {
      username: user?.username,
      phone: user?.phone,
      email: user?.email,
      displayName: user?.displayName,
      profession: user?.profession,
      acceptingOrders: user?.acceptingOrders,
      country: user?.country,
      bio: user?.bio || "",
      defaultDashboard: user?.defaultDashboard || "seller",
      skills: user?.skills || "",
      currency: user?.currency || "",
      paypalEmail: user?.paypalEmail,
      currentPassword: "",
      password: "",
      passwordConfirmation: "",
    },
    onSubmit: async (values) => {
      try {
        if (
          values?.password &&
          values?.password != values?.passwordConfirmation
        ) {
          toast.info("Passwords don't match");
          return;
        }

        if (
          values?.password &&
          values?.passwordConfirmation &&
          values?.password == values?.passwordConfirmation &&
          !values?.currentPassword
        ) {
          setChangePasswordModal(true);
          return;
        }

        if (!values?.password && !values?.passwordConfirmation) {
          delete values["password"];
          delete values["currentPassword"];
          delete values["passwordConfirmation"];
        }

        if (avatar) {
          await uploadAndAttachMedia({
            entryId: user?.id,
            field: "avatar",
            files: [avatar],
            modelName: "plugin::users-permissions.user",
          });
        }

        await API.updateMe({
          ...values,
          country: values?.country?.value,
        });
        toast.success("Profile update successfully!");
        // me();
      } catch (error) {
        console.log(error);
        toast.error("Couldn't update profile");
      }
    },
  });

  async function removeAvatar() {
    try {
      await API.deleteAvatar();
      refresh();
    } catch (error) {
      toast.error("Error removing your avatar");
      console.log(error);
    }
  }

  return (
    <>
      <input
        type="file"
        ref={avatarInputRef}
        onChange={handleFileChange}
        accept="image/"
        style={{ display: "none" }}
      />

      <Container
        maxW={["full", "3xl", "5xl", "7xl"]}
        my={[4, 8, 12]}
        minH={"90vh"}
      >
        <Text fontSize={["xl", "2xl", "3xl"]} fontWeight={"medium"} mb={8}>
          Settings
        </Text>

        <Tabs colorScheme="yellow" maxW={["full", "2xl"]}>
          <TabList>
            <Tab>General</Tab>
            <Tab>Profile</Tab>
            <Tab>Withdrawal Methods</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Box p={4} bgColor={"#FFF"} rounded={4} boxShadow={"base"}>
                <Stack
                  direction={["column", "row"]}
                  alignItems={"center"}
                  justifyContent={"flex-start"}
                >
                  <Text>Your profile link - </Text>
                  <Link href={CLIENT_BASE_URL + `/profile/${user?.username}`}>
                    <Text color={"twitter.600"}>
                      {CLIENT_BASE_URL + `/profile/${user?.username}`}
                    </Text>
                  </Link>
                </Stack>
                <br />
                <FormControl pb={8}>
                  <FormLabel fontSize={"sm"}>Username</FormLabel>
                  <Input
                    placeholder="Your Username (All lower case, without spaces or special charachters)"
                    name="username"
                    value={Formik.values.username}
                    onChange={Formik.handleChange}
                  />
                </FormControl>
                <FormControl pb={8} w={["full", "xs"]}>
                  <FormLabel fontSize={"sm"}>Phone Number</FormLabel>
                  <Input
                    placeholder="Phone No."
                    type="tel"
                    name="phone"
                    value={Formik.values.phone}
                    onChange={Formik.handleChange}
                  />
                </FormControl>
                <FormControl pb={8} w={["full"]}>
                  <FormLabel fontSize={"sm"}>Email</FormLabel>
                  <Input
                    placeholder="Your Email"
                    type="email"
                    name="email"
                    value={Formik.values.email}
                    onChange={Formik.handleChange}
                  />
                </FormControl>
                <HStack gap={6}>
                  <FormControl pb={8} w={["full"]}>
                    <FormLabel fontSize={"sm"}>New Password</FormLabel>
                    <Input
                      placeholder="New Password"
                      name="password"
                      value={Formik.values.password}
                      onChange={Formik.handleChange}
                    />
                  </FormControl>
                  <FormControl pb={8} w={["full"]}>
                    <FormLabel fontSize={"sm"}>Confirm Password</FormLabel>
                    <Input
                      type="password"
                      placeholder="Confirm Password"
                      name="passwordConfirmation"
                      value={Formik.values.passwordConfirmation}
                      onChange={Formik.handleChange}
                    />
                  </FormControl>
                </HStack>
                <br />
                <HStack w={"full"} justifyContent={"flex-end"}>
                  <Button
                    onClick={() => push("/profile/me")}
                    fontSize={"sm"}
                    fontWeight={"medium"}
                  >
                    Back to Profile
                  </Button>
                  <Button
                    colorScheme="green"
                    bgColor={"brand.primary"}
                    onClick={Formik.handleSubmit}
                    fontSize={"sm"}
                    fontWeight={"medium"}
                  >
                    Save Details
                  </Button>
                </HStack>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box p={4} bgColor={"#FFF"} rounded={4} boxShadow={"base"}>
                <Box w={"full"}>
                  <FormControl w={["full", "sm"]}>
                    <FormLabel fontSize={"sm"}>Display Name</FormLabel>
                    <Input
                      name="displayName"
                      value={Formik.values.displayName}
                      onChange={Formik.handleChange}
                      placeholder="Eg, Akshay Singh or SEO Blade Agency"
                    />
                  </FormControl>
                  <br />
                  <Box w={["full", "xs"]}>
                    <Image
                      src={avatarPreview ?? avatarUrl}
                      width={48}
                      height={48}
                      objectFit={"contain"}
                    />
                    <HStack py={2} w={"full"} justifyContent={"flex-start"}>
                      <Button
                        variant={"ghost"}
                        size={"sm"}
                        colorScheme="twitter"
                        onClick={handleClick}
                      >
                        Change
                      </Button>
                      <Button
                        variant={"ghost"}
                        size={"sm"}
                        colorScheme="red"
                        onClick={() => removeAvatar()}
                      >
                        Remove
                      </Button>
                    </HStack>
                  </Box>
                  <br />
                  <FormControl w={["full", "full"]}>
                    <FormLabel fontSize={"sm"}>About Yourself</FormLabel>
                    <Textarea
                      placeholder="Tell us something about yourself..."
                      h={"48"}
                      resize={"none"}
                      name="bio"
                      value={Formik.values.bio}
                      onChange={Formik.handleChange}
                    />
                  </FormControl>
                </Box>
                <br />
                <br />
                <br />
                <Stack
                  direction={["column", "row"]}
                  w={"full"}
                  gap={8}
                  alignItems={"flex-start"}
                >
                  <FormControl w={["full"]}>
                    <FormLabel fontSize={"sm"}>What do you do?</FormLabel>
                    <Input
                      name="profession"
                      value={Formik.values.profession}
                      onChange={Formik.handleChange}
                      placeholder="eg, Graphic Designer"
                    />
                  </FormControl>
                </Stack>
                <br />
                <br />
                <Stack
                  direction={["column", "row"]}
                  w={"full"}
                  gap={8}
                  alignItems={"flex-start"}
                >
                  <FormControl w={["full", "sm"]}>
                    <FormLabel fontSize={"sm"}>Country</FormLabel>
                    <Select
                      name="country"
                      value={COUNTRIES.find(
                        (country) => country.value == Formik.values.country
                      )}
                      onChange={(value) =>
                        Formik.setFieldValue("country", value)
                      }
                      options={COUNTRIES}
                      useBasicStyles
                    />
                  </FormControl>
                  <FormControl w={["full", "sm"]}>
                    <FormLabel fontSize={"sm"}>Currency</FormLabel>
                    <ChakraSelect
                      name="currency"
                      value={Formik.values.currency}
                      onChange={Formik.handleChange}
                      isDisabled={Boolean(user?.currency)}
                      placeholder="Please select"
                    >
                      {currencies?.map((currency, key) => (
                        <option value={currency?.id} key={key}>
                          {currency?.attributes?.isoCode} (
                          {currency?.attributes?.symbol})
                        </option>
                      ))}
                    </ChakraSelect>
                  </FormControl>
                </Stack>
                <br />
                <br />
                <Stack
                  direction={["column", "row"]}
                  w={"full"}
                  gap={8}
                  alignItems={"flex-start"}
                >
                  <FormControl w={["full", "sm"]}>
                    <FormLabel fontSize={"sm"}>Default Dashboard</FormLabel>
                    <HStack
                      rounded={4}
                      overflow={"hidden"}
                      mb={4}
                      gap={0}
                      border={"0.5px solid #e2e2e2"}
                    >
                      <Button
                        size={"sm"}
                        bgColor={
                          Formik.values.defaultDashboard == "buyer"
                            ? "#177de5"
                            : "transparent"
                        }
                        flex={1}
                        _hover={"none"}
                        color={
                          Formik.values.defaultDashboard == "buyer"
                            ? "#FFF"
                            : "#000"
                        }
                        onClick={() =>
                          Formik.setFieldValue("defaultDashboard", "buyer")
                        }
                        rounded={0}
                        fontWeight={"normal"}
                        fontSize={"sm"}
                      >
                        Buyer
                      </Button>
                      <Button
                        size={"sm"}
                        bgColor={
                          Formik.values.defaultDashboard == "seller"
                            ? "#177de5"
                            : "transparent"
                        }
                        flex={1}
                        _hover={"none"}
                        color={
                          Formik.values.defaultDashboard == "seller"
                            ? "#FFF"
                            : "#000"
                        }
                        onClick={() =>
                          Formik.setFieldValue("defaultDashboard", "seller")
                        }
                        rounded={0}
                        fontWeight={"normal"}
                        fontSize={"sm"}
                      >
                        Seller
                      </Button>
                    </HStack>
                  </FormControl>

                  <FormControl w={["full", "sm"]}>
                    <FormLabel fontSize={"sm"}>
                      Are you accepting orders?
                    </FormLabel>
                    <HStack
                      rounded={4}
                      overflow={"hidden"}
                      mb={4}
                      gap={0}
                      border={"0.5px solid #e2e2e2"}
                    >
                      <Button
                        size={"sm"}
                        bgColor={
                          Formik.values.acceptingOrders
                            ? "#177de5"
                            : "transparent"
                        }
                        flex={1}
                        _hover={"none"}
                        color={Formik.values.acceptingOrders ? "#FFF" : "#000"}
                        onClick={() =>
                          Formik.setFieldValue("acceptingOrders", true)
                        }
                        rounded={0}
                        fontWeight={"normal"}
                        fontSize={"sm"}
                      >
                        Yes
                      </Button>
                      <Button
                        size={"sm"}
                        bgColor={
                          Formik.values.acceptingOrders == false
                            ? "#177de5"
                            : "transparent"
                        }
                        flex={1}
                        _hover={"none"}
                        color={
                          Formik.values.acceptingOrders == false
                            ? "#FFF"
                            : "#000"
                        }
                        onClick={() =>
                          Formik.setFieldValue("acceptingOrders", false)
                        }
                        rounded={0}
                        fontWeight={"normal"}
                        fontSize={"sm"}
                      >
                        No
                      </Button>
                    </HStack>
                  </FormControl>
                </Stack>
                <br />
                <br />
                <br />
                <FormControl w={["full"]}>
                  <FormLabel fontSize={"sm"}>Skills</FormLabel>
                  <Input
                    name="skills"
                    value={Formik.values.skills}
                    onChange={Formik.handleChange}
                    placeholder="write each skill separated by a comma like - Graphic Designing, Web Development, Canva, SEO Analysis"
                  />
                </FormControl>
                <br />
                <br />
                <HStack w={"full"} justifyContent={"flex-end"}>
                  <Button
                    onClick={() => push("/profile/me")}
                    fontSize={"sm"}
                    fontWeight={"medium"}
                  >
                    Back to Profile
                  </Button>
                  <Button
                    colorScheme="green"
                    bgColor={"brand.primary"}
                    onClick={Formik.handleSubmit}
                    fontSize={"sm"}
                    fontWeight={"medium"}
                  >
                    Save Details
                  </Button>
                </HStack>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box p={4} bgColor={"#FFF"} rounded={4} boxShadow={"base"}>
                <FormControl>
                  <FormLabel fontSize={"sm"} fontWeight={"medium"}>
                    Paypal Email
                  </FormLabel>
                  <HStack
                    justifyContent={"flex-start"}
                    w={"full"}
                    py={4}
                    gap={4}
                  >
                    <Icon as={BsPaypal} fontSize={"2xl"} />
                    <Input
                      placeholder="Paypal registered email"
                      type="email"
                      name="paypalEmail"
                      value={Formik.values.paypalEmail}
                      onChange={Formik.handleChange}
                    />
                  </HStack>
                </FormControl>
                <br />
                <HStack w={"full"} justifyContent={"flex-end"}>
                  <Button
                    onClick={() => push("/profile/me")}
                    fontSize={"sm"}
                    fontWeight={"medium"}
                  >
                    Back to Profile
                  </Button>
                  <Button
                    colorScheme="green"
                    bgColor={"brand.primary"}
                    onClick={Formik.handleSubmit}
                    fontSize={"sm"}
                    fontWeight={"medium"}
                  >
                    Save Details
                  </Button>
                </HStack>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>

      <Modal
        isCentered
        isOpen={changePasswordModal}
        onClose={() => setChangePasswordModal(false)}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontWeight={"medium"}>Change Password</ModalHeader>
          <ModalBody>
            <Text fontSize={"sm"}>
              You are trying to change your password. For security reasons,
              please enter your current password to proceed
            </Text>
            <br />
            <Input
              w={"full"}
              placeholder="Your current password"
              type="password"
              name="currentPassword"
              value={Formik.values.currentPassword}
              onChange={Formik.handleChange}
            />
          </ModalBody>
          <ModalFooter>
            <HStack w={"full"} justifyContent={"flex-end"}>
              <Button
                onClick={() => setChangePasswordModal(false)}
                fontSize={"sm"}
                fontWeight={"medium"}
              >
                Cancel
              </Button>
              <Button
                colorScheme="green"
                bgColor={"brand.primary"}
                onClick={Formik.handleSubmit}
                fontSize={"sm"}
                fontWeight={"medium"}
              >
                Confirm
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditProfile;
