import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImage from "../services/imageUrl";
import GenreListSkeleton from "./genreListSkeleton";

const Genres = () => {
  const { data, isLoading } = useGenres();

  const numberOfSkeletons = 12;

  return (
    <List>
      {isLoading &&
        Array(numberOfSkeletons)
          .fill(null)
          .map((_, index) => (
            <ListItem key={index} paddingY={1.5} >
              <GenreListSkeleton />
            </ListItem>
          ))}
          
      {data?.map((genre) => (
        <ListItem key={genre.id} paddingY={1.5}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={10}
              src={getCroppedImage(genre.image_background)}
            />
            <Text fontSize="lg"> {genre.name} </Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default Genres;
