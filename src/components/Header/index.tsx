import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { useSidebarDrawer } from "../../contexts/SidebarDrawerContext";
import { NotificationsNav } from "./NotificationsNav";
import { RiMenuLine } from "react-icons/ri";
import { SearchBox } from "./SearchBox";
import { Profile } from "./Profile";
import { Logo } from "./Logo";

export function Header() {/* Compoenente Header */

  const { onOpen } = useSidebarDrawer(); /* onOpen é um metodo que seta como true o isOpen */

  const isWideVersion = useBreakpointValue({/* Hook que ajuda na responsividade das telas */
    base: false, /* Quando estamos em uma tela menor que lg */
    lg: true, /* Por padrão estamos sempre na versão de tela maior  */
  });

  return (
    <Flex
      as="header" // Transforma a div em um headr pera o html
      w="100%"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
      justifyContent="space-between"
    >
      {/* Botão de navegação mobile */}
      {/* Por padrão o isWideVersion será TRUE pois estamos em uma tela >= que lg */}
      {!isWideVersion && (
        <IconButton
          aria-label="Open navegation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
        >

        </IconButton>
      )}

      {/* LOGO */}
      <Logo />

      {/* PESQUISA */}
      {/* A barra só aparece caso a tela seja >= a lg | Por padrão ela aparece */}
      {isWideVersion && <SearchBox />}

      {/* USER */}
      <Flex align="center" ml="auto">

        {/* NOTIFICAÇÕES */}
        <NotificationsNav />
        
        {/* Perfil */}
        <Profile showProfileData={isWideVersion} />

      </Flex>
    </Flex >
  );
};