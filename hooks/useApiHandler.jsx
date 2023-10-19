"use client";
import { useToast } from "@chakra-ui/react";
import Cookies from "js-cookie";

const useApiHandler = () => {
  const Toast = useToast();

  const handleError = (error, title) => {
    if (error?.response?.status == 401) {
      Toast({
        status: "warning",
        title: "Your session expired!",
        description: "Please login again",
      });
      localStorage.clear();
      Cookies.remove("token");
      window.location.replace("/");
      return;
    }
    Toast({
      status: "error",
      ...(title && { title: title }),
      description:
        error?.response?.data?.error?.message ||
        error?.response?.data?.message ||
        error?.message,
    });
  };

  return {
    handleError,
  };
};

export default useApiHandler;
