import { Flex, Heading, Divider, Box, Spinner } from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";
import { CTAButton } from "../CTAButton";
import Link from "next/link";

interface ITableHeaderProps {
  title: string,
  button?: boolean;
  fetching?: boolean;
  loading?: boolean;
};

export function TableHeader({ title, button = false, fetching, loading }: ITableHeaderProps) {
  return (
    <Box>

      <Flex mb="8" justifyContent="space-between" align="center">

        <Heading size="lg" fontWeight="normal">
          {title}
          {!loading && fetching && <Spinner size='sm' color='pink.500' ml='4'/>}
        </Heading>

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