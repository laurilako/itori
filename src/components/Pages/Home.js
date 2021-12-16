import React from 'react'
import {
    Flex,
    Heading,
    Input,
    InputGroup
} from '@chakra-ui/react'
import Header from '../Header'


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
                        {/* <InputLeftElement
                        pointerEvents='none'
                        children={<PhoneIcon color='gray.300' />}
                        /> */}
                        <Input mt='5' bg='white' type='text' placeholder='Search for listings...' />
                    </InputGroup>
                </Flex>
            </Flex>
        </>
    )
}

export default Home