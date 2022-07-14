import { Box, Checkbox, Flex, Link, Spinner, Table, Tbody, Td, Text, Tr, useBreakpointValue } from "@chakra-ui/react";
import { RiCheckboxMultipleFill, RiPencilLine } from "react-icons/ri";
import { TableHeader } from "../../components/TableUser/TableHeader";
import { queryClient } from "../../services/queryCliente";
import { Pagination } from "../../components/Pagination";
import { useUsers } from "../../services/hooks/useUsers";
import { CTAButton } from "../../components/CTAButton";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { useState } from "react";

export default function UserList() {
  const [page, setPage] = useState(1);

  const { data, isLoading, error, isFetching } = useUsers(page);

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
    md: true,
  });

  async function handlePrefetchUser(userId: string) {
    await queryClient.prefetchQuery(['user', userId], async () => {
      const response = await api.get(`users/${userId}`);
      return response.data;
    }, {
      staleTime: 1000 * 60 * 10,
    });
  }
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
              <Table colorScheme="whiteAlpha">

                <Tbody>

                  {data.data.users.map(user => {
                    return (
                      <Tr key={user.id}>

                        <Td px={["2", "2", "6"]}>
                          <Checkbox colorScheme="pink" />
                        </Td>

                        <Td>
                          <Box>
                            <Link color="purple.400" onMouseEnter={() => handlePrefetchUser(user.id)}>
                              <Text fontWeight="bold">{user.name}</Text>
                            </Link>

                            <Text fontSize="sm" color="gray.300">{user.email}</Text>

                            {!isWideVersion && (<CTAButton icon={RiPencilLine} width="100%" maxWidth="190">Editar</CTAButton>)}

                          </Box>
                        </Td>

                        {isWideVersion && (
                          <Td>
                            <Box>
                              <Text>{user.created_at}</Text>
                              <Text fontSize="sm" color="gray.300">Data de cadastro</Text>
                            </Box>
                          </Td>
                        )}

                        <Td>
                          {isWideVersion && (<CTAButton icon={RiPencilLine}>Editar</CTAButton>)}
                        </Td>

                      </Tr>
                    )
                  })}

                </Tbody>
              </Table>
              <Pagination
                totalCountOfRegisters={data.totalCount}
                currentPage={page}
                onPageChange={setPage} />
            </>
          )}

        </Box>
      </Flex>
    </Box>
  );
};