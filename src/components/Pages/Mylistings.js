import React, { useEffect, useState } from 'react'
import Header from '../Header'
import TitleScreen from '../../screens/TitleScreen'
import {
    Flex,
    Grid,
    Heading,
    Spacer,
    GridItem,
    Button
} from '@chakra-ui/react'
import ListingCard from '../ListingCard'
import { HashLink } from 'react-router-hash-link'
import axios from 'axios'

function Mylistings(props){

    const [listings, setListings] = useState([]);

    const FetchListings = async () => {
        const { data } = await axios.get('/api/listings');
        setListings(data);
    }

    useEffect(() => {
        FetchListings();
    }, []);

    return(
        <>
            <Header />
            <TitleScreen title={"Hello, "} content={"Konsta"} />
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
                        <GridItem mt='2' key={listing._id}>
                            <ListingCard id={listing._id} title={listing.title} content={listing.content}>
                            </ListingCard>
                        </GridItem>
                    ))}
                </Grid>
            </Flex>
        </>
    )
}

export default Mylistings