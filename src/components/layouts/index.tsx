import { Box, Container, SimpleGrid, Stack, VStack } from '@chakra-ui/react'
import { Navigation } from '../navigation'

interface LayoutProps {
  children: JSX.Element[]
}

export const PageContainer = ({ children }: LayoutProps) => {
  return (
    <Box minH='100vh' pb={20}>
      <Box
        h={2}
        p={0}
        m={0}
        bgGradient='linear(to-l, #879af2, #d3208b, #fda000)'
      />
      <Container maxW='6xl' pb={20}>
        {children}
        <VStack>
          <Navigation />
        </VStack>
      </Container>
    </Box>
  )
}

export const ContentSectionContainer = ({ children }: LayoutProps) => {
  return <Stack spacing={8}>{children}</Stack>
}

export const GridItemContainer = ({ children }: LayoutProps) => {
  return (
    <SimpleGrid spacing={5} columns={{ base: 1, lg: 2 }}>
      {children}
    </SimpleGrid>
  )
}

export const StackItemContainer = ({ children }: LayoutProps) => {
  return <Stack spacing={5}>{children}</Stack>
}
