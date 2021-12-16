import React from 'react';
import { Button, Flex, Heading } from '@chakra-ui/react';
import { HashLink } from 'react-router-hash-link';

function Empty(){
    return(
        <Flex flexDir={'column'} justify={'center'} align={'center'}>
            <Heading mt='10'>
                Empty site...
            </Heading>
            <HashLink smooth to="/home">
                <Button mt='5'>
                    RETURN TO TORI
                </Button>
            </HashLink>  
        </Flex>
    )
}

export default Empty