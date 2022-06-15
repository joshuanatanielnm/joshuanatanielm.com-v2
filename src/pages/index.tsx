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
import TextMarkdown from '../components/text_markdown'
import { ExperienceList } from '../components/list'
import {
  PageContainer,
  ContentSectionContainer,
  ContentItemContainer,
} from '../layouts/'
import { ProjectCard, AppearanceCard } from '../components/card'

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
          spacing='4'
          minH='100vh'
          direction='column'
          justifyContent='center'
          id='hero'
        >
          <Text fontSize='4xl'>{'Hello, I`m Joshua Manuputty'}</Text>
          <Heading
            as='h1'
            size='4xl'
            textShadow='-7px -5px #ffffff'
            pb='3'
            bgGradient='linear(to-l, #879af2, #d3208b, #fda000)'
            bgClip='text'
          >
            I build things for the web.
          </Heading>
          <TextMarkdown>{data.home.title}</TextMarkdown>
          <Flex gap={6} pt='10'>
            {SOCIAL_LINKS.map((item) => (
              <NextLink href={item.link} key={item.title} passHref>
                <Link target='_blank' p='2'>
                  <Center
                    as='button'
                    arial-label={item.title}
                    color='gray.100'
                    _hover={{
                      color: 'white',
                    }}
                  >
                    {item.icon}
                  </Center>
                </Link>
              </NextLink>
            ))}
          </Flex>
        </Stack>

        <Stack spacing='20'>
          <ContentSectionContainer>
            <Heading fontSize='4xl' as='h2' id='about'>
              About
            </Heading>
            <Stack
              direction={{ base: 'column-reverse', lg: 'row' }}
              justifyContent='space-between'
            >
              <Box w={{ base: 'full', lg: '70%' }}>
                <TextMarkdown>{data.home.aboutMe}</TextMarkdown>
              </Box>
              <Box>
                <Image
                  src={data.home.aboutImage.url}
                  alt={data.home.aboutImage.alt}
                  w={{ base: '40', lg: '72' }}
                  height='auto'
                />
              </Box>
            </Stack>
          </ContentSectionContainer>

          <ContentSectionContainer>
            <Heading fontSize='4xl' as='h2' id='experience'>
              Experience
            </Heading>
            <ContentItemContainer>
              <Box>
                <Heading fontSize='2xl' as='h3' color='white' pb='2'>
                  Work Experience
                </Heading>
                <UnorderedList fontSize='xl'>
                  {data.allWorkExperiences.map((v: ExperienceType) => (
                    <ExperienceList value={v} key={v.at} />
                  ))}
                </UnorderedList>
              </Box>
              <Box>
                <Heading fontSize='2xl' as='h3' color='white' pb='2'>
                  Community Experience
                </Heading>
                <UnorderedList fontSize='xl'>
                  {data.allCommunityExperiences.map((v: ExperienceType) => (
                    <ExperienceList value={v} key={v.at} />
                  ))}
                </UnorderedList>
              </Box>
            </ContentItemContainer>
          </ContentSectionContainer>

          <ContentSectionContainer>
            <Heading fontSize='4xl' as='h2' id='work'>
              Some Things I’ve Built
            </Heading>
            <ContentItemContainer>
              {data.allProjects.map((v: ProjectType) => (
                <ProjectCard value={v} key={v.name} />
              ))}
            </ContentItemContainer>
          </ContentSectionContainer>

          <ContentSectionContainer>
            <Heading fontSize='4xl' as='h2' id='apparence'>
              Recent Appearances
            </Heading>
            <ContentItemContainer>
              {data.allTalks.map((v: TalkType) => (
                <AppearanceCard value={v} key={v.name} />
              ))}
            </ContentItemContainer>
          </ContentSectionContainer>
        </Stack>

        <Stack justifyItems='center' textAlign='center' pt='24'>
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