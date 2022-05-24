import { Box, Checkbox, Flex, Heading, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { CTAButton } from "../../components/CTAButton";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";


export default function UserList() {
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">

        <Sidebar />

        <Box bg="gray.800" flex="1" borderRadius={8} p="8">
          <Flex mb="8" justifyContent="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuários</Heading>
            <CTAButton icon={RiAddLine}>Criar usuário</CTAButton>
          </Flex>

          <Table colorScheme="whiteAlpha" suppressHydrationWarning={true}>
            <>

              <Thead>
                <Th px="6" color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                <Th>Data de cadastro</Th>
                <Th>Editar</Th>
              </Thead>

              <Tbody>
                <Tr>
                  <Td px="6">
                    <Checkbox colorScheme="pink" />
                  </Td>
                  <Td>
                    <Box>
                      <Text fontWeight="bold">Erick Marques</Text>
                      <Text fontSize="sm" color="gray.300">erick.marquesc@hotmail.com</Text>
                    </Box>
                  </Td>
                  <Td>19.Maio.2022</Td>
                  <Td>
                    <CTAButton icon={RiPencilLine}>Editar</CTAButton>
                  </Td>
                </Tr>
              </Tbody>
            </>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}