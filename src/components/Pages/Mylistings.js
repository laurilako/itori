import React, { useEffect, useState } from 'react'
import Header from '../Header'
import TitleScreen from '../../screens/TitleScreen'
import {
    Flex,
    SimpleGrid,
    Heading,
    Box,
    GridItem,
    Button,
    IconButton
} from '@chakra-ui/react'
import { FaTrash, FaEdit } from 'react-icons/fa'
import ListingCard from '../ListingCard'
import { useNavigate } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import axios from 'axios'
import SingleListing from './SingleListing'

function Mylistings(){
    const navigate = useNavigate();
    const [listings, setListings] = useState([]);
    const [user, setUser] = useState('');
    const [edit, setEdit] = useState(false);
    const [ID, setID] = useState();

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
    
    const editHandler = (id) => {
        setEdit(true)
        setID(id)
    }

    const deleteHandler = async (id) => {
        if(window.confirm(`Delete listing id: ${id}?`)){
            const res =  await axios.delete(`/api/listings/${id}`, { data: { data: user._id } })
            if(res.status === 204){
                navigate('/home')
            }
        }
    }

    return(
        <>
            <Header />
            {edit ? (<SingleListing id={ID} />) : 
            (<>
                <TitleScreen content={"You can view, create new, edit or remove your listings"} />
                <Flex p='2' align='center' justify='center' flexDir={'column'}>
                    <Flex p='6' >
                        <HashLink smooth to='/new'>
                            <Button variant={'solid'} bg='green'>CREATE NEW</Button>
                        </HashLink>
                    </Flex>
                    <Heading>
                        YOUR LISTINGS
                    </Heading>
                    <Flex>
                    <SimpleGrid mt='5' columns={{ base: 1, xl: 3, lg: 2, md: 5 }}>
                        {listings.map((listing) => (
                            <GridItem p='2' key={listing.id}>
                                {(listing.user.id === user._id ? 
                                    (<>
                                        <ListingCard nothome={true} pic={listing.pic} user={user} id={listing.id} title={listing.title} content={listing.content}>
                                        </ListingCard>
                                        <Box maxWidth='85px' boxShadow={'lg'} bg='#E59892' borderWidth="2px" borderColor={'blackAlpha.400'} borderRadius="lg" overflow="hidden">
                                            <IconButton as='button' onClick={()=>editHandler(listing.id)} variant='ghost' icon={<FaEdit />}></IconButton>
                                            <IconButton as='button' onClick={()=>deleteHandler(listing.id)} variant='ghost' icon={<FaTrash />}></IconButton>
                                        </Box>
                                    </>)
                                    : null
                                )}
                            </GridItem>
                        ))}
                    </SimpleGrid>
                    </Flex>
                </Flex>
            </>)}
        </>
    )
}

export default Mylistings