import { Box, Flex, Text } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <Flex  bg="#fafafa" paddingX="20px" width="100%" height="100%" alignItems="center" >
        <Box>
            <Text> Logo </Text>
        </Box>
    </Flex>
  )
}

export default Navbar