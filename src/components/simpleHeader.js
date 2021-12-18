import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';

function SimpleHeader () {
    return(
        <Flex
            flexDir={['column', 'column', 'row', 'row']}
            align='center'
            h='100px'
            p='5'
            bg='#061F4A'>
            <Flex>
                <Heading color='#E59892'>
                    TORI
                </Heading>
            </Flex>
        </Flex>
    )
}

export default SimpleHeader