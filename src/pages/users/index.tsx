import { TableHeader } from "../../components/TableUser/TableHeader";
import { TableUser } from "../../components/TableUser/TableUser";
import { Pagination } from "../../components/Pagination";
import { RiCheckboxMultipleFill } from "react-icons/ri";
import { CTAButton } from "../../components/CTAButton";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { Box, Flex } from "@chakra-ui/react";
import { useEffect } from "react";

export default function UserList() {

  useEffect(() => {
    fetch('http://localhost:3000/api/users')
      .then(response => response.json())
      .then(data => console.log(data))
  }, []);

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

          <TableUser />
          <Pagination />

        </Box>
      </Flex>
    </Box>
  );
};