import React from 'react'
import NextLink from 'next/link'
import { Text, Link } from '@chakra-ui/react'
import ReactMarkdown from 'react-markdown'
import ChakraUIRenderer from 'chakra-ui-markdown-renderer'
import { ReactMarkdownProps } from 'react-markdown/lib/ast-to-react'

interface TextMarkdownProps {
  children: string
}

export const TextMarkdown = ({ children }: TextMarkdownProps) => {
  const markdownTheme = {
    p: (props: ReactMarkdownProps) => {
      const { children } = props
      return (
        <Text fontSize='xl' color='gray.300'>
          {children}
        </Text>
      )
    },
    a: (props: ReactMarkdownProps & { href?: string }) => {
      const { children, href } = props
      return (
        <NextLink href={href || ''} passHref>
          <Link color='white' fontWeight='medium' target='_blank'>
            {children}
          </Link>
        </NextLink>
      )
    },
  }
  return (
    <ReactMarkdown components={ChakraUIRenderer(markdownTheme)}>
      {children}
    </ReactMarkdown>
  )
}

export default TextMarkdown
