import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import GameGrid from "./components/gameGrid";
import GenreList from "./components/genreList";
import React, { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/platformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/sortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  search:string;
}

export interface GameContext  {
  onSearch : (search:string) => void;
}

export const GameQueryContext =  React.createContext<GameContext | null>(null);;

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <GameQueryContext.Provider value={{
        onSearch : search => setGameQuery({ ...gameQuery, search})
      }}>
        <Grid
          templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`,
          }}
          templateColumns={{
            base: "1fr",
            lg: "220px 1fr",
          }}
        >
          <GridItem area={"nav"}>
            <Navbar />
          </GridItem>

          <Show above="lg">
            <GridItem area={"aside"} padding={5}>
              <GenreList
                selectedGenre={gameQuery.genre}
                onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
              />
            </GridItem>
          </Show>
          <GridItem area={"main"}>
            <HStack spacing={2} pl={2}>
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                onSelectPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
                }
              />
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              />
            </HStack>
            <GameGrid gameQuery={gameQuery} />
          </GridItem>
        </Grid>
      </GameQueryContext.Provider>
    </>
  );
}

export default App;
