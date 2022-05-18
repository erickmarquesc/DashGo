import { Flex, Icon, Input, HStack, Text, Box, Avatar } from "@chakra-ui/react";
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from "react-icons/ri"
export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {/* LOGO */}
      <Text
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
        w="64"
      >
        dasgo
        <Text
          as="span"
          color="pink.500"
          ml="1"
        >
          .
        </Text>
      </Text>

      {/* PESQUISA */}
      <Flex
        as="label"
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

      {/* USER */}
      <Flex
        align="center"
        ml="auto"
      >
        <HStack 
        spacing="8"
        mx="8"
        pr="8"
        py="1"
        color="gray.300"
        borderRightWidth={1}
        borderColor="gray.700"
        >

        <Icon as={RiNotificationLine} fontSize="20" />
        <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>

        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Erick Marques</Text>
            <Text color="gray.300" fontSize="small">erick.marquesc@hotmail.com</Text> 
          </Box>
          <Avatar size="md" name="Erick Marques" src="https://avatars.githubusercontent.com/u/56804790?v=4"/>
        </Flex>
      </Flex>
    </Flex>
  );
}