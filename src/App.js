import React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import theme from './config/theme';
import Empty from './components/Pages/Empty';
import Login from './components/Pages/Login'
import Home from './components/Pages/Home';
import Mylistings from './components/Pages/Mylistings'
import NewListing from './components/Pages/NewListing'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/listings' element={<Mylistings />} />
        <Route exact path='/new' element={<NewListing />} />
        <Route exact path='/' element={<Empty />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
