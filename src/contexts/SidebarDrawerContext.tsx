import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react"

interface SidebarDraweProviderProps {
  children: ReactNode;
};

type SiderbarDrawerContextData = UseDisclosureReturn;

const SideBarDrawerContext = createContext({} as SiderbarDrawerContextData);

export function SiderbarDrawerProvider({ children }: SidebarDraweProviderProps) {

  const disclosure = useDisclosure();
  const router = useRouter(); /* Para usar as rotas */

  /* Nesse useEffect toda vez que a rota mudar o menu será fechado */
  useEffect(() => {
    disclosure.onClose()
  }, [router.asPath])

  return (
    <SideBarDrawerContext.Provider value={disclosure}>
      {children}
    </SideBarDrawerContext.Provider>
  );
};

export const useSidebarDrawer = () => useContext(SideBarDrawerContext);