import React from 'react'
import NextLink from 'next/link'
import { Box, ListItem, Text, Link } from '@chakra-ui/react'
import { format } from 'date-fns'
import { ExperienceType } from '../pages/api/fetch'

interface ExperienceListProps {
  value: ExperienceType
}
export const ExperienceList = ({ value }: ExperienceListProps) => {
  return (
    <Box>
      <ListItem color='gray.300'>
        <>
          {value.title} at{' '}
          <NextLink href={value.link || ''} passHref>
            <Link color='white' fontWeight='medium' target='_blank'>
              {value.at}
            </Link>
          </NextLink>{' '}
          ({format(new Date(value.startDate), 'MMMM yyyy')} -{' '}
          {value.endDate == null ? 'Present' : value.endDate})
        </>
      </ListItem>
      <Text>{value.jobDescription}</Text>
    </Box>
  )
}
