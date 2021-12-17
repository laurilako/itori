import React from 'react'
import {
    Flex,
    Heading,
    Input,
    InputGroup,
    InputLeftElement,
    Box
} from '@chakra-ui/react'
import Header from '../Header'
import { FaSearch } from 'react-icons/fa'

function Home() {
    return(
        <>
            <Header />
            <Flex boxShadow={'dark-lg'} flexDir={'column'} align={"center"} p='50' w='100%' bg='#E59892'>
                <Heading color='black' as='h2'>
                    Welcome to TORI!
                </Heading>
                <Flex>
                    <InputGroup>
                        <Input bg='white' mt='5' variant='filled' color="black.500" placeholder='Search for listings...' />
                        <InputLeftElement
                        mt='5'
                        pointerEvents='none'
                        children={<FaSearch color='black' />}
                        />
                    </InputGroup>
                </Flex>
            </Flex>
        </>
    )
}

export default Home