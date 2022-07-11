import { TableHeader } from "../../components/TableUser/TableHeader";
import { TableUser } from "../../components/TableUser/TableUser";
import { Pagination } from "../../components/Pagination";
import { RiCheckboxMultipleFill } from "react-icons/ri";
import { CTAButton } from "../../components/CTAButton";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
import { useQuery } from "react-query";

export default function UserList() {

  const { isLoading, error } = useQuery('users', async () => {
    const response = await fetch('http://localhost:3000/api/users');
    const data = await response.json();
    return data;
  },{
    staleTime: 1000 * 5,
  });


  return (
    <Box>

      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">

        <Sidebar />

        <Box bg="gray.800" flex="1" borderRadius={8} p="8">

          <TableHeader title="Usuários" button={true} />

          <Flex m={["0", "8"]} justifyContent="flex-start" align="center">

            <CTAButton m={["2", "8"]} icon={RiCheckboxMultipleFill}>Selecionar todos</CTAButton>

          </Flex>

          {isLoading ? (
            <Flex justify={"center"}>
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify={"center"}>
              <Text>Eita Giovana! Deu algum erro ao carregar a tabela de usuários.</Text>
            </Flex>
          ) : (
            <>
              <TableUser />
              <Pagination />
            </>
          )}

        </Box>
      </Flex>
    </Box>
  );
};