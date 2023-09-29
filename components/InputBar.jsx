import { Button, Flex, Input } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { ImAttachment } from "react-icons/im";

const InputBar = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState(null);

  const handleSend = async () => {
    //Reseting the text box
    setImg(null);
    setText("");
  };

  return (
    <Flex className="p-2 bg-white h-full items-center justify-between">
      <Input
        type="text"
        placeholder="Type Something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full border-none h-full outline-none text-lg"
      />
      <Flex className="items-center justify-between">
        <ImAttachment size={20} className="cursor-pointer mx-2 my-5" />
        <Button
          className="h-full cursor-pointer rounded px-3 py-3 my-2 bg-brand-primary"
          onClick={handleSend}
        >
          Send
        </Button>
      </Flex>
    </Flex>
  );
};

export default InputBar;
