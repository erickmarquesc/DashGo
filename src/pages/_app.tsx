import { SiderbarDrawerProvider } from '../contexts/SidebarDrawerContext';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <SiderbarDrawerProvider>

        <Component {...pageProps} />

      </SiderbarDrawerProvider>
    </ChakraProvider>
  );
};

export default MyApp;

/* resetCSS remove todos as estilos próprios/padrão, 
 * ele já vem por padrão como TRUE então não é necessário declara-lo,
 * só serve para identifica-lo como FALSE.
 * Assim ele pega todos os estilos padrões.
 */
