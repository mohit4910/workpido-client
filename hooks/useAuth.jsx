"use client";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { API } from "@/lib/api";

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [currentRole, setCurrentRole] = useState("seller");

  const { push, refresh } = useRouter();

  useEffect(() => {
    const cookieToken = Cookies.get("token");
    if (cookieToken) {
      setIsLoggedIn(true);
    }

    const role = Cookies.get("currentRole");
    if (role) {
      setCurrentRole(role);
    }
  }, []);

  useEffect(() => {
    const parsedUser = JSON.parse(localStorage.getItem("user"));
    (async () => {
      if (isLoggedIn && !parsedUser?.id) {
        await me();
      }
    })();
  }, [isLoggedIn]);

  const changeCurrentRole = (role = "seller") => {
    Cookies.set("currentRole", role);
    setCurrentRole(role);
  };

  const onLogout = () => {
    Cookies.remove("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUser(null);
    push("/");
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
    changeCurrentRole,
    onLogout,
    getToken,
  };
};

export default useAuth;
