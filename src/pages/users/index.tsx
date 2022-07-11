import { TableHeader } from "../../components/TableUser/TableHeader";
import { TableUser } from "../../components/TableUser/TableUser";
import { Pagination } from "../../components/Pagination";
import { RiCheckboxMultipleFill } from "react-icons/ri";
import { CTAButton } from "../../components/CTAButton";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
import { useUsers } from "../../services/hooks/useUsers";

export default function UserList() {

  const { isLoading, error, isFetching } = useUsers();

  return (
    <Box>

      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">

        <Sidebar />

        <Box bg="gray.800" flex="1" borderRadius={8} p="8">
          
          <TableHeader title="Usuários" fetching={isFetching} loading={isLoading} button={true} />
          
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