import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Grafico } from "../components/GraficoChart";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";

export default function dashboard() {
  return (
    <Flex direction="column" h="100vh">

      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">

        <Sidebar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px" alignItems="flex-start">

          <Grafico title="Inscritos da semana"/>
          <Grafico title="Taxa de abertura" />

        </SimpleGrid>

      </Flex>

    </Flex>
  );
};