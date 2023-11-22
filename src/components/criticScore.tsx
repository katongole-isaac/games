import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {

  let color = score > 75 ? "green" : score > 65 ? "yellow" : "";

  return (
    <Badge colorScheme={color} fontSize="16px" borderRadius="4px" paddingX={2}>
      {score}
    </Badge>
  );
};

export default CriticScore;
