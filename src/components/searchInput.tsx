import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import {  useRef } from "react";
import { BsSearch } from "react-icons/bs";


interface Props {
  onSearch : (search : string) => void ;

}
const SearchInput = ( { onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <form onSubmit= { ev => {
      ev.preventDefault();
      if(ref.current) onSearch(ref.current.value);
    } }>
      <InputGroup>
          <InputLeftElement children={<BsSearch />} />
      <Input ref={ref} placeholder="search games..." variant="filled" borderRadius={20} />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
