import React, { useEffect, useState } from 'react';
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
import { Route, Routes, useMatch } from 'react-router-dom';
import SingleListing from './components/Pages/SingleListing';
import axios from 'axios'

function App() {
  const [listings, setListings] = useState([]);
  
  useEffect(() => {
    getListings();
  }, [])

  const getListings = async () => {
    const { data } = await axios.get('/api/listings');
    setListings(data);
  }

  const matchBId = useMatch('/listing/:id')
  const listingdata = matchBId
    ? listings.find((o) => o.id === matchBId.params.id)
    : null

  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/listings' element={<Mylistings />} />
        <Route exact path='/listing/:id' element={<SingleListing data={listingdata} />} />
        <Route exact path='/new' element={<NewListing />} />
        <Route exact path='/' element={<Landing />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
