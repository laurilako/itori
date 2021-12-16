import React from 'react'
import {
    Flex,
    Heading
} from '@chakra-ui/react'
import Header from '../Header'


function Home() {
    return(
        <>
            <Header />
            <Flex flexDir='column' align={"center"} p='50' w='100%' bg='#E59892'>
                <Heading as='h1' color='current'>
                    Welcome to TORI!
                </Heading>
                <Heading as='h2'>
                    Check these hot listings!
                </Heading>
            </Flex>
        </>
    )
}

export default Home