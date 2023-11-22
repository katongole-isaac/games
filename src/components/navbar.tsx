import { Box, HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./colorModeSwitch";
import SearchInput from "./searchInput";
import { GameContext, GameQueryContext } from "../App";
import { useContext } from "react";
import Logo from "../assets/game_logo.png";

const Navbar = () => {
  const { onSearch } = useContext(GameQueryContext) as GameContext;

  return (
    <HStack justifyContent="space-between" paddingX="10px" py={5}>
      <Box>
        <Box width="100px"  >
          <Image src={Logo} />
        </Box>
      </Box>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
