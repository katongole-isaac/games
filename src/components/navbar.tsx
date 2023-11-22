import { Box, HStack, Text } from "@chakra-ui/react";
import ColorModeSwitch from "./colorModeSwitch";
import SearchInput from "./searchInput";
import { GameContext, GameQueryContext } from "../App";
import { useContext } from "react";

const Navbar = () => {

  const { onSearch } = useContext(GameQueryContext) as GameContext;

  return (
    <HStack justifyContent="space-between" paddingX="10px" py={5} >  
      <Box>
        <Text> Logo </Text>
      </Box>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack> 
  );
};

export default Navbar;
