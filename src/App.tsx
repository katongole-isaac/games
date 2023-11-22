import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import GameGrid from "./components/gameGrid";
import Genres from "./components/genreList";

function App() {
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
            <Genres />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
