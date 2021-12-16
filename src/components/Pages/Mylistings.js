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

function Mylistings(props){
    return(
        <>
            <Header />
            <Welcome title={"Hello, "} content={"Konsta"} />
            <Flex p='2' align='center' justify='center' flexDir={'column'}>
                <Flex p='6' >
                    <HashLink smooth to='/new'>
                        <Button variant={'solid'} bg='#E59892'>CREATE NEW</Button>
                    </HashLink>

                </Flex>

                <Heading>
                    YOUR LISTINGS
                </Heading>
                <Grid mt='5' direction={'column'}>
                    <GridItem>
                        <ListingCard title='title' content='testi'>
                        </ListingCard>
                    </GridItem>
                    <GridItem>
                        <ListingCard title='toinen' content='testi'>
                        </ListingCard>
                    </GridItem>
                </Grid>
            </Flex>
        </>
    )
}

export default Mylistings