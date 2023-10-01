import {
  Box,
  Heading,
  HStack,
  Image,
  Link,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ProjectType, TalkType } from "../pages/api/fetch";
import dynamic from "next/dynamic";
import { format } from "date-fns";
import { GitHub, Link as LinkIcon } from "iconoir-react";

import { Icon } from "./icon";

const TextMarkdown = dynamic(() => import("./text-markdown"), {
  ssr: false,
});

export interface ProjectCardProps {
  value: ProjectType;
}

export interface AppearanceCardProps {
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
          <Image
            src={value.image.url}
            alt=""
            width={{ base: "unset", lg: 800 }}
            height={{ base: "unset", lg: 300 }}
          />
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
            <Link
              target="_blank"
              p={2}
              href={value.repositoryLink}
              aria-label="github repository"
            >
              <Icon title={value.name} icon={<GitHub />} />
            </Link>
            <Link
              target="_blank"
              p={2}
              href={value.websiteLink}
              aria-label="project website"
            >
              <Icon title={value.name} icon={<LinkIcon />} />
            </Link>
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
      <Link
        target="_blank"
        style={{ textDecoration: "none" }}
        role="group"
        aria-label={value.name}
        href={value.link}
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
    </Box>
  );
};
