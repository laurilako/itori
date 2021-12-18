import React, { useState } from 'react';
import { Button, ButtonGroup, Flex, Container, Text } from '@chakra-ui/react';
import { HashLink } from 'react-router-hash-link';
import SimpleHeader from '../simpleHeader';
import TitleScreen from '../../screens/TitleScreen';

function Landing(){
    // const [user, setUser] = useState();
    // useEffect(() => {
    //     const uInfo = localStorage.getItem("userinfo");
    //     console.log(uInfo);
    //     if (uInfo) {
    //         navigate('/home');
    //     }
    // }, [navigate])

    return(
        <>
            <SimpleHeader />
            <TitleScreen title='NOT LOGGED IN' />
            <Container mt='5'>
            <Flex boxShadow={'dark-lg'} flexDir={'column'} align={"center"} p='5' bg='#E59892'>
                    <Flex alignItems={'center'}>
                        <ButtonGroup>
                            <HashLink smooth to="/login">
                                <Button variant='solid'>
                                    LOGIN
                                </Button>
                            </HashLink>
                            <Text fontSize='24' mt='5'>
                                
                            </Text>
                            <HashLink smooth to="/register">
                                <Button variant='solid'>
                                    CREATE ACCOUNT
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