import { PaginationItem } from "./PaginationItem";
import { Box, Stack, Text } from "@chakra-ui/react";

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;

}

const siblingsCount = 1;

/* PÁGINAS POSSÍVEIS AO LADO */
function generatePagesArray(from: number, to: number) {
  return [... new Array(to - from)].map((_, index) => {
    return from + index + 1;
  }).filter(page => page > 0);
};

export function Pagination(
  { totalCountOfRegisters, registersPerPage = 10, currentPage = 1 }: PaginationProps) {

  /* ULTIMA PÁGINA POSSÍVEL */
  const lastPage = Math.floor(totalCountOfRegisters / registersPerPage);

  /* PÁGINAS POSSÍVEIS ANTERIOR */
  const previousPages = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : []

  /* PÁGINAS POSSÍVEIS A SEGUIR */
  const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : []

  return (
    <Stack
      spacing="6"
      direction={["column", "row"]}
      mt="8"
      justify="space-between"
      align="center">

      <Box>
        <strong>0</strong> - <strong>5</strong> de <strong>100</strong>
      </Box>

      <Stack direction="row" spacing="2">
        {/* Caso tenha mais de 2 páginas anteriores */}
        {currentPage > (siblingsCount + 1) &&
          <>
            <PaginationItem number={1} />
            {currentPage > (siblingsCount + 2) && (
              <Text color={'pink.300'} width="8" textAlign="center">...</Text>
            )
            }
          </>
        }

        {/* Mostra a página anterior */}
        {previousPages.length > 0
          && previousPages.map(page => {
            return <PaginationItem key={page} number={page} />
          })
        }

        {/* Página atual */}
        <PaginationItem number={currentPage} isCurrent />

        {/* Ultima página */}
        {nextPages.length > 0
          && nextPages.map(page => {
            return <PaginationItem key={page} number={page} />
          })
        }
        
        {/* Caso tenha mais de 2 páginas seguintes */}
        {(currentPage + siblingsCount) < lastPage &&
          <>
            {(currentPage + siblingsCount + 1) < lastPage && (
              <Text color={'pink.300'} width="8" textAlign="center">...</Text>
            )
            }
            <PaginationItem number={lastPage} />
          </>
        }
      </Stack>
    </Stack>
  );
};