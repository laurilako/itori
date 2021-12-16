import React from 'react';
import {
  ChakraProvider,
  Flex
} from '@chakra-ui/react';
import theme from './config/theme';
import Empty from './components/Pages/Empty';
import Login from './components/Pages/Login'
import Home from './components/Pages/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route exact path='/' element={<Empty />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/home' element={<Home />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
