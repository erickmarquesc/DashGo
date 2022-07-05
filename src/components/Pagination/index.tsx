import { PaginationItem } from "./PaginationItem";
import { Box, Stack } from "@chakra-ui/react";

export function Pagination() {
  return (
    <Stack
      spacing="6"
      direction={["column","row"]}
      mt="8"
      justify="space-between"
      align="center">

      <Box>
        <strong>0</strong> - <strong>5</strong> de <strong>100</strong>
      </Box>
      
      <Stack direction="row" spacing="2">
        <PaginationItem number={1} isCurrent />
        <PaginationItem number={2} />
        <PaginationItem number={3} />
      </Stack>
    </Stack>
  );
};