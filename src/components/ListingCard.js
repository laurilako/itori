import React from 'react'
import { Flex, Box, Heading, Text, Image
} from '@chakra-ui/react';

// Listing card
function ListingCard(props) {
    return(
        <Box maxWidth='400px' boxShadow={'lg'} bg='#E59892' borderWidth="2px" borderColor={'blackAlpha.400'} borderRadius="lg" overflow="hidden">
            <Box textAlign={'right'} m="5">
                {(props.owner ? (<Heading as='h5' size='xs'>by {props.owner}</Heading>) : null)}
                <Flex align='center' justify='center' flexDir={'column'}>
                    <Heading m="5" as="h4" size="md">{props.title}</Heading>
                    <Text mt='-2'>{props.content}</Text>
                    <Image mt='2' display='block' mx='auto' width={'50%'} src={props.pic}></Image>
                </Flex>
            </Box>
        </Box>
    )
}

export default ListingCard