import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Flex, Stack } from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "./Input";
import * as yup from "yup";

type SigInFormData = {
  email: string;
  password: string;
}

const SigInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail é obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha é obrigtória')
});

export function SigInForm() {

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(SigInFormSchema),
  });

  const { errors } = formState;
  
  const handleSigIn: SubmitHandler<SigInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(values);
  };

  return (
    <Flex
      as="form" // Transforma essa div em um formulário
      w="100%"
      maxW={360} //PIXEL
      bg="gray.800"
      p="8" // Isso é igual a 2 rem pois 8/4= 2rem ou 8x4= 32px
      borderRadius={8}
      flexDir="column" // direção do flez em coluna
      onSubmit={handleSubmit(handleSigIn)}
    >
      <Stack spacing="4"> {/* Serve para dar espaçamento em pilha */}

        <Input
          name="email"
          type="email"
          label="E-mail"
          placeholder="exemplo@email.com"
          error={errors.email}

          {...register('email')} />

        <Input
          name="password"
          type="password"
          label="Password"
          error={errors.password}
          {...register('password')} />

      </Stack>

      <Button
        type="submit"
        mt="6"
        colorScheme="pink"
        size="lg"
        isLoading={formState.isSubmitting}
      >
        Entrar
      </Button>

    </Flex>
  )
}