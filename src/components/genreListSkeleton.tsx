import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <HStack spacing={1}>
      <Skeleton height="45px" borderRadius={10} width="45px" />
      <SkeletonText flex={1} noOfLines={2} />
    </HStack>
  );
};

export default GenreListSkeleton;
