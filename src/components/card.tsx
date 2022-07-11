import {
  Box,
  Heading,
  HStack,
  Link,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { ProjectType, TalkType } from "../pages/api/fetch";
import NextLink from "next/link";
import TextMarkdown from "./text-markdown";
import { format } from "date-fns";
import { LinkExternal16 } from "@chakra-icons/octicons";
import { Github } from "@chakra-icons/bootstrap";
import { Icon } from "./icon";
import Image from "next/image";

interface ProjectCardProps {
  value: ProjectType;
}

interface AppearanceCardProps {
  value: TalkType;
}

export const ProjectCard = ({ value }: ProjectCardProps) => {
  return (
    <Box
      _hover={{
        bgGradient: "linear(to-l, #879af2, #d3208b, #fda000)",
      }}
      role="group"
      bg="gray.700"
      borderRadius="lg"
      p={1}
    >
      <Stack
        spacing={4}
        bgColor="#011627"
        overflow="hidden"
        borderRadius="lg"
        direction="column"
        height="full"
      >
        <Box
          _groupHover={{
            opacity: 1,
          }}
          opacity={0.5}
        >
          <Image src={value.image.url} alt="" width={800} height={420} />
        </Box>
        <Stack justifyContent="center" py={4} px={{ base: 3, md: 6 }} h="full">
          <Heading fontSize="2xl" pb={2}>
            {value.name}
          </Heading>
          <Text fontSize={{ base: "lg", md: "xl" }} pb={6}>
            {value.summary}
          </Text>
          <Spacer />
          <HStack spacing={4}>
            <NextLink href={value.repositoryLink} passHref>
              <Link target="_blank" p={2} aria-label="github repository">
                <Icon title={value.name} icon={<Github boxSize={7} />} />
              </Link>
            </NextLink>
            <NextLink href={value.websiteLink} passHref>
              <Link target="_blank" p={2} aria-label="project website">
                <Icon
                  title={value.name}
                  icon={<LinkExternal16 boxSize={7} />}
                />
              </Link>
            </NextLink>
          </HStack>
        </Stack>
      </Stack>
    </Box>
  );
};

export const AppearanceCard = ({ value }: AppearanceCardProps) => {
  return (
    <Box
      _hover={{
        bgGradient: "linear(to-l, #879af2, #d3208b, #fda000)",
      }}
      bg="gray.700"
      borderRadius="lg"
      p={1}
    >
      <NextLink href={value.link} passHref>
        <Link
          target="_blank"
          style={{ textDecoration: "none" }}
          role="group"
          aria-label={value.name}
        >
          <Box bgColor="#011627" p={4} borderRadius="lg">
            <Heading
              fontSize="2xl"
              pb={2}
              _groupHover={{
                textDecoration: "underline",
              }}
            >
              {value.name}
            </Heading>
            <Text mb={2}>
              {format(new Date(value.date), "EEEE, MMMM do yyyy")}
            </Text>
            <TextMarkdown>{value.description}</TextMarkdown>
          </Box>
        </Link>
      </NextLink>
    </Box>
  );
};
