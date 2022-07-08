import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { Logo } from "../components/Header/Logo";
import Link from "next/link";

export default function MessageErrorPage() {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      mt='15%'
    >
      <Stack spacing={2}>
        <Link href="/dashboard" passHref>
          <Box as="a" >
            <Logo />
          </Box>
        </Link>

        <Text>404 🚧 A página não carregou!</Text>
        <Text>Brincadeira! Na verdade não criamos ela ainda. 😁</Text>

      </Stack>

    </Flex>
  );
};

