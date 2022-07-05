import { Table, Tbody, Tr, Td, Checkbox, Box, Text, useBreakpointValue } from "@chakra-ui/react";
import { RiPencilLine } from "react-icons/ri";
import { CTAButton } from "../CTAButton";

export function TableUser() {

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
    md: true,
  });

  return (
    <Table colorScheme="whiteAlpha">

      <Tbody>

        <Tr>

          <Td px={["2", "2", "6"]}>
            <Checkbox colorScheme="pink" />
          </Td>

          <Td>
            <Box>

              <Text fontWeight="bold">Erick Marques Cabral</Text>
              <Text fontSize="sm" color="gray.300">erick.marquesc@hotmail.com</Text>

              {!isWideVersion && (<CTAButton icon={RiPencilLine} width="100%" maxWidth="190">Editar</CTAButton>)}

            </Box>
          </Td>

          {isWideVersion && (
            <Td>
              <Box>
                <Text>19.Maio.2022</Text>
                <Text fontSize="sm" color="gray.300">Data de cadastro</Text>
              </Box>
            </Td>
          )}

          <Td>
            {isWideVersion && (<CTAButton icon={RiPencilLine}>Editar</CTAButton>)}
          </Td>

        </Tr>

        <Tr>

          <Td px={["2", "2", "6"]}>
            <Checkbox colorScheme="pink" />
          </Td>

          <Td>
            <Box>
              <Text fontWeight="bold">Guilherme Messias</Text>
              <Text fontSize="sm" color="gray.300">guilherme.messias@hotmail.com</Text>
              {!isWideVersion && (<CTAButton icon={RiPencilLine} width="100%" maxWidth="190">Editar</CTAButton>)}

            </Box>
          </Td>

          {isWideVersion && (
            <Td>
              <Box>
                <Text>19.Maio.2022</Text>
                <Text fontSize="sm" color="gray.300">Data de cadastro</Text>
              </Box>
            </Td>
          )}

          <Td>
            {isWideVersion && (<CTAButton icon={RiPencilLine}>Editar</CTAButton>)}

          </Td>

        </Tr>

      </Tbody>

    </Table>
  );
}