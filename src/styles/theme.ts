import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  },
  components: {
    Text: {
      baseStyle: {
        color: "gray.300",
      },
    },
  },
});

export default theme;
