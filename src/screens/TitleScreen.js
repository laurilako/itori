import React from 'react'
import {
    Container,
    Flex,
    Heading,
} from '@chakra-ui/react'


function TitleScreen( props ){
    return(
        <Container>
            <Flex boxShadow={'dark-lg'} flexDir={'column'} align={"center"} p='5' bg='#E59892'>
                <Heading>
                    {props.title}
                </Heading>
                <Heading>
                    {props.content}
                </Heading>
            </Flex>
        </Container>
    )
}

export default TitleScreen