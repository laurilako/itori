import React, { useEffect } from 'react';
import { Button, ButtonGroup, Flex, Container, Text } from '@chakra-ui/react';
import { HashLink } from 'react-router-hash-link';
import SimpleHeader from '../simpleHeader';
import TitleScreen from '../../screens/TitleScreen';
import { useNavigate } from 'react-router-dom';

function Landing(){
    let navigate = useNavigate();

    useEffect(() => {
        const uInfo = localStorage.getItem("userinfo");
        if (uInfo) {
            navigate('/home');
        }
    }, [navigate])

    return(
        <>
            <SimpleHeader />
            <TitleScreen title='NOT LOGGED IN..' content='Please proceed to either login or sign up!'/>
            <Container mt='5'>
            <Flex boxShadow={'dark-lg'} flexDir={'column'} align={"center"} p='5' bg='#E59892'>
                    <Flex alignItems={'center'}>
                        <ButtonGroup>
                            <HashLink smooth to="/login">
                                <Button colorScheme='blue' variant='solid'>
                                    LOGIN
                                </Button>
                            </HashLink>
                            <Text fontSize='24' mt='5'>
                                
                            </Text>
                            <HashLink smooth to="/register">
                                <Button colorScheme='green' variant='solid'>
                                    SIGN UP
                                </Button>
                            </HashLink>  
                        </ButtonGroup>
                    </Flex>
                </Flex>
            </Container>
        </>
    )
}

export default Landing