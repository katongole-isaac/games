import { SimpleGrid, Text } from "@chakra-ui/react";

import useGames from "../hooks/useGames";
import GameCard from "./gameCard";
import GameCardSkeleton from "./gameCardSkeleton";
import GameCardContainer from "./gameCardContainer";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/usePlatforms";


interface Props {
  selectedGenre : Genre | null;
  selectedPlatform : Platform | null;
}
const GameGrid = ({ selectedGenre, selectedPlatform } :Props) => {

  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);

  const numberOfSkeletons = 12;

  return (
    <>
      {error && <Text> {error.message} </Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        paddingX="10px"
        spacing={5}
      >
        {isLoading &&
          Array(numberOfSkeletons)
            .fill(null)
            .map((_, index) => (
              <GameCardContainer key={index} >
                <GameCardSkeleton  />
              </GameCardContainer>
            ))}

        { !isLoading && data && data?.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
