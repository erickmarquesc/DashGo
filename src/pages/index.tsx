import { Button, Flex, Stack } from "@chakra-ui/react";
import { Input } from "../components/Input";

export default function SigIn() {
  return (
    <Flex
      w='100vw'
      h='100vh'
      align='center'
      justify='center'
    >
      <Flex
        as='form'
        w='100%'
        maxW={360} //PIXEL
        bg='gray.800'
        p='8' // Isso é igual a 2 rem pois 8/4=2rem ou 8x4=32px
        borderRadius={8}
        flexDir='column' // direção do flez em coluna
      >
        <Stack spacing='4'>

          <Input name="email" type="email" label="E-mail"/>
          <Input name="password" type="password" label="Password"/>

        </Stack>
        <Button
          type="submit"
          mt='6'
          colorScheme='pink'
          size='lg'
        >
          Entrar
        </Button>

      </Flex>
    </Flex>
  );
}
