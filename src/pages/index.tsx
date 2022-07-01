import { Flex, Stack, Text } from "@chakra-ui/react";
import { SigInForm } from "../components/Form/SigInForm";

export default function SigIn() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center" // Alinha verticelmente ao centro
      justify="center" // Alinha horizontalmente ao centro
      flexDir="column"
    >

      <SigInForm />
      <Text mt="20" color="gray.600">Aplicação criada por Erick Marques [git]</Text>
      <Text color="gray.600">Rocketseat</Text>

    </Flex>
  );
}
