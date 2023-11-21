import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/navbar";

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
          <GridItem area={"aside"} bgColor="purple">
            Adie
          </GridItem>
        </Show>
        <GridItem area={"main"} bgColor="pink">
          Min
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
