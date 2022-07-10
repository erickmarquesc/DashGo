import { SigInForm } from "../components/Form/SigInForm";
import { Flex, IconButton, Stack, Text } from "@chakra-ui/react";
import { RiGithubLine, RiLinkedinLine } from "react-icons/ri";
import Link from "next/link";


export default function SigIn() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center" // Alinha verticelmente ao centro
      justify="center" // Alinha horizontalmente ao centro
      flexDir="column"
    >

      <SigInForm />
      <Text mt="20" mb="5" color="gray.600">Aplicação criada por Erick Marques</Text>
      <Stack spacing={2} direction={"row"}>

        <Link href="https://github.com/erickmarquesc">
          <IconButton
            variant='outline'
            colorScheme='pink'
            aria-label='GIRHUB'
            size='sm'
            fontSize={25}
            icon={<RiGithubLine />}
          />
        </Link>
        <Link href="https://www.linkedin.com/in/erick-marques-cabral-999b151b4/">
          <IconButton
            variant='outline'
            colorScheme='pink'
            aria-label='GIRHUB'
            size='sm'
            fontSize={25}
            icon={<RiLinkedinLine />}
          />
        </Link>
      </Stack>
    </Flex>
  );
};
