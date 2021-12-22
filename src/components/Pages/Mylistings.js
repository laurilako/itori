import React, { useEffect, useState } from 'react'
import Header from '../Header'
import TitleScreen from '../../screens/TitleScreen'
import {
    Flex,
    Grid,
    Heading,
    GridItem,
    Button
} from '@chakra-ui/react'
import ListingCard from '../ListingCard'
import { HashLink } from 'react-router-hash-link'
import axios from 'axios'

function Mylistings(props){
    const [listings, setListings] = useState([]);
    const [user, setUser] = useState({});

    useEffect(() => {
        getListings();
        getUser();
    }, [])

    const getUser = () => {
        const local = JSON.parse(localStorage.getItem("userinfo"));
        setUser(local);
    }

    const getListings = async () => {
        const { data } = await axios.get('/api/listings');
        setListings(data);
    }

    return(
        <>
            <Header />
            <TitleScreen title={"Hello, "} content={user.name} />
            <Flex p='2' align='center' justify='center' flexDir={'column'}>
                <Flex p='6' >
                    <HashLink smooth to='/new'>
                        <Button variant={'solid'} bg='green'>CREATE NEW</Button>
                    </HashLink>

                </Flex>

                <Heading>
                    YOUR LISTINGS
                </Heading>
                <Grid mt='5' direction={'column'}>
                    {listings.map((listing) => (
                        <GridItem mt='2' key={listing.id}>
                            {(listing.user.id === user._id ? 
                                (<ListingCard user={user} id={listing.id} title={listing.title} content={listing.content}>
                                </ListingCard>)
                                :
                                null
                            )}
                        </GridItem>
                    ))}
                </Grid>
            </Flex>
        </>
    )
}

export default Mylistings