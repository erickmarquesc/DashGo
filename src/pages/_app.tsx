import { SiderbarDrawerProvider } from '../contexts/SidebarDrawerContext';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { AppProps } from 'next/app';
import { makeServer } from '../services/mirage';
import { QueryClient, QueryClientProvider } from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';

if (process.env.NODE_ENV === 'development') { // Essa variável é setada automaticamente pelo React
  makeServer();
};

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider resetCSS theme={theme}>
        <SiderbarDrawerProvider>

          <Component {...pageProps} />

        </SiderbarDrawerProvider>
      </ChakraProvider>
      <ReactQueryDevtools/>
    </QueryClientProvider>
  );
};

export default MyApp;

/* resetCSS remove todos as estilos próprios/padrão, 
 * ele já vem por padrão como TRUE então não é necessário declara-lo,
 * só serve para identifica-lo como FALSE.
 * Assim ele pega todos os estilos padrões.
 */
