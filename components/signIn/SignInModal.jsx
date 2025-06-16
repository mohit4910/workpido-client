import { Form, Formik, ErrorMessage } from "formik";
import { Stack, Button, HStack } from "@chakra-ui/react";
import AppModal from "../AppModal";
import SignupSchema from "../SigninModal.jsx";
import Input from "../Input";

const SignInModal = ({ open, setOpen, intent }) => {
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
    <AppModal
      title={intent == "login" ? "Login" : "Forgot Password"}
      isOpen={open}
      setIsOpen={setOpen}
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
                    <span onClick={() => setSignUpIsOpen(true)}>Join now</span>
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
  );
};
export default SignInModal;
