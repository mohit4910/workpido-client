"useClient";

import { Box, Image } from "@chakra-ui/react";
import React, { useState } from "react";

const ZoomableImage = ({ src, alt, caption, size }) => {
  return (
    <Box
      display="flex"
      borderRadius="sm"
      overflow="hidden"
      position="relative"
      className="m-1 rounded-lg catalog"
      transition="0.3s ease-in-out"
      _hover={{ shadow: "xl", brightness: "0.2" }}
    >
      <Box
        textDecoration="none"
        _hover={{ textDecoration: "none" }}
      >
        <Image
          src={src}
          alt={alt}
          width={size ?? "280px"}
          height={size ?? "280px"}
          objectFit="cover"
          transition="0.3s ease-in-out"
          _hover={{
            transform: "scale(1.05)",
          }}
          rounded={2}
          border={"0.5px solid"}
          borderColor={"#999"}
        />
      </Box>

      {caption && (
        <h3 className="absolute bottom-0 left-0 w-full p-4 text-2xl font-bold text-white bg-gradient-to-b from-transparent to-black">
          {caption}
        </h3>
      )}
    </Box>
  );
};

export default ZoomableImage;
