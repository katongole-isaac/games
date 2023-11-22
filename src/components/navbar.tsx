import { Box, HStack, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./colorModeSwitch";
import SearchInput from "./searchInput";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" paddingX="10px" py={5} >  
      <Box>
        <Text> Logo </Text>
      </Box>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
