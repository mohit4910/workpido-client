import React from "react";
import logo from "../assets/logo.png";
import Image from "next/image";

const Stat = ({ value, text }) => {
  return (
    <div className="py-6 text-center md:border-r">
      <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl text-[#177de5]">
        {value}
      </h6>
      <p className="text-sm font-medium tracking-widest text-gray-400 uppercase lg:text-base">
        {text}
      </p>
    </div>
  );
};

const Stats = () => {
  return (
    <div className="py-16 mx-auto mt-8 border rounded-lg shadow-lg sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:py-10">
      <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
        <div className="flex flex-col items-center justify-center py-6 text-center md:border-r">
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
        </div>

        <Stat value={"12.9K"} text={"Active Gigs"} />
        <Stat value={"1,284"} text={"New Gigs this week"} />
        <Stat value={"876"} text={" new buyers this week"} />
      </div>
    </div>
  );
};

export default Stats;
