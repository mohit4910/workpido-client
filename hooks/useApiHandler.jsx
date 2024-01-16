"use client";
import { API_BASE_URL, STORAGE_PROVIDER } from "@/lib/constants";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { toast } from "react-toastify";
import useAuth from "./useAuth";
import { useRouter } from "next/navigation";

const useApiHandler = () => {
  const { user } = useAuth();
  const { push } = useRouter();

  const Toast = useToast();
  const [mediaUrl, setMediaUrl] = useState("");

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
        : "https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg";
      setMediaUrl(url);
      return url;
    } else {
      setMediaUrl(referenceUrl);
      return referenceUrl;
    }
  };

  const uploadAndAttachMedia = async ({
    files,
    path,
    entryId,
    field,
    modelName,
  }) => {
    try {
      if (!files.length) {
        toast.error("No files selected!");
        throw new Error("No files selected");
      }
      if (!entryId) {
        toast.error("No files selected!");
        throw new Error("Entry ID is required");
      }
      const form = new FormData();
      for (let i = 0; i < files?.length; i++) {
        const file = files[i];
        form.append("files", file);
      }
      // form.append("path", `/user_${user?.id}/${path}`);
      form.append("field", field);
      form.append("refId", entryId);
      form.append("ref", modelName);
      const res = await axios.post(`${API_BASE_URL}/upload`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + Cookies.get("token"),
        },
      });
      console.log(res.data);
      return {
        message: `${field} Files uploaded successfully!`,
        data: res.data,
      };
    } catch (error) {
      toast.error("Error uploading media");
      throw new Error(`Error uploading ${field}`);
    }
  };

  const prepareOrder = ({ gigId, title, type, amount, currency }) => {
    Cookies.set(
      "order",
      JSON.stringify({ gig: gigId, currency: currency, title: title, amount: amount, type: type })
    );
    push("/payment")
  };

  return {
    handleError,
    getMediaUrl,
    mediaUrl,
    uploadAndAttachMedia,
    prepareOrder
  };
};

export default useApiHandler;
