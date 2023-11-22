import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack >
      <Switch
        isChecked={colorMode === "dark"}
        onChange={() => toggleColorMode()}
      />
      <Text whiteSpace="nowrap" > {colorMode === "dark" ? "Dark" : "Light"} Mode </Text>
    </HStack>
  );
};

export default ColorModeSwitch;
