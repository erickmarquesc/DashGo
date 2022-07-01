import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from "@chakra-ui/react";

interface IInputProps extends ChakraInputProps {
  name: string;
  label?: string;
}

export function Input({ name, label, ...rest }: IInputProps) {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="pink.500"
        bgColor='gray.900'
        variant='filled' // tipo do estilo do imput
        size='lg'
        _hover={{
          // Quando o input estiver com estado hover não quero que mude a cor de fundo
          bgColor: 'gray.900'
        }}
        {...rest}
      />
    </FormControl>
  );
}