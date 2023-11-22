import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import GameGrid from "./components/gameGrid";
import GenreList from "./components/genreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/platformSelector";

function App() {
  const [ selectedGenre , setSelectedGenre ] = useState<Genre|null>(null);

  return (
    <>
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
            <GenreList selectedGenre={selectedGenre} onSelectGenre={ genre => setSelectedGenre(genre)} />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <PlatformSelector />
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
