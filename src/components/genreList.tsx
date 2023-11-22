import { Button, HStack, Image, List, ListItem,  } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImage from "../services/imageUrl";
import GenreListSkeleton from "./genreListSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading } = useGenres();

  const numberOfSkeletons = 12;

  return (
    <List>
      {isLoading &&
        Array(numberOfSkeletons)
          .fill(null)
          .map((_, index) => (
            <ListItem key={index} paddingY={1.5}>
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
            <Button
              fontSize="lg"
              variant="link"
              wordBreak="break-word"
              whiteSpace="pre-wrap"
              textAlign="left"
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
