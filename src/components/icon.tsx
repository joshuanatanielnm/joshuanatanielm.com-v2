import React, { ReactNode } from "react";

import { Box, Center } from "@chakra-ui/react";

interface IconProps {
  title: string;
  icon: ReactNode;
}

export const Icon = ({ title, icon }: IconProps) => {
  return (
    <Box
      _hover={{
        transform: "translateY(-4px)",
        transition: "0.2s",
      }}
    >
      <Center
        as="button"
        arial-label={title}
        color="gray.100"
        _hover={{
          color: "white",
        }}
      >
        {icon}
      </Center>
    </Box>
  );
};
