import React from "react";
import logo from "../assets/logo.png";
import Image from "next/image";
import { Box } from "@chakra-ui/react";

const Stat = ({ value, text }) => {
  return (
    <Box borderRight="1px" className="py-6 text-center">
      <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl text-[#177de5]">
        {value}
      </h6>
      <p className="text-sm font-medium tracking-widest text-gray-400 uppercase lg:text-base">
        {text}
      </p>
    </Box>
  );
};

const Stats = () => {
  return (
    <Box
      border="1px"
      className="py-16 mx-auto mt-8 rounded-lg shadow-lg sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:py-10"
    >
      <div className="grid grid-cols-1 row-gap-8 md:grid-cols-4">
        <Box
          borderRight="1px"
          className="flex flex-col items-center justify-center py-6 text-center"
        >
          <Image
            // textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            // color={useColorModeValue("gray.800", "white")}
            src={logo}
            // className="h-auto w-30"
            height={50}
            alt={"workpido"}
          />

          <p className="text-sm font-medium tracking-widest text-gray-400 uppercase lg:text-base">
            Professional Serives
          </p>
        </Box>

        <Stat value={"12.9K"} text={"Active Gigs"} />
        <Stat value={"1,284"} text={"New Gigs this week"} />
        <Stat value={"876"} text={" new buyers this week"} />
      </div>
    </Box>
  );
};

export default Stats;
