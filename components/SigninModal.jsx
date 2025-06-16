import React, { useState } from "react";
import AppModal from "./AppModal";
import { Heading, Stack, Text, Box, Button } from "@chakra-ui/react";
import { redirect, useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { API } from "@/lib/api";
import Input from "./Input";
import { toast } from "react-toastify";
import useAuth from "@/hooks/useAuth";
import Cookies from "js-cookie";
import SignupModal from "./SignupModal";
import SignUpModal from "./signUp/SignUpModal";
export const SignupSchema = Yup.object().shape({
  identifier: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Password is required"),
});

const SigninModal = () => {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [signUpIsOpen, setSignUpIsOpen] = useState(false);
  const [intent, setIntent] = useState("login");

  const handleSubmit = (values, { setSubmitting, setFieldError }) => {
    API.login(values)
      .then(async (response) => {
        if (!response?.jwt) {
          toast.error("Error while logging you in");
          return;
        }
        toast.success("Signin successful");

        Cookies.set("token", response.jwt);
        // if (response?.user?.isProfileComplete) {
        //   window.location.replace("/seller-dashboard");
        // }
        // if (!response?.user?.isProfileComplete){
        //   window.location.replace("/edit-profile");
        // }
        setTimeout(() => {
          window.location.replace("/seller-dashboard");
        }, 500);
        setIsOpen(false);
      })
      .catch((error) => {
        toast.error("Signin failed", error);

        setFieldError("error", "An error occurred. Please try again.");
      })
      .finally(() => {
        setSubmitting(false);
        console.log("response");
      });
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        cursor={"pointer"}
        display={{ base: "none", md: "inline-flex" }}
        fontSize={"sm"}
        fontWeight={"400"}
        color={"#111"}
        bg={"transparent"}
        _hover={{
          bg: "transparent",
          color: "brand.primary",
        }}
      >
        Login
      </Button>
      <AppModal
        title={intent == "login" ? "Login" : "Forgot Password"}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <Formik
          initialValues={{ identifier: "", password: "" }}
          validationSchema={SignupSchema}
          onSubmit={handleSubmit}
        >
          {({
            isSubmitting,
            values,
            handleChange,
            handleBlur,
            errors,
            touched,
          }) => (
            <>
              {intent == "login" ? (
                <Form>
                  <Stack spacing={4} px={1}>
                    <Input.Free
                      name="identifier"
                      placeholder="Email"
                      value={values.identifier}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      touched={touched.identifier}
                      error={errors.identifier}
                      isRequired
                    />

                    <Input.Free
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      touched={touched.password}
                      error={errors.password}
                      isRequired
                    />

                    <Text
                      textAlign={"right"}
                      color={"#177de5"}
                      cursor={"pointer"}
                      onClick={() => setIntent("forgotPassword")}
                    >
                      Forgot Password
                    </Text>

                    <Button
                      bg="brand.primary"
                      fontWeight={400}
                      textColor={"white"}
                      type="submit"
                      mt={4}
                      isLoading={isSubmitting}
                      disabled={Object.keys(errors).length > 0}
                    >
                      Login
                    </Button>
                    <ErrorMessage name="error" component="div" />
                    <div
                      class="text-center text-sm text-brand-link cursor-pointer"
                      bis_skin_checked="1"
                    >
                      <span>New to Kwork?</span>{" "}
                      <span onClick={() => setSignUpIsOpen(true)}>
                        Join now
                      </span>
                    </div>
                  </Stack>
                </Form>
              ) : (
                <Form>
                  <Stack spacing={4} px={1}>
                    <Input.Free
                      type="email"
                      name="identifier"
                      placeholder="Email"
                      label="Email"
                      value={values.identifier}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      touched={touched.identifier}
                      error={errors.identifier}
                      isRequired
                    />

                    <Button
                      bg="brand.primary"
                      fontWeight={400}
                      textColor={"white"}
                      type="submit"
                      mt={4}
                      isLoading={isSubmitting}
                      disabled={errors}
                    >
                      Send Reset Link
                    </Button>
                    <ErrorMessage name="error" component="div" />
                    <Text
                      fontSize={"xs"}
                      textAlign={"center"}
                      color={"#177de5"}
                      cursor={"pointer"}
                      onClick={() => setIntent("login")}
                    >
                      Back to Login
                    </Text>
                  </Stack>
                </Form>
              )}
            </>
          )}
        </Formik>
      </AppModal>
      <SignUpModal
        signUpIsOpen={signUpIsOpen}
        setSignUpIsOpen={setSignUpIsOpen}
      />
      
    </>
  );
};

export default SigninModal;
