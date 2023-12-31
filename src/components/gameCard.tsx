import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";

import CriticScore from "./criticScore";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./platformIconList";
import getCroppedImage from "../services/imageUrl";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImage(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" mb={2} >
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl"> {game.name} </Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
