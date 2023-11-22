import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/navbar";
import GameGrid from "./components/gameGrid";
import Genres from "./components/genres";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
       
      >
        <GridItem area={"nav"} >
          <Navbar />

        </GridItem>

        <Show above="lg">
          <GridItem area={"aside"} >
            <Genres />
          </GridItem>
        </Show>
        <GridItem area={"main"} >
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
