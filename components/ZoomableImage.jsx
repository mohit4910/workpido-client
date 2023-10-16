"useClient";

import { Box, Image } from "@chakra-ui/react";
import React, { useState } from "react";

const ZoomableImage = ({ src, alt, caption }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoom = () => {
    setIsZoomed(true);
  };

  const handleUnzoom = () => {
    setIsZoomed(false);
  };

  return (
    <Box
      display="flex"
      borderRadius="sm"
      overflow="hidden"
      position="relative"
      className="catalog m-1"
      transition="0.3s ease-in-out"
      _hover={{ shadow: "xl", brightness: "0.2" }}
    >
      <Box textDecoration="none" _hover={{ textDecoration: "none" }}>
        <Image
          src={src}
          alt={alt}
          width="280px"
          height="280px"
          objectFit="cover"
          transform="scale(1.0)"
          transition="0.3s ease-in-out"
          _hover={{
            transform: "scale(1.05)",
          }}
        />
      </Box>

      {caption && (
        <h3 className="text-white p-4 text-2xl font-bold bg-gradient-to-b from-transparent to-black absolute bottom-0 left-0 w-full">
          {caption}
        </h3>
      )}
    </Box>
  );
};

export default ZoomableImage;
