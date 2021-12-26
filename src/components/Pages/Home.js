import React, { useState, useEffect } from 'react'
import {
    Flex,
    Heading,
    GridItem,
    SimpleGrid,
    Button,
    Text
} from '@chakra-ui/react'
import ListingCard from '../ListingCard'
import axios from 'axios'
import Header from '../Header'
// import { FaSearch } from 'react-icons/fa'
import { HashLink } from 'react-router-hash-link'

function Home() {
    const [listings, setListings] = useState([])
    const [currUser, setcurrUser] = useState('')

    useEffect(() => {
        getUser();
        getListings();
    }, [])

    const getUser = () => {
        const local = JSON.parse(localStorage.getItem("userinfo"));
        setcurrUser(local);
    }

    const getListings = async () => {
        const { data } = await axios.get('/api/listings');
        setListings(data);
    }
    return(
        <>
            <Header />
            <Flex boxShadow={'dark-lg'} flexDir={'column'} align={"center"} p='50' w='100%' bg='#E59892'>
                <Heading color='black' as='h2'>
                    Welcome to Tori!
                </Heading>
                <Text>
                    Here you can see all posts. You create new or edit your posts from "My listings" page.
                </Text>
                {/* <Flex>
                    <InputGroup>
                        <Input bg='white' mt='5' variant='filled' color="black.500" placeholder='Search for listings...' />
                        <InputLeftElement
                        mt='5'
                        pointerEvents='none'
                        children={<FaSearch color='black' />}
                        />
                    </InputGroup>
                </Flex> */}
                <Flex mt='5'>
                    <HashLink smooth to='/new'>
                            <Button variant={'solid'} bg='green'>CREATE NEW</Button>
                    </HashLink>
                </Flex>
            </Flex>
            <Flex justify={'center'}>
                <SimpleGrid mt='5' columns={{ base: 1, xl: 3, lg: 2, md: 2 }}>
                    {listings.map((listing) => (
                        <GridItem p='2' key={listing.id}>
                            <ListingCard nothome={false} pic={listing.pic} user={currUser} owner={listing.user.name} id={listing.id} title={listing.title} content={listing.content}>
                            </ListingCard>
                        </GridItem>
                    ))}
                </SimpleGrid>
            </Flex>
        </>
    )
}

export default Home