import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./colorModeSwitch";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" paddingX="10px">
      <Box>
        <Text> Logo </Text>
      </Box>
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
