import { Box, Button, Flex, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import { TableHeader } from "../../components/TableUser/TableHeader";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../components/Form/Input";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import Link from "next/link";
import * as yup from "yup";

type CreateUseFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const CreateUseFormSchema = yup.object().shape({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().required('E-mail é obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha é obrigtória').min(6,'A senha precisa ter no minímo 6 caracteres'),
  password_confirmation: yup.string().oneOf([null, yup.ref("password")], 'As senhas precisam ser iguais')
});

export default function CreateUser() {

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(CreateUseFormSchema),
  });

  const { errors } = formState;

  const handleCreateUser: SubmitHandler<CreateUseFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(values);
  };

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">

        <Sidebar />

        <Box
          as="form"
          bg="gray.800"
          flex="1"
          borderRadius={8}
          p={["6", "8"]}
          onSubmit={handleSubmit(handleCreateUser)}
        >

          <TableHeader title="Criar usuário" />

          <VStack spacing={["6", "8"]}>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="name"
                label="Nome completo"
                error={errors.name}
                {...register('name')} />

              <Input
                name="email"
                type="email"
                label="E-mail"
                error={errors.email}
                {...register('email')} />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input
                name="password"
                type="password"
                label="Senha"
                error={errors.password}
                {...register('password')} />

              <Input
                name="password_confirmation"
                type="password"
                label="Confirmar senha"
                error={errors.password_confirmation}
                {...register('password_confirmation')} />
            </SimpleGrid>

          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button
                  as="a"
                  colorScheme="whiteAlpha"
                >
                  Cancelar
                </Button>

              </Link>

              <Button
                type="submit"
                colorScheme="pink"
                isLoading={formState.isSubmitting}
              >
                Salvar
              </Button>

            </HStack>
          </Flex>

        </Box>
      </Flex>
    </Box>
  );
};