import { Card, HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height="200px" />
      <HStack padding={3}>
        <SkeletonText width="100%" />
      </HStack>
    </Card>
  );
};

export default GameCardSkeleton;
