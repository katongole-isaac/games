import {
  FaLinux,
  FaAndroid,
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";

import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    xbox: FaXbox,
    linux: FaLinux,
    apple: FaApple,
    web: BsGlobe,
    ios: MdPhoneIphone,
    android: FaAndroid,
    playstation: FaPlaystation,
  };

  return (
    <HStack marginY={1} >
      {platforms.map((p) => (
        <Icon as={iconMap[p.slug]} key={p.id} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
