"use client";
import { useDropzone } from "react-dropzone";
import React, { useState, useEffect, useCallback } from "react";
import { Box, Icon, Text, VStack, HStack, Image, Input } from "@chakra-ui/react";
import { AddCircle } from "iconsax-react";
import { BsXCircleFill } from "react-icons/bs";

const FileDropzone = ({onUpload}) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [files, setFiles] = useState([]);

  const onDrop = useCallback(async (acceptedFiles) => {
    console.log(acceptedFiles);
    setFiles(acceptedFiles);
    const newImages = acceptedFiles.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });
    });

    Promise.all(newImages)
      .then((imagePreviews) =>
        setSelectedImages((prevImages) => [...prevImages, ...imagePreviews])
      )
      .catch((error) => console.error("Error reading file:", error));
  }, []);

  const removeImage = (index) => {
    setSelectedImages((prevImages) => prevImages.filter((_, i) => i !== index));
    setFiles(files?.filter((_, i) => i !== index));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
    multiple: true,
  });

  useEffect(()=>{
    onUpload(files)
  },[files])

  return (
    <>
      <VStack
        {...getRootProps()}
        w={["full"]}
        h={"xs"}
        rounded={16}
        border={"1px"}
        borderStyle={"dashed"}
        bg={"#FAFAFA"}
        cursor={"pointer"}
        justifyContent={"center"}
      >
        <Input visibility={"hidden"} {...getInputProps()} />
        {isDragActive ? (
          <Text>Drop Your Files Here...</Text>
        ) : (
          <VStack>
            <AddCircle size="32" color="#FF8A65" />
            <Text>Click to Upload Or Drop Your Files Here...</Text>
          </VStack>
        )}
      </VStack>
      <HStack py={4}>
        {selectedImages.map((image, index) => (
          <Box key={index} pos={"relative"}>
            <Icon
              as={BsXCircleFill}
              color={"red"}
              pos={"absolute"}
              size={12}
              top={0}
              right={0}
              onClick={() => removeImage(index)}
            />
            <Image src={image} w={24} h={24} rounded={16} objectFit={"cover"} />
          </Box>
        ))}
      </HStack>
    </>
  );
};

export default FileDropzone;
