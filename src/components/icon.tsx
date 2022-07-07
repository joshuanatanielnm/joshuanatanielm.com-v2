import React, { ReactNode } from 'react'

import { motion } from 'framer-motion'
import { Box, Center } from '@chakra-ui/react'

interface IconProps {
  title: string
  icon: ReactNode
}

export const Icon = ({ title, icon }: IconProps) => {
  return (
    <Box
      as={motion.div}
      whileHover={{
        y: -4,
      }}
    >
      <Center
        as='button'
        arial-label={title}
        color='gray.100'
        _hover={{
          color: 'white',
        }}
      >
        {icon}
      </Center>
    </Box>
  )
}
