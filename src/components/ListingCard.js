import React from 'react'
import { Flex, Box, Heading, Text, IconButton, Image
} from '@chakra-ui/react'
import { FaTrash, FaEdit } from 'react-icons/fa'

// Listing card
function ListingCard(props) {
    const deleteHandler = (id) => {
        if(window.confirm(`Delete listing id: ${id}?`)){
        }
    };
    console.log(props);
    return(
        <Box bg='#E59892' borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Box m="5" as="a" href="/listing/:id">
                {(props.owner ? (<Heading ml='4' as='h5' size='xs'>Posted by {props.owner}</Heading>) : null)}
                <Heading m="5" as="h4" size="md">{props.title}</Heading>
                <Text m="5" mt='-2'>{props.content}</Text>
            </Box>
            <Flex justify='center'>
                <Image objectFit='cover' boxSize={'150px'} src={props.pic}></Image>
            </Flex>
                {(props.user.listings.includes(props.id) ?
                    (
                    <Flex p='3'>
                    <IconButton href={`/listing/${props.id}`} variant='ghost' icon={<FaEdit />}></IconButton>
                    <IconButton as='button' onClick={()=>deleteHandler(props.id)} variant='ghost' icon={<FaTrash />}></IconButton>
                    </Flex>) : null)}
        </Box>
    )
}

export default ListingCard