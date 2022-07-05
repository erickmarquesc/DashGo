import { Icon, Button, ButtonProps } from "@chakra-ui/react";

import { ElementType, ReactNode } from "react";

interface ICTAButtonProps extends ButtonProps{
  icon: ElementType;
  children: ReactNode;
};

export function CTAButton({icon, children, ...rest}:ICTAButtonProps) {
  return (
    <Button
      as="a"
      size="sm"
      fontSize="sm"
      colorScheme="pink"
      cursor="pointer"
      leftIcon={<Icon as={icon} fontSize="20" />}
      {...rest}
    >
      {children}
    </Button >
  );
};