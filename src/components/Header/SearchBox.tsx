import { Flex, Input, Icon } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {
  return (
    <Flex
      as="label" // como label o input dentro desse flex recebe foco quando esse componente é clicado
      flex="1"
      py="4"
      px="8"
      ml="6"
      maxWidth={400}
      alignSelf="center"
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
      alignItems="center"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        px="4"
        mr="4"
        placeholder="Bruscar na plataforma"
        _placeholder={{ color: 'gray.400' }}
      />
      <Icon as={RiSearchLine} fontSize="20" color="pink.400" />
    </Flex>
  );
}