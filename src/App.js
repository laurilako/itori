import React from 'react';
import {
  ChakraProvider,
  Flex
} from '@chakra-ui/react';
import theme from './config/theme'
import Header from './components/Header';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Flex>
        <Header />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
