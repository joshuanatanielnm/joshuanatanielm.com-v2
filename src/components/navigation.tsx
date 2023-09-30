import {
  Box,
  HStack,
  chakra,
  Flex,
  Spacer,
  SlideFade,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { NAVIGATION } from "../constant/routes";
import Link from "react-scroll/modules/components/Link";

const NavigationLink = chakra(Link);

export const Navigation = () => {
  return (
    <Box w="5xl" maxW="calc(100vw - 14px)" position="fixed" bottom={10}>
      <SlideFade in offsetY="20px" delay={0.5}>
        <HStack
          bg="rgba(19, 36, 50, 0.9)"
          px={{ base: 5, lg: 10 }}
          rounded="2xl"
          fontSize={{ base: "lg", lg: "xl" }}
          boxShadow="dark-lg"
          overflow="auto !important"
          spacing={6}
        >
          <Flex
            cursor="pointer"
            direction="column"
            role="group"
            fontWeight="bold"
          >
            <NavigationLink
              activeClass="active"
              role="button"
              aria-label="go to landing page"
              to="hero"
              spy
              smooth
              color="gray.300"
              _groupHover={{
                color: "white",
              }}
              py={6}
              offset={-30}
              duration={1000}
            >
              Joshua
            </NavigationLink>
            <Box
              w="full"
              h={1}
              _groupHover={{
                bgGradient: "linear(to-l, #879af2, #d3208b, #fda000)",
              }}
              justifyContent="flex-end"
              rounded="lg"
            />
          </Flex>
          <Spacer />
          <HStack spacing={5}>
            {NAVIGATION.map((v) => (
              <Flex
                cursor="pointer"
                direction="column"
                role="group"
                key={v.path}
              >
                {v.path ? (
                  <NavigationLink
                    activeClass="active"
                    role="button"
                    to={v.path}
                    aria-label={`go to ${v.title}`}
                    spy
                    smooth
                    color="gray.300"
                    _groupHover={{
                      color: "white",
                    }}
                    py={6}
                    offset={-30}
                    duration={1000}
                  >
                    {v.title}
                  </NavigationLink>
                ) : (
                  <ChakraLink
                    className="active"
                    color="gray.300"
                    _groupHover={{
                      color: "white",
                    }}
                    py={6}
                    style={{ textDecoration: "none" }}
                    href={v.link}
                    isExternal
                  >
                    {v.title}
                  </ChakraLink>
                )}
                <Box
                  w="full"
                  h={1}
                  _groupHover={{
                    bgGradient: "linear(to-l, #879af2, #d3208b, #fda000)",
                  }}
                  justifyContent="flex-end"
                  rounded="lg"
                />
              </Flex>
            ))}
          </HStack>
        </HStack>
      </SlideFade>
    </Box>
  );
};
