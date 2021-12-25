import React from 'react'
import { Flex, Box, Heading, Text, IconButton, Image
} from '@chakra-ui/react'
import { FaTrash, FaEdit } from 'react-icons/fa'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

// Listing card
function ListingCard(props) {
    const navigate = useNavigate();

    const deleteHandler = async (id) => {
        if(window.confirm(`Delete listing id: ${id}?`)){
            const res =  await axios.delete(`api/listings/${id}`)
            if(res.status === 204){
                navigate('/home')
            }
        }
    }

    return(
        <Box size='lg' bg='#E59892' borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Box m="5" as="a" href="/listing/:id">
                {(props.owner ? (<Heading ml='4' as='h5' size='xs'>Posted by {props.owner}</Heading>) : null)}
                <Flex flexDir={'column'}>
                    <Heading m="5" as="h4" size="md">{props.title}</Heading>
                    <Text ml='5' mt='-2'>{props.content}</Text>
                    <Image display='block' mx='auto' width={'50%'} src={props.pic}></Image>
                </Flex>
            </Box>
            <Flex>
                {(props.user.listings.includes(props.id) && props.nothome ?
                    (
                    <Flex p='3'>
                    <IconButton href={`/listing/${props.id}`} variant='ghost' icon={<FaEdit />}></IconButton>
                    <IconButton as='button' onClick={()=>deleteHandler(props.id)} variant='ghost' icon={<FaTrash />}></IconButton>
                    </Flex>) : null)}
            </Flex>
        </Box>
    )
}

export default ListingCard