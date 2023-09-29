import React from "react";
import AppModal from "./AppModal";
import { Heading, Stack, Text, Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { API } from "@/lib/api";
import Input from "./Input";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  username: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

const SignupModal = () => {
  const router = useRouter();

  const handleSubmit = (values, { setSubmitting, setFieldError }) => {
    // Call your API here to handle form submission

    console.log(values);

    // Example API call (you should replace this with your actual API call)
    API.signup(values)
      .then((response) => {
        // Handle success, e.g., redirect to a new page
        alert("Signup successful");
        // router.push("/dashboard");
      })
      .catch((error) => {
        // Handle error, e.g., display error message
        alert("Signup failed");

        setFieldError("error", "An error occurred. Please try again.");
      })
      .finally(() => {
        alert("Signup idk");

        setSubmitting(false);
      });
  };

  return (
    <AppModal title="Sign Up" btnText="Sign Up">
      <Formik
        initialValues={{ email: "", username: "", password: "" }}
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
          <Form>
            <Stack spacing={4} px={1}>
              {console.log(values)}
              <Input.Free
                type="email"
                name="email"
                placeholder="Email"
                label="Email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                touched={touched.email}
                error={errors.email}
                isRequired
              />
              <Input.Free
                type="text"
                name="username"
                placeholder="Username"
                label="Username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                touched={touched.username}
                error={errors.username}
                isRequired
              />
              <Input.Free
                type="password"
                name="password"
                placeholder="Password"
                label="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                touched={touched.password}
                error={errors.password}
                isRequired
              />

              <Button
                bg="brand.primary"
                fontWeight={400}
                textColor={"white"}
                type="submit"
                isLoading={isSubmitting}
              >
                Sign Up
              </Button>
              <ErrorMessage name="error" component="div" />
            </Stack>
          </Form>
        )}
      </Formik>
    </AppModal>
  );
};

export default SignupModal;
