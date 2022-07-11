import { Table, Tbody, Tr, Td, Checkbox, Box, Text, useBreakpointValue } from "@chakra-ui/react";
import { RiPencilLine } from "react-icons/ri";
import { useUsers } from "../../services/hooks/useUsers";
import { CTAButton } from "../CTAButton";

export function TableUser() {

  const { data } = useUsers();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
    md: true,
  });

  return (
    <Table colorScheme="whiteAlpha">

      <Tbody>

        {data.users.map(user => {
          return (
            <Tr key={user.id}>

              <Td px={["2", "2", "6"]}>
                <Checkbox colorScheme="pink" />
              </Td>

              <Td>
                <Box>

                  <Text fontWeight="bold">{user.name}</Text>
                  <Text fontSize="sm" color="gray.300">{user.email}</Text>

                  {!isWideVersion && (<CTAButton icon={RiPencilLine} width="100%" maxWidth="190">Editar</CTAButton>)}

                </Box>
              </Td>

              {isWideVersion && (
                <Td>
                  <Box>
                    <Text>
                      {new Date(user.createdAt).toLocaleDateString('pt-BR', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric',
                      })}</Text>
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
  );
};