import React from 'react'
import { Flex, Box, Heading, Text, IconButton
} from '@chakra-ui/react'
import { FaTrash, FaEdit } from 'react-icons/fa'

// Listing card
function ListingCard(props) {
    return(
        <Box bg='#E59892' borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Box m="5" as="a" href="/listing/:id">
                <Heading m="5" mb="0" as="h4" size="md">{props.title}</Heading>
                <Text m="5" mt="0">{props.content}</Text>
            </Box>
            <Flex p='3'>
                <IconButton variant='ghost' icon={<FaTrash />}></IconButton>
                <IconButton variant='ghost' icon={<FaEdit />}></IconButton>
            </Flex>
        </Box>
    )
}

export default ListingCard