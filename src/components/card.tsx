import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import { ProjectType, TalkType } from '../pages/api/fetch'
import NextLink from 'next/link'
import TextMarkdown from './text_markdown'
import { format } from 'date-fns'
import { LinkExternal16, Link16 } from '@chakra-icons/octicons'
import { Github } from '@chakra-icons/bootstrap'
import { motion } from 'framer-motion'

interface ProjectCardProps {
  value: ProjectType
}

interface AppearanceCardProps {
  value: TalkType
}

export const ProjectCard = ({ value }: ProjectCardProps) => {
  return (
    <Box
      _hover={{
        bgGradient: 'linear(to-l, #879af2, #d3208b, #fda000)',
      }}
      role='group'
      bg='gray.700'
      borderRadius='lg'
      overflow='hidden'
      p='1'
    >
      <Flex
        gap='4'
        bgColor='#011627'
        overflow='hidden'
        borderRadius='lg'
        direction={{ base: 'column', lg: 'row' }}
      >
        <Box>
          <Box
            w={{ base: 'full', lg: '500px' }}
            h={{ base: 'full', lg: '250px' }}
            bg='gray.700'
          >
            <Image
              src={value.image.url}
              alt={value.image.alt}
              w='full'
              h='full'
              _groupHover={{
                opacity: '1',
              }}
              opacity='0.5'
            />
          </Box>
        </Box>
        <Stack justifyContent='center' p={{ base: '4', lg: 0 }}>
          <Heading
            fontSize='2xl'
            pb='2'
            _groupHover={{
              textDecoration: 'underline',
            }}
          >
            {value.name}
          </Heading>
          <Text fontSize='xl' pb='6'>
            {value.summary}
          </Text>
          <HStack spacing='4'>
            <NextLink href={value.repositoryLink} passHref>
              <Link target='_blank' p='2'>
                <Box
                  as={motion.div}
                  whileHover={{
                    y: -4,
                  }}
                >
                  <Center
                    as='button'
                    arial-label={value.name}
                    color='gray.100'
                    _hover={{
                      color: 'white',
                    }}
                  >
                    <Github boxSize={7} />
                  </Center>
                </Box>
              </Link>
            </NextLink>
            <NextLink href={value.websiteLink} passHref>
              <Link target='_blank' p='2'>
                <Box
                  as={motion.div}
                  whileHover={{
                    y: -4,
                  }}
                >
                  <Center
                    as='button'
                    arial-label={value.name}
                    color='gray.100'
                    _hover={{
                      color: 'white',
                    }}
                  >
                    <LinkExternal16 boxSize={7} />
                  </Center>
                </Box>
              </Link>
            </NextLink>
          </HStack>
        </Stack>
      </Flex>
    </Box>
  )
}

export const AppearanceCard = ({ value }: AppearanceCardProps) => {
  return (
    <Box
      _hover={{
        bgGradient: 'linear(to-l, #879af2, #d3208b, #fda000)',
      }}
      bg='gray.700'
      borderRadius='lg'
      p='1'
    >
      <NextLink href={value.link} passHref>
        <Link target='_blank' style={{ textDecoration: 'none' }} role='group'>
          <Box bgColor='#011627' p='4' borderRadius='lg'>
            <Flex gap='4'>
              <Heading
                fontSize='2xl'
                pb='2'
                _groupHover={{
                  textDecoration: 'underline',
                }}
              >
                {value.name}
              </Heading>
              <Link16 boxSize={7} />
            </Flex>
            <Text mb='2'>
              {format(new Date(value.date), 'EEEE, MMMM do yyyy')}
            </Text>
            <TextMarkdown>{value.description}</TextMarkdown>
          </Box>
        </Link>
      </NextLink>
    </Box>
  )
}
