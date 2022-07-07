import type { GetStaticProps, NextPage } from 'next'
import { NextSeo } from 'next-seo'
import NextLink from 'next/link'
import {
  Box,
  Heading,
  Stack,
  Text,
  Link,
  Image,
  UnorderedList,
  Center,
  Flex,
} from '@chakra-ui/react'
import {
  getHome,
  AllContent,
  ExperienceType,
  ProjectType,
  TalkType,
} from './api/fetch'
import { SOCIAL_LINKS } from '../constant/social'
import TextMarkdown from '../components/text-markdown'
import { ExperienceList } from '../components/list'
import {
  PageContainer,
  ContentSectionContainer,
  GridItemContainer,
  StackItemContainer,
} from '../components/layouts/'
import { ProjectCard, AppearanceCard } from '../components/card'
import { motion } from 'framer-motion'
import { Icon } from '../components/icon'

export interface HomePageProps {
  data: AllContent
}

export const getStaticProps: GetStaticProps = async () => {
  const data = (await getHome()) || []

  return {
    props: { data },
  }
}

const Home: NextPage<HomePageProps> = ({ data }) => {
  return (
    <Box bgColor='#011627' color='white' minH='100vh'>
      <NextSeo
        title='Joshua Nathaniel M - Frontend Developer'
        description='I am a software engineer who likes to create user interfaces'
        openGraph={{
          title: 'Joshua Nathaniel M - Frontend Developer',
          description:
            'I am a software engineer who likes to create user interfaces',
          url: 'https://joshuanatanielm.com/',
        }}
      />

      <PageContainer>
        <Stack
          spacing={{ base: 6, md: 4 }}
          minH='100vh'
          direction='column'
          justifyContent='center'
          id='hero'
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
                delay: 0.2,
                ease: 'easeIn',
              },
            },
          }}
        >
          <Text fontSize={{ base: '3xl', md: '4xl' }} lineHeight={10}>
            Hello, I`m Joshua Manuputty
          </Text>
          <Heading
            as='h1'
            size={{ base: '3xl', md: '4xl' }}
            textShadow='-7px -5px #ffffff'
            pb={3}
            bgGradient='linear(to-l, #879af2, #d3208b, #fda000)'
            bgClip='text'
          >
            I build things for the web.
          </Heading>
          <TextMarkdown>{data.home.title}</TextMarkdown>
          <Flex gap={6} pt={10}>
            {SOCIAL_LINKS.map((item) => (
              <NextLink href={item.link} passHref key={item.title}>
                <Link target='_blank' p={2}>
                  <Icon title={item.title} icon={item.icon} />
                </Link>
              </NextLink>
            ))}
          </Flex>
        </Stack>

        <Stack spacing={20} pt={8}>
          <ContentSectionContainer>
            <Heading fontSize={{ base: '3xl', md: '4xl' }} as='h2' id='about'>
              About
            </Heading>
            <Stack
              direction={{ base: 'column-reverse', lg: 'row' }}
              justifyContent='space-between'
              spacing={4}
            >
              <Box w={{ base: 'full', lg: '70%' }}>
                <TextMarkdown>{data.home.aboutMe}</TextMarkdown>
              </Box>
              <Center>
                <Image
                  src={data.home.aboutImage.url}
                  alt={data.home.aboutImage.alt}
                  w={{ base: 40, md: 60, lg: 72 }}
                  height='auto'
                  mx='auto'
                />
              </Center>
            </Stack>
          </ContentSectionContainer>

          <ContentSectionContainer>
            <Heading
              fontSize={{ base: '3xl', md: '4xl' }}
              as='h2'
              id='experience'
            >
              Experience
            </Heading>
            <StackItemContainer>
              <Box>
                <Heading fontSize='2xl' as='h3' color='white' pb={2}>
                  Work Experience
                </Heading>
                <UnorderedList fontSize='xl'>
                  {data.allWorkExperiences.map((v: ExperienceType) => (
                    <ExperienceList value={v} key={v.at} />
                  ))}
                </UnorderedList>
              </Box>
              <Box>
                <Heading fontSize='2xl' as='h3' color='white' pb={2}>
                  Community Experience
                </Heading>
                <UnorderedList fontSize='xl'>
                  {data.allCommunityExperiences.map((v: ExperienceType) => (
                    <ExperienceList value={v} key={v.at} />
                  ))}
                </UnorderedList>
              </Box>
            </StackItemContainer>
          </ContentSectionContainer>

          <ContentSectionContainer>
            <Heading fontSize={{ base: '3xl', md: '4xl' }} as='h2' id='work'>
              Some Things I’ve Built
            </Heading>
            <GridItemContainer>
              {data.allProjects.map((v: ProjectType) => (
                <ProjectCard value={v} key={v.name} />
              ))}
            </GridItemContainer>
          </ContentSectionContainer>

          <ContentSectionContainer>
            <Heading
              fontSize={{ base: '3xl', md: '4xl' }}
              as='h2'
              id='apparence'
            >
              Recent Appearances
            </Heading>
            <StackItemContainer>
              {data.allTalks.map((v: TalkType) => (
                <AppearanceCard value={v} key={v.name} />
              ))}
            </StackItemContainer>
          </ContentSectionContainer>
        </Stack>

        <Stack justifyItems='center' textAlign='center' pt={24}>
          <Text>Create this website with using Next.js and Chakra UI</Text>
          <Box>
            <Text>Contents licensed under CC BY-NC-SA 4.0</Text>
            <Text>MIT License © 2022 Joshua Manuputty</Text>
          </Box>
        </Stack>
      </PageContainer>
    </Box>
  )
}

export default Home
