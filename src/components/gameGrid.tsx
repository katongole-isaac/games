

import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./gameCard";
import GameCardSkeleton from "./gameCardSkeleton";

const GameGrid = () => {

  const { games, error, isLoading } = useGames();

  const numberOfSkeletons = 12;

  return (
    <>
      {error && <Text> {error.message} </Text>}
      <SimpleGrid columns={{ sm: 1 , md: 2, lg: 3, xl :4 }} paddingX="10px" spacing={10} >
     {
      isLoading && Array(numberOfSkeletons).fill(null)
        .map( (_, index)=> <GameCardSkeleton key={index} />)
     }
        {games?.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid >
    </>
  );
};

export default GameGrid;
