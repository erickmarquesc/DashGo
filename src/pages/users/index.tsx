import { Box, Checkbox, Flex, Heading, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiCheckboxMultipleFill, RiTeamLine } from "react-icons/ri";
import { CTAButton } from "../../components/CTAButton";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { TableUser } from "../../components/TableUser/TableUser";


export default function UserList() {
  return (
    <Box>

      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">

        <Sidebar />

        <Box bg="gray.800" flex="1" borderRadius={8} p="8">

          <Flex mb="8" justifyContent="space-between" align="center">

            <Heading size="lg" fontWeight="normal">Usuários</Heading>
            
            <Link href="/users/create" passHref>
              <CTAButton icon={RiAddLine}>Criar usuário</CTAButton>
            </Link>

          </Flex>

          <Flex m={["0", "8"]} justifyContent="flex-start" align="center">

            <CTAButton m={["2", "8"]} icon={RiCheckboxMultipleFill}>Selecionar todos</CTAButton>

          </Flex>

          <TableUser />

          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}