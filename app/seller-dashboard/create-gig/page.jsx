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
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";
import FileDropzone from "@/components/FileDropzone";
import useAuth from "@/hooks/useAuth";
import PricingTable from "@/components/PricingTable";
import FaqsContainer from "@/components/FaqsContainer";
import axios from "axios";
import { API_BASE_URL } from "@/lib/constants";

const CreateGig = () => {
  const { user } = useAuth();

  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [services, setServices] = useState([]);
  const [attributes, setAttributes] = useState([]);

  const Formik = useFormik({
    initialValues: {
      title: "",
      category: "",
      subCategory: "",
      overview: "",
      description: "",
      services: [],
      attributes: [],
      pricingModel: "",
      fixedPrice: "",
      hourlyPrice: "",
      startingPrice: "",
      totalPlans: "1",
      pricingTableData: null,
      revisions: "",
      deliveryDays: "",
      faqs: null,
      banners: null,
      attachments: null,
    },
    onSubmit: async (values) => {
      console.log(values);
      try {
        const res = await axios.post(`${API_BASE_URL}/api/gigs/create`, values, {
          headers: {
            'Content-Type' : "multipart/form-data"
          }
        });
        console.log(res);
        toast.success("Gig created successfully!");
      } catch (error) {
        toast.error("Couldn't create Gig");
      }
    },
  });

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
    const filteredData = data
      ?.find((item) => item?.id == Formik.values.category)
      ?.subCategories?.map((item) => ({ label: item?.title, value: item?.id }));
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
    if (Formik.values.totalPlans > 3) Formik.setFieldValue("totalPlans", 3);
  }, [Formik.values.totalPlans]);

  useEffect(() => {
    if (!Formik.values.pricingModel) {
      Formik.setFieldValue("fixedPrice", "");
      Formik.setFieldValue("hourlyPrice", "");
      Formik.setFieldValue("startingPrice", "");
    }
  }, [Formik.values.pricingModel]);

  function handleAttributeClick(attribute){
    const i = Formik.values.attributes.indexOf(attribute)
    let data = Formik.values.attributes

    if(i == -1){
      data.push(attribute)
    }
    else {
      data.splice(i, 1)
    }

    Formik.setFieldValue("attributes", data)
  }

  return (
    <>
      <Box p={[4, 8, 12]}>
        <Text fontWeight={"bold"} fontSize={"2xl"}>
          Create New Gig
        </Text>
        <br />
        <br />

        <Box w={["full", "3xl", "4xl"]}>
          <Accordion allowMultiple>
            {/* Title & Category */}
            <GigAccordion step={1} title={"Title & Category"}>
              <Box py={4}>
                <FormControl py={2}>
                  <HStack alignItems={"flex-start"}>
                    <FormLabel flex={1}>Title</FormLabel>
                    <Textarea
                      flex={5}
                      noOfLines={2}
                      maxLength={70}
                      h={20}
                      fontSize={"xl"}
                      fontWeight={"medium"}
                      resize={"none"}
                      w={"full"}
                      name="title"
                      onChange={Formik.handleChange}
                      placeholder="I will create a professional website..."
                    />
                  </HStack>
                </FormControl>
                <HStack alignItems={"flex-start"} py={4}>
                  <FormLabel flex={1}>Category</FormLabel>
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
                </HStack>

                {services?.length ? (
                  <FormControl py={4}>
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
                  <FormControl py={4}>
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
                                {attributeGroup?.attributes?.map((attribute, i) => (
                                  <Checkbox value={attribute?.value} onChange={e => handleAttributeClick(e.target.value)}>
                                    {attribute?.label}
                                  </Checkbox>
                                ))}
                              </Stack>
                            ))}
                        </Stack>
                      </Box>
                    </HStack>
                  </FormControl>
                ) : null}
              </Box>
            </GigAccordion>

            {/* Description & Files */}
            <GigAccordion step={2} title={"Description & Files"}>
              <Box py={4}>
                <Box py={4}>
                  <Text fontWeight={"semibold"}>Upload Banner Images</Text>
                  <FileDropzone
                    onUpload={(files) => Formik.setFieldValue("banners", files)}
                  />
                </Box>

                <Box py={4}>
                  <Text fontWeight={"semibold"}>Detailed Description</Text>
                  <SunEditor
                    onChange={(value) =>
                      Formik.setFieldValue("description", value)
                    }
                    height="520px"
                  />
                </Box>

                <Box py={4}>
                  <Text fontWeight={"semibold"}>
                    Upload Other Attachments (optional)
                  </Text>
                  <FileDropzone
                    onUpload={(files) =>
                      Formik.setFieldValue("attachments", files)
                    }
                  />
                </Box>
              </Box>
            </GigAccordion>

            {/* Pricing */}
            <GigAccordion step={3} title={"Pricing"}>
              <Box py={4}>
                <FormControl py={4}>
                  <HStack>
                    <FormLabel flex={1}>Pricing Model</FormLabel>
                    <HStack flex={5} gap={8}>
                      <Select
                        maxW={"xs"}
                        name="pricingModel"
                        onChange={Formik.handleChange}
                        placeholder="Please Select"
                      >
                        <option value="fixed">Fixed Price</option>
                        <option value="hourly">Hourly Rate</option>
                        <option value="plans">Plan Based</option>
                      </Select>
                    </HStack>
                  </HStack>
                </FormControl>

                {Formik.values.pricingModel == "fixed" ? (
                  <FormControl py={4}>
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
                ) : Formik.values.pricingModel == "hourly" ? (
                  <FormControl py={4}>
                    <HStack>
                      <FormLabel flex={1}>Hourly Price</FormLabel>
                      <HStack flex={5}>
                        <InputGroup w={"xs"}>
                          <InputLeftAddon children={user?.currency?.symbol} />
                          <Input
                            type="number"
                            name="hourlyPrice"
                            onChange={Formik.handleChange}
                            placeholder="Price per hour"
                          />
                          <InputRightAddon children={"per hr."} />
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
                ) : Formik.values.pricingModel == "plans" ? (
                  <>
                    <FormControl py={4}>
                      <HStack>
                        <FormLabel flex={1}>Total Plans</FormLabel>
                        <HStack flex={5}>
                          <Input
                            name="totalPlans"
                            id="totalPlans"
                            type="number"
                            onChange={Formik.handleChange}
                            value={Formik.values.totalPlans}
                            w={"xs"}
                            max={3}
                            min={1}
                            onBlur={async () => {
                              if (Formik.values.totalPlans < 1)
                                await Formik.setFieldValue("totalPlans", 1);
                            }}
                          />
                        </HStack>
                      </HStack>
                    </FormControl>
                    <FormControl py={4}>
                      <HStack>
                        <FormLabel flex={1}>Starting Price</FormLabel>
                        <Box flex={5}>
                          <InputGroup w={"xs"}>
                            <InputLeftAddon children={user?.currency?.symbol} />
                            <Input
                              type="number"
                              name="startingPrice"
                              onChange={Formik.handleChange}
                              placeholder="Starting price"
                            />
                          </InputGroup>
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
                        </Box>
                      </HStack>
                    </FormControl>
                  </>
                ) : null}

                <FormControl py={4}>
                  <HStack>
                    <FormLabel flex={1}>Revisions</FormLabel>
                    <HStack flex={5}>
                      <Input
                        type="number"
                        w={"xs"}
                        name="revisions"
                        onChange={Formik.handleChange}
                        placeholder="How many revisions are allowed?"
                      />
                    </HStack>
                  </HStack>
                </FormControl>

                <FormControl py={4}>
                  <HStack>
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
                </FormControl>
                {Formik.values.pricingModel == "plans" ? (
                  <Box py={4}>
                    <PricingTable
                      totalPlans={Formik.values.totalPlans}
                      data={Formik.values.pricingTableData}
                      onUpdate={(data) =>
                        Formik.setFieldValue("pricingTableData", data)
                      }
                    />
                  </Box>
                ) : null}
              </Box>
            </GigAccordion>

            {/* FAQs */}
            <GigAccordion step={4} title={"Frequently Asked Questions (FAQs)"}>
              <Box py={4}>
                <FaqsContainer
                  data={Formik.values.faqs}
                  onUpdate={(data) => Formik.setFieldValue("faqs", data)}
                />
              </Box>
            </GigAccordion>
          </Accordion>
          <HStack w={"full"} justifyContent={"flex-end"} mt={8}>
            <Button onClick={Formik.handleReset}>Reset</Button>
            <Button colorScheme="whatsapp" onClick={Formik.handleSubmit}>
              Submit for Review
            </Button>
          </HStack>
        </Box>
      </Box>
    </>
  );
};

export default CreateGig;
