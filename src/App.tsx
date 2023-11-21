import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Grid
        templateAreas={` "nav nav nav"
                          "aside main main"
    `}
        templateRows="80px 5fr"
        
        width="100vw"
        height="100vh"

      >
        <GridItem area={"nav"}>
          <Navbar />
        </GridItem>
        <GridItem area={"aside"}  bgColor="purple"></GridItem>
        <GridItem area={"main"} bgColor="pink"></GridItem>
      </Grid>
    </>
  );
}

export default App;
