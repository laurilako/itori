import React from 'react'
import Header from '../Header'
import Welcome from '../../screens/Welcome'
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
import listings from '../../data/listings'

function Mylistings(props){
    return(
        <>
            <Header />
            <Welcome title={"Hello, "} content={"Konsta"} />
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