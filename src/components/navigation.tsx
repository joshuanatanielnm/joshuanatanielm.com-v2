import { Box, HStack, chakra, Flex } from '@chakra-ui/react'
import { NAVIGATION } from '../constant/routes'
import React from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

const NavigationLink = chakra(Link)

export const Navigation = () => {
  return (
    <HStack
      justifyContent='space-between'
      position='fixed'
      bottom={10}
      bg='blackAlpha.800'
      w='5xl'
      px={{ base: '5', lg: '10' }}
      rounded='2xl'
      fontSize={{ base: 'lg', lg: 'xl' }}
      maxW='calc(100vw - 14px)'
      boxShadow='dark-lg'
      overflow='auto !important'
      spacing='6'
      as={motion.div}
      animate='visible'
      initial='hidden'
      variants={{
        hidden: {
          opacity: 0,
          y: 20,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.5,
            ease: 'easeIn',
          },
        },
      }}
    >
      <Flex cursor='pointer' direction='column' role='group' fontWeight='bold'>
        <NavigationLink
          activeClass='active'
          to='hero'
          spy={true}
          smooth={true}
          color='gray.300'
          _groupHover={{
            color: 'white',
          }}
          py='6'
          offset={-30}
          duration={1000}
        >
          Joshua
        </NavigationLink>
        <Box
          w='full'
          h='1'
          _groupHover={{
            bgGradient: 'linear(to-l, #879af2, #d3208b, #fda000)',
          }}
          justifyContent='flex-end'
          rounded='lg'
        />
      </Flex>
      <HStack spacing='5'>
        {NAVIGATION.map((v) => (
          <Flex cursor='pointer' direction='column' role='group' key={v.path}>
            <NavigationLink
              activeClass='active'
              to={v.path}
              spy={true}
              smooth={true}
              color='gray.300'
              _groupHover={{
                color: 'white',
              }}
              py='6'
              offset={-30}
              duration={1000}
            >
              {v.title}
            </NavigationLink>
            <Box
              w='full'
              h='1'
              _groupHover={{
                bgGradient: 'linear(to-l, #879af2, #d3208b, #fda000)',
              }}
              justifyContent='flex-end'
              rounded='lg'
            />
          </Flex>
        ))}
      </HStack>
    </HStack>
  )
}
