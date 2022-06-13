import React from 'react'
import { Box, ListItem, Text } from '@chakra-ui/react'
import { format } from 'date-fns'
import { ExperienceType } from '../pages/api/fetch'

interface ExperienceListProps {
  value: ExperienceType
}
export const ExperienceList = ({ value }: ExperienceListProps) => {
  return (
    <Box>
      <ListItem color='gray.300'>
        {`${value.title} at ${value.at} (${format(
          new Date(value.startDate),
          'MMMM yyyy'
        )} - ${value.endDate == null ? 'Present' : value.endDate})`}
      </ListItem>
      <Text>{value.jobDescription}</Text>
    </Box>
  )
}
