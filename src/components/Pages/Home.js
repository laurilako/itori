import React, { useState, useEffect } from 'react'
import {
    Flex,
    Heading,
    Input,
    InputGroup,
    InputLeftElement,
    Grid,
    GridItem,
    SimpleGrid
} from '@chakra-ui/react'
import ListingCard from '../ListingCard'
import axios from 'axios'
import Header from '../Header'
import { FaSearch } from 'react-icons/fa'

function Home() {
    const [listings, setListings] = useState([])
    const currUser = JSON.parse(localStorage.getItem("userinfo"));
    useEffect(() => {
        getListings();
    }, [])

    const getListings = async () => {
        const { data } = await axios.get('/api/listings');
        setListings(data);
    }
    return(
        <>
            <Header />
            <Flex boxShadow={'dark-lg'} flexDir={'column'} align={"center"} p='50' w='100%' bg='#E59892'>
                <Heading color='black' as='h2'>
                    Welcome to TORI!
                </Heading>
                <Flex>
                    <InputGroup>
                        <Input bg='white' mt='5' variant='filled' color="black.500" placeholder='Search for listings...' />
                        <InputLeftElement
                        mt='5'
                        pointerEvents='none'
                        children={<FaSearch color='black' />}
                        />
                    </InputGroup>
                </Flex>
            </Flex>
            <Flex justify={'center'}>
                <SimpleGrid mt='5' columns={{ base: 1, xl: 3, lg: 2, md: 2 }}>
                    {listings.map((listing) => (
                        <GridItem p='2' key={listing.id}>
                            <ListingCard pic={listing.pic} user={currUser} owner={listing.user.name} id={listing.id} title={listing.title} content={listing.content}>
                            </ListingCard>
                        </GridItem>
                    ))}
                </SimpleGrid>
            </Flex>
        </>
    )
}

export default Home