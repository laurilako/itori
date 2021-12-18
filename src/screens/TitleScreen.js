import React from 'react'
import {
    Container,
    Flex,
    Heading,
    Text
} from '@chakra-ui/react'


function TitleScreen( props ){
    return(
        <Container>
            <Flex boxShadow={'dark-lg'} flexDir={'column'} align={"center"} p='5' bg='#E59892'>
                <Heading>
                    {props.title}
                </Heading>
                <Text mt='5'>
                    {props.content}
                </Text>
            </Flex>
        </Container>
    )
}

export default TitleScreen