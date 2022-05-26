import { Icon, LinkProps, Text, Link as ChakraLink } from "@chakra-ui/react";
import { ActiveLink } from "./ActiveLink";
import { ElementType } from "react";

interface INaviLinkProps extends LinkProps {
  icon: ElementType;
  children: string;
  href: string;
}
export function NavLink({ icon, children, href, ...rest }: INaviLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" alignItems="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">{children}</Text>
      </ChakraLink>
    </ActiveLink>
  );
}