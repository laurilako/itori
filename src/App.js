import React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';
import theme from './config/theme';
import Landing from './components/Pages/Landing';
import Login from './screens/Login';
import Register from './screens/Register';
import Home from './components/Pages/Home';
import Mylistings from './components/Pages/Mylistings';
import NewListing from './components/Pages/NewListing';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/mylistings' element={<Mylistings />} />
        <Route path='/new' element={<NewListing />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
