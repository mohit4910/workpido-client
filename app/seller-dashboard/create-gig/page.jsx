"use client";
import GigAccordion from "@/components/GigAccordion";
import { API } from "@/lib/api";
import {
  Accordion,
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  Textarea,
  Select,
  CheckboxGroup,
  Checkbox,
  VStack,
  InputGroup,
  InputRightAddon,
  InputLeftAddon,
  Container,
  Switch,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import SunEditor, { buttonList } from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import FileDropzone from "@/components/FileDropzone";
import useAuth from "@/hooks/useAuth";
import PricingTable from "@/components/PricingTable";
import FaqsContainer from "@/components/FaqsContainer";
import axios from "axios";
import { API_BASE_URL } from "@/lib/constants";
import Cookies from "js-cookie";
import useApiHandler from "@/hooks/useApiHandler";
import { useRouter } from "next/navigation";
import CreateGigPopup from "@/components/CreateGigPopup";

const CreateGig = () => {
  const { user } = useAuth();
  const { uploadAndAttachMedia } = useApiHandler();
  const { push } = useRouter();

  const [activeStep, setActiveStep] = useState(1);
  const [activeAccordions, setActiveAccordions] = useState([]);
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [services, setServices] = useState([]);
  const [attributes, setAttributes] = useState([]);

  const [loading, setLoading] = useState(false);

  const Formik = useFormik({
    initialValues: {
      title: "",
      category: "",
      subCategory: "",
      overview: "",
      description: "",
      requirements: "",
      services: [],
      attributes: [],
      pricingModel: "",
      fixedPrice: null,
      hourlyPrice: null,
      minPrice: null,
      totalPlans: "1",
      pricingTable: null,
      revisions: null,
      deliveryDays: null,
      faqs: null,
      banners: null,
      attachments: null,
    },
    onSubmit: async (values) => {
      try {
        if (!values.banners) {
          toast.error("You must upload atleast 1 banner");
          return;
        }
        if (!values.category || !values.subCategory) {
          toast.error("Please select a valid Category and Sub-Category");
          return;
        }
        if (values.pricingModel == "plans") {
          if (
            !values.pricingTable?.attributes?.includes("Pricing") &&
            !values.pricingTable?.attributes?.includes("Price")
          ) {
            toast.warning("Please add a Price row in your Table");
            return;
          }
          if (
            (values.pricingTable?.attributes?.includes("Pricing") &&
              values.pricingTable?.attributes?.includes("Price")) ||
            values.pricingTable?.attributes?.filter(
              (attribute) =>
                attribute?.toLowerCase().includes("price") ||
                attribute?.toLowerCase().includes("pricing")
            )?.length >= 2
          ) {
            toast.warning("You can not add 2 Pricing rows in your Table");
            return;
          }
          if (
            !values.pricingTable?.attributes?.includes("Revisions") &&
            !values.pricingTable?.attributes?.includes("Revision")
          ) {
            toast.warning("Please add a Revision row in your Table");
            return;
          }
          if (
            values.pricingTable?.attributes?.filter((attribute) =>
              attribute?.toLowerCase().includes("revision")
            )?.length >= 2
          ) {
            toast.warning("You can not add 2 Revision rows in your Table");
            return;
          }
        }
        setLoading(true);
        toast.info("Please wait while we upload your Gig");
        const formData = new FormData();
        let data = {};
        Object.keys(values)?.forEach((property, key) => {
          if (property != "banners" && property != "attachments") {
            if (
              property == "category" ||
              property == "subCategory" ||
              property == "services"
            ) {
              data[property] = {
                connect:
                  property == "services"
                    ? values[property]
                    : [values[property]],
              };
            } else {
              data[property] = property.includes("Price")
                ? Number(values[property])
                : values[property];
            }
          }
        });
        formData.append("data", JSON.stringify(data));
        const res = await axios.post(`${API_BASE_URL}/gigs`, formData, {
          headers: {
            Authorization: "Bearer " + Cookies.get("token"),
          },
        });
        Cookies.set("recentGigId", res.data?.data?.id);
        await uploadAllMedia(res.data?.data?.id);
      } catch (error) {
        toast.error("We couldn't uplload your Gig");
        setLoading(false);
      }
    },
  });

  async function uploadAllMedia(entryId) {
    const recentGigId = Cookies.get("recentGigId") || entryId;

    if (!recentGigId) {
      toast.error("We couldn't upload");
      return;
    }

    try {
      // Upload banners and attachments
      await uploadAndAttachMedia({
        files: Formik.values.banners,
        entryId: recentGigId,
        modelName: "api::gig.gig",
        field: "banners",
        path: "/gigs/banners",
      });

      if (Formik.values.attachments?.length) {
        await uploadAndAttachMedia({
          files: Formik.values.attachments,
          entryId: recentGigId,
          modelName: "api::gig.gig",
          field: "attachments",
          path: "/gigs/attachments",
        });
        push(`/seller-dashboard/gig/preview/${recentGigId}`);
      } else {
        push(`/seller-dashboard/gig/preview/${recentGigId}`);
      }
    } catch (error) {
      // Handle any unexpected errors that may occur.
      console.error("An error occurred during media upload:", error);
      toast.error("Error uploading media");
      setLoading(false);
    }
  }

  useEffect(() => {
    (async () => {
      try {
        const res = await API.getAllCategories();
        setData(res);
        setCategories(
          res?.map((item) => ({ label: item?.title, value: item?.id }))
        );
      } catch (error) {
        toast.warn("Couldn't fetch categories");
      }
    })();
  }, []);

  useEffect(() => {
    setSubCategories([]);
    setServices([]);
    setAttributes([]);
    console.log(data, "data");
    const filteredData = data
      ?.find((item) => item?.id == Formik.values.category)
      ?.subCategories?.map((item) => ({ label: item?.title, value: item?.id }));
    console.log(filteredData, "filterdata");
    setSubCategories(filteredData);
  }, [Formik.values.category]);

  useEffect(() => {
    setServices([]);
    setAttributes([]);
    const filteredData = data
      ?.find((item) => item?.id == Formik.values.category)
      ?.subCategories?.find((item) => item?.id == Formik.values.subCategory)
      ?.services?.map((item) => ({ label: item?.title, value: `${item?.id}` }));
    setServices(filteredData);
  }, [Formik.values.subCategory]);

  useEffect(() => {
    setAttributes([]);
    const filteredData = data
      ?.find((item) => item?.id == Formik.values.category)
      ?.subCategories?.find((item) => item?.id == Formik.values.subCategory)
      ?.services?.map((item) => ({
        label: item?.title,
        value: item?.id,
        attributes: item?.serviceAttributes?.map((item) => ({
          label: item?.title,
          value: item?.id,
        })),
      }));
    setAttributes(filteredData);
  }, [Formik.values.services]);

  useEffect(() => {
    let arr = [];
    for (let i = 0; i < activeStep; i++) {
      arr.push(i);
    }
    setActiveAccordions(arr);
  }, [activeStep]);

  useEffect(() => {
    if (!Formik.values.pricingModel) {
      Formik.setFieldValue("fixedPrice", "");
      Formik.setFieldValue("hourlyPrice", "");
      Formik.setFieldValue("minPrice", "");
    }
  }, [Formik.values.pricingModel]);

  function handleAttributeClick(attribute) {
    const i = Formik.values.attributes.indexOf(attribute);
    let data = Formik.values.attributes;

    if (i == -1) {
      data.push(attribute);
    } else {
      data.splice(i, 1);
    }

    Formik.setFieldValue("attributes", data);
  }

  function handlePartialUpdate(nextStep) {
    if (nextStep == 2) {
      if (
        !Formik.values.title ||
        !Formik.values.overview ||
        !Formik.values.category ||
        !Formik.values.subCategory
      ) {
        toast.warn("All fields are required");
        return;
      }
    }
    if (nextStep == 3) {
      if (!Formik.values.banners) {
        toast.warn("You must upload atleast 1 bannner");
        return;
      }
      if (
        !Formik.values.description ||
        Formik.values.description.length < 100
      ) {
        toast.warn("Description must be more than 100 characters in length");
        return;
      }
    }

    if (activeStep < nextStep) {
      setActiveStep(nextStep);
    }
  }

  return (
    <>
      <Box p={[4, 8, 16]} bg={"#f6f6f6"}>
        <Text
          fontWeight={"medium"}
          fontSize={["3xl", "2xl"]}
          pl={[4, 8, 16, 24]}
        >
          Create New Gig
        </Text>
        <br />
        <br />

        <Box pos={"relative"}>
          <Accordion
            allowMultiple
            allowToggle
            pl={[4, 8, 16, 24]}
            index={activeAccordions}
          >
            {/* Title & Category */}
            <GigAccordion step={1} title={"Title & Category"}>
              <Box pos={"relative"} overflowY={"visible"}>
                <FormControl py={4} px={6}>
                  <CreateGigPopup
                    trigger={
                      <HStack alignItems={"flex-start"}>
                        <FormLabel flex={1}>Title</FormLabel>
                        <Textarea
                          flex={5}
                          noOfLines={2}
                          maxLength={70}
                          h={20}
                          fontSize={"xl"}
                          fontWeight={"normal"}
                          resize={"none"}
                          w={"full"}
                          name="title"
                          onChange={Formik.handleChange}
                          placeholder="I will create a professional website..."
                          _placeholder={{ fontWeight: "normal" }}
                        />
                      </HStack>
                    }
                    body={
                      <>
                        <Text fontSize={"sm"} mb={4} fontWeight={"semibold"}>
                          Title of your Gig
                        </Text>
                        <Text fontSize={"xs"}>
                          Your kwork's title should clearly summarize the
                          essence of the service you are providing. <br />
                          The title should reflect what the buyer will receive
                          for exactly one kwork without any extra options. If
                          you are creating a kwork with different package
                          options, your title should reflect what the buyer will
                          receive should they order the Basic package.
                        </Text>
                      </>
                    }
                  />
                </FormControl>
                <FormControl py={4} px={6}>
                  <CreateGigPopup
                    // arrowColor={"#FFF"}
                    trigger={
                      <HStack alignItems={"flex-start"}>
                        <FormLabel flex={1}>Brief Overview</FormLabel>
                        <Textarea
                          flex={5}
                          maxLength={400}
                          h={36}
                          fontWeight={"normal"}
                          resize={"none"}
                          w={"full"}
                          name="overview"
                          onChange={Formik.handleChange}
                          placeholder="A brief overview about your Gig..."
                          _placeholder={{ fontWeight: "normal" }}
                        />
                      </HStack>
                    }
                    body={
                      <>
                        <Text fontSize={"sm"} mb={4} fontWeight={"semibold"}>
                          Brief about your Gig
                        </Text>
                        <Text fontSize={"xs"}>
                          Tell buyers about your Gig in brief. This is often
                          visible to Search engines
                        </Text>
                      </>
                    }
                  />
                </FormControl>
                <HStack alignItems={"flex-start"} py={4} px={6}>
                  <FormLabel flex={1}>Category</FormLabel>
                  <CreateGigPopup
                    arrowColor={"#FFF"}
                    trigger={
                      <HStack gap={8} flex={5}>
                        <FormControl>
                          <Select
                            placeholder={"Select Category"}
                            name="category"
                            onChange={Formik.handleChange}
                            value={Formik.values.category}
                          >
                            {categories?.map((item, key) => {
                              return (
                                <option key={key} value={item.value}>
                                  {item.label}
                                </option>
                              );
                            })}
                          </Select>
                        </FormControl>
                        <FormControl>
                          <Select
                            placeholder={"Select Sub Category"}
                            name="subCategory"
                            onChange={Formik.handleChange}
                            value={Formik.values.subCategory}
                          >
                            {subCategories?.map((item, key) => {
                              return (
                                <option key={key} value={item.value}>
                                  {item.label}
                                </option>
                              );
                            })}
                          </Select>
                        </FormControl>
                      </HStack>
                    }
                    body={
                      <>
                        <Text fontSize={"sm"} mb={4} fontWeight={"semibold"}>
                          Select the category most relevant to your kwork.
                        </Text>
                        <Text fontSize={"xs"}>
                          Selecting the right category makes it easier for
                          buyers to find and order your service. With hundreds
                          of categories and subcategories on our platform,
                          there's definitely a home for your kwork!
                        </Text>
                      </>
                    }
                  />
                </HStack>

                {services?.length ? (
                  <FormControl w={["full"]} p={6} bgColor={"#FFF"}>
                    <HStack>
                      <FormLabel flex={1}>Services</FormLabel>
                      <Box flex={5}>
                        <CheckboxGroup
                          defaultValue={[]}
                          colorScheme="teal"
                          onChange={(values) => {
                            Formik.setFieldValue("services", values);
                            console.log(values);
                          }}
                        >
                          <Stack
                            direction={["column", "row"]}
                            alignItems={"flex-start"}
                            justifyContent={"flex-start"}
                            gap={4}
                          >
                            {services?.map((service, key) => (
                              <Checkbox value={service?.value} key={key}>
                                {service?.label}
                              </Checkbox>
                            ))}
                          </Stack>
                        </CheckboxGroup>
                      </Box>
                    </HStack>
                  </FormControl>
                ) : null}

                {attributes?.length ? (
                  <FormControl w={["full"]} p={6} bgColor={"#FFF"}>
                    <HStack>
                      <FormLabel flex={1}>Attributes</FormLabel>
                      <Box flex={5}>
                        <Stack
                          direction={["column", "row"]}
                          alignItems={"flex-start"}
                          justifyContent={"flex-start"}
                          gap={4}
                        >
                          {attributes?.map((attributeGroup) => (
                            <Stack
                              direction={["column", "row"]}
                              alignItems={"flex-start"}
                              justifyContent={"flex-start"}
                              gap={4}
                            >
                              {attributeGroup?.attributes?.map(
                                (attribute, i) => (
                                  <Checkbox
                                    value={attribute?.value}
                                    onChange={(e) =>
                                      handleAttributeClick(e.target.value)
                                    }
                                  >
                                    {attribute?.label}
                                  </Checkbox>
                                )
                              )}
                            </Stack>
                          ))}
                        </Stack>
                      </Box>
                    </HStack>
                  </FormControl>
                ) : null}

                {activeAccordions?.includes(1) ? null : (
                  <HStack
                    justifyContent={"flex-end"}
                    mt={8}
                    py={8}
                    px={6}
                    bgColor={"#f6f6f6"}
                  >
                    <Button
                      colorScheme="green"
                      bgColor={"brand.primary"}
                      onClick={() => handlePartialUpdate(2)}
                      isLoading={loading}
                      fontSize={"sm"}
                    >
                      Next
                    </Button>
                  </HStack>
                )}
              </Box>
            </GigAccordion>

            {/* Description & Files */}
            <GigAccordion
              step={2}
              title={"Description & Files"}
              isDisabled={activeStep <= 1}
            >
              <Box>
                <Box py={4} px={6}>
                  <Text fontWeight={"semibold"}>Upload Banner Images</Text>
                  <FileDropzone
                    onUpload={(files) => Formik.setFieldValue("banners", files)}
                  />
                </Box>

                <CreateGigPopup
                  trigger={
                    <Box py={4} px={6}>
                      <Text fontWeight={"medium"} pb={4}>
                        Description
                      </Text>
                      <SunEditor
                        onChange={(value) =>
                          Formik.setFieldValue("description", value)
                        }
                        height="520px"
                        setOptions={{
                          buttonList: [["bold", "italic", "list"]],
                        }}
                      />
                    </Box>
                  }
                  body={
                    <>
                      <Text fontSize={"sm"} mb={4} fontWeight={"semibold"}>
                        Tell buyers about you and your kwork.
                      </Text>
                      <Text fontSize={"xs"}>
                        This is your chance to be creative! What sets you apart
                        from other freelancers? Should buyers choose you for
                        your experience, specialized knowledge, or something
                        else?
                      </Text>
                    </>
                  }
                />

                <Box py={4} px={6}>
                  <Text fontWeight={"semibold"}>
                    Upload Other Attachments (optional)
                  </Text>
                  <FileDropzone
                    onUpload={(files) =>
                      Formik.setFieldValue("attachments", files)
                    }
                    accept={"*"}
                  />
                </Box>

                {activeAccordions?.includes(2) ? null : (
                  <HStack
                    justifyContent={"flex-end"}
                    mt={8}
                    py={8}
                    px={6}
                    bgColor={"#f6f6f6"}
                  >
                    <Button
                      colorScheme="green"
                      bgColor={"brand.primary"}
                      onClick={() => handlePartialUpdate(3)}
                      isLoading={loading}
                      fontSize={"sm"}
                    >
                      Next
                    </Button>
                  </HStack>
                )}
              </Box>
            </GigAccordion>

            {/* Pricing */}
            <GigAccordion
              step={3}
              title={"Pricing"}
              isDisabled={activeStep <= 2}
            >
              <Box>
                <FormControl py={4} px={6}>
                  <CreateGigPopup
                    trigger={
                      <HStack w={"full"} justifyContent={"space-between"}>
                        <HStack gap={8} justifyContent={"flex-start"}>
                          <FormLabel w={"max"}>Pricing Model</FormLabel>
                          <Select
                            w={"xs"}
                            name="pricingModel"
                            onChange={Formik.handleChange}
                            placeholder="Please Select"
                          >
                            <option value="fixed">Fixed Price</option>
                            {/* <option value="hourly">Hourly Rate</option> */}
                            <option value="plans">Plan Based</option>
                          </Select>
                        </HStack>
                        {Formik.values.pricingModel == "plans" ? (
                          <HStack w={"full"} justifyContent={"flex-end"}>
                            <Text fontWeight={"semibold"}>1 Plan</Text>
                            <Switch
                              onChange={(e) =>
                                Formik.setFieldValue(
                                  "totalPlans",
                                  e.target.checked ? 3 : 1
                                )
                              }
                            />
                            <Text fontWeight={"semibold"}>3 Plans</Text>
                          </HStack>
                        ) : null}
                      </HStack>
                    }
                    body={
                      <>
                        <Text fontSize={"sm"} fontWeight={"semibold"}>
                          Chose Your Pricing Model
                        </Text>
                        <br />
                        <Text fontSize={"xs"}>
                          <span style={{ fontWeight: "bold" }}>Fixed: </span>
                          You'll charge the customer a fixed amount for this Gig
                        </Text>
                        <Text fontSize={"xs"}>
                          <span style={{ fontWeight: "bold" }}>
                            Plan Based:{" "}
                          </span>
                          You'll be able to create different plans for different
                          requirements.
                        </Text>
                      </>
                    }
                  />
                </FormControl>

                {Formik.values.pricingModel == "fixed" ? (
                  <FormControl py={4} px={6}>
                    <HStack>
                      <FormLabel flex={1}>Fixed Price</FormLabel>
                      <HStack flex={5}>
                        <InputGroup w={"xs"}>
                          <InputLeftAddon children={user?.currency?.symbol} />
                          <Input
                            type="number"
                            name="fixedPrice"
                            onChange={Formik.handleChange}
                            placeholder="Fixed price"
                          />
                        </InputGroup>
                      </HStack>
                    </HStack>
                    {!user?.currency?.isoCode ? (
                      <Text
                        color={"red"}
                        py={2}
                        fontSize={"xs"}
                        fontWeight={"semibold"}
                      >
                        Please add your currency in profile
                      </Text>
                    ) : null}
                  </FormControl>
                ) : null}

                {Formik.values.pricingModel == "plans" ? null : (
                  <FormControl py={4} px={6}>
                    <HStack>
                      <FormLabel flex={1}>Revisions</FormLabel>
                      <HStack flex={5}>
                        <Input
                          w={"xs"}
                          name="revisions"
                          onChange={Formik.handleChange}
                          placeholder="How many revisions are allowed?"
                        />
                      </HStack>
                    </HStack>
                  </FormControl>
                )}

                {Formik.values.pricingModel == "plans" ? null : (
                  <FormControl py={4}>
                    <CreateGigPopup
                      trigger={
                        <HStack px={6}>
                          <FormLabel flex={1}>Delivery Days</FormLabel>
                          <HStack flex={5}>
                            <InputGroup w={"xs"}>
                              <Input
                                type="number"
                                name="deliveryDays"
                                onChange={Formik.handleChange}
                                placeholder="Max. delivery days"
                              />
                              <InputRightAddon children={"Days"} />
                            </InputGroup>
                          </HStack>
                        </HStack>
                      }
                      body={
                        <>
                          <Text fontSize={"xs"}>
                            Enter the number pf days you can comfortably finish
                            your Gig in.
                          </Text>
                        </>
                      }
                    />
                  </FormControl>
                )}

                {Formik.values.pricingModel == "plans" ? (
                  <Box py={4} px={6}>
                    <PricingTable
                      totalPlans={Formik.values.totalPlans}
                      data={Formik.values.pricingTable}
                      onUpdate={(data) =>
                        Formik.setFieldValue("pricingTable", data)
                      }
                      isViewOnly={true}
                    />
                  </Box>
                ) : null}

                {activeAccordions?.includes(3) ? null : (
                  <HStack
                    justifyContent={"flex-end"}
                    mt={8}
                    py={8}
                    px={6}
                    bgColor={"#f6f6f6"}
                  >
                    <Button
                      colorScheme="green"
                      bgColor={"brand.primary"}
                      onClick={() => handlePartialUpdate(4)}
                      isLoading={loading}
                      fontSize={"sm"}
                    >
                      Next
                    </Button>
                  </HStack>
                )}
              </Box>
            </GigAccordion>

            {/* Client Requirements */}
            <GigAccordion
              step={4}
              title={"Requirements from Client"}
              isDisabled={activeStep <= 3}
            >
              <CreateGigPopup
                trigger={
                  <Box py={4} px={6}>
                    <Text fontSize={"md"} fontWeight={"medium"} pb={4}>
                      What details do you need from your client?
                    </Text>
                    <SunEditor
                      onChange={(value) =>
                        Formik.setFieldValue("requirements", value)
                      }
                      height="520px"
                      setOptions={{
                        buttonList: [["bold", "italic", "list"]],
                      }}
                    />
                  </Box>
                }
                body={
                  <>
                    <Text fontSize={"sm"} fontWeight={"semibold"}>
                      Indicate everything you need from the buyer to complete
                      their order successfully.
                    </Text>
                    <br />
                    <Text fontSize={"xs"}>
                      If possible, make a list of questions, materials,
                      documentation, and other information you need. Being
                      thorough here saves you hours of back-and-forth in the
                      future and allows you to get started on orders
                      immediately.
                    </Text>
                  </>
                }
              />

              {activeAccordions?.includes(4) ? null : (
                <HStack
                  justifyContent={"flex-end"}
                  mt={8}
                  py={8}
                  px={6}
                  bgColor={"#f6f6f6"}
                >
                  <Button
                    colorScheme="green"
                    bgColor={"brand.primary"}
                    onClick={() => handlePartialUpdate(5)}
                    isLoading={loading}
                    fontSize={"sm"}
                  >
                    Next
                  </Button>
                </HStack>
              )}
            </GigAccordion>

            {/* FAQs */}
            <GigAccordion
              step={5}
              title={"Frequently Asked Questions (FAQs)"}
              isDisabled={activeStep <= 4}
            >
              <Box py={4} px={6}>
                <FaqsContainer
                  data={Formik.values.faqs}
                  onUpdate={(data) => Formik.setFieldValue("faqs", data)}
                />
              </Box>

              <HStack
                justifyContent={"flex-end"}
                my={8}
                px={6}
                py={8}
                bgColor={"#F6F6F6"}
              >
                <Button
                  colorScheme="green"
                  bgColor={"brand.primary"}
                  onClick={Formik.handleSubmit}
                  isLoading={loading}
                  fontSize={"sm"}
                  isDisabled={activeStep <= 4}
                >
                  Submit
                </Button>
              </HStack>
            </GigAccordion>
          </Accordion>
        </Box>
      </Box>
    </>
  );
};

export default CreateGig;
