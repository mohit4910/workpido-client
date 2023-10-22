"use client";
import { API_BASE_URL, STORAGE_PROVIDER } from "@/lib/constants";
import { useToast } from "@chakra-ui/react";
import Cookies from "js-cookie";
import { useState } from "react";

const useApiHandler = () => {
  const Toast = useToast();
  const [mediaUrl, setMediaUrl] = useState("")

  const handleError = (error, title) => {
    // if (error?.response?.status == 401) {
    //   Toast({
    //     status: "warning",
    //     title: "Your session expired!",
    //     description: "Please login again",
    //   });
    //   localStorage.clear();
    //   Cookies.remove("token");
    //   window.location.replace("/");
    //   return;
    // }
    Toast({
      status: "error",
      ...(title && { title: title }),
      description:
        error?.response?.data?.error?.message ||
        error?.response?.data?.message ||
        error?.message,
    });
  };

  const getMediaUrl = (referenceUrl) => {
    if (STORAGE_PROVIDER == "local") {
      const url = referenceUrl
        ? API_BASE_URL?.replace("/api", "") + referenceUrl
        : "/logo.png";
      setMediaUrl(url);
      return url;
    } else {
      setMediaUrl(referenceUrl);
      return referenceUrl;
    }
  };

  return {
    handleError,
    getMediaUrl,
    mediaUrl
  };
};

export default useApiHandler;
