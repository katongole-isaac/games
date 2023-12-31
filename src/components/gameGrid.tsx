import { SimpleGrid, Text } from "@chakra-ui/react";

import useGames from "../hooks/useGames";
import GameCard from "./gameCard";
import GameCardSkeleton from "./gameCardSkeleton";
import GameCardContainer from "./gameCardContainer";
import { GameQuery } from "../App";


interface Props {
  
  gameQuery : GameQuery;
}
const GameGrid = ({ gameQuery } :Props) => {

  const { data, error, isLoading } = useGames(gameQuery);

  const numberOfSkeletons = 12;

  if(error) return <Text> {error.message} </Text>

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
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
