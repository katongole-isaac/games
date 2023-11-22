import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";


interface Props {
  onSelectSortOrder: (order: string) => void;
  sortOrder: string | null;
}
const SortSelector = ({
  onSelectSortOrder,
  sortOrder: selectedSortOrder,
}: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Poularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  return (
    <Menu>
      <MenuButton mb={5} as={Button} rightIcon={<BsChevronDown />}>
        Order by:{" "}
        {sortOrders.find((order) => order.value === selectedSortOrder)?.label ||
          "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            key={order.label}
            onClick={() => onSelectSortOrder(order.value)}
          >
            {" "}
            {order.label}{" "}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
