import { Flex, Heading, Divider, Box } from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";
import { CTAButton } from "../CTAButton";
import Link from "next/link";

interface ITableHeaderProps {
  title: string,
  button?: boolean;
};

export function TableHeader({ title, button = false }: ITableHeaderProps) {
  return (
    <Box>

      <Flex mb="8" justifyContent="space-between" align="center">

        <Heading size="lg" fontWeight="normal">{title}</Heading>

        {button && (
          <Link href="/users/create" passHref>
            <CTAButton icon={RiAddLine}>Criar usuário</CTAButton>
          </Link>
        )}
      </Flex>
      <Divider my="6" borderColor="gray.700" />
      
    </Box>
  );
};