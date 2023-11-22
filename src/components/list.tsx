import { ListItem, Text, Link, Box, chakra } from "@chakra-ui/react";
import { format } from "date-fns";
import { ExperienceType } from "../pages/api/fetch";

interface ExperienceListProps {
  value: ExperienceType;
}
export const ExperienceList = ({ value }: ExperienceListProps) => {
  return (
    <Box pb={4}>
      <ListItem color="gray.300">
        <>
          {value.title} at{" "}
          {value.link ? (
            <Link
              href={value.link || ""}
              color="white"
              fontWeight="medium"
              target="_blank"
              fontSize={{ base: "lg", md: "xl" }}
              aria-label={value.at}
            >
              {value.at}
            </Link>
          ) : (
            <chakra.span
              color="white"
              fontWeight="medium"
              fontSize={{ base: "lg", md: "xl" }}
              aria-label={value.at}
            >
              {value.at}
            </chakra.span>
          )}{" "}
          ({format(new Date(value.startDate), "MMMM yyyy")} -{" "}
          {value.endDate == null
            ? "Present"
            : format(new Date(value.endDate), "MMMM yyyy")}
          )
        </>
      </ListItem>
      <Text fontSize={{ base: "lg", md: "xl" }}>{value.jobDescription}</Text>
    </Box>
  );
};
