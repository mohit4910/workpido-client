"use client";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { API } from "@/lib/api";
import { API_BASE_URL, STORAGE_PROVIDER } from "@/lib/constants";

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [currentRole, setCurrentRole] = useState("seller");
  const [avatarUrl, setAvatarUrl] = useState("");

  const { push } = useRouter();

  useEffect(() => {
    const cookieToken = Cookies.get("token");
    if (Boolean(cookieToken)) {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    (async ()=>{
      const parsedUser = JSON.parse(localStorage.getItem("user"));
      if (isLoggedIn) {
        if (parsedUser?.id) {
          setUser({ ...parsedUser });
          getAvatar(parsedUser?.avatar?.url);
        } else {
          await me();
        }
      }
    })()
  }, [isLoggedIn]);

  const onChangeRole = (role = "seller") => {
    Cookies.set("currentRole", role);
    setCurrentRole(role);
    if (role == "buyer") {
      push("/");
    }
    if (role == "seller") {
      push("/seller-dashboard");
    }
  };

  const getAvatar = (referenceUrl) => {
    if (STORAGE_PROVIDER == "local") {
      const url = referenceUrl
        ? API_BASE_URL?.replace("/api", "") + referenceUrl
        : "/avatar-placeholder.jpg";
      setAvatarUrl(url);
      return url;
    } else {
      setAvatarUrl(referenceUrl);
      return referenceUrl;
    }
  };

  const onLogout = () => {
    Cookies.remove("token");
    localStorage.removeItem("user");
    setUser(null);
    window.location.replace("/");
  };

  const me = async () => {
    try {
      const res = await API.me();
      localStorage.setItem("user", JSON.stringify(res));
      setUser(res);
    } catch (error) {
      toast.error("Couldn't fetch your details");
    }
  };

  const getToken = () => {
    return Cookies.get("token");
  };

  return {
    me,
    user,
    isLoggedIn,
    currentRole,
    onChangeRole,
    onLogout,
    getToken,
    getAvatar,
    avatarUrl,
  };
};

export default useAuth;
