import React, { useState, useEffect } from "react";
import {
    Flex,
    Heading,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    Text,
    ButtonGroup,
} from "@chakra-ui/react";
import { FaChevronDown, FaBars } from "react-icons/fa";
// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { HashLink } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';
import Headroom from 'react-headroom';

function Header() {
    const navigate = useNavigate();
    const [user, setUser] = useState('');
    const [update, setUpdate] = useState(false);

    useEffect(() => {
        const local = JSON.parse(localStorage.getItem("userinfo"));
        if (!local) {
            setTimeout(() => {
                navigate('/login');
            }, 500);
        }
        setUser(local)
    }, [navigate, update]);
    return(
        <>
        <Headroom>
            <Flex
                display={['none', 'none', 'flex', 'flex']}
                flexDir={'row'}
                align='center'
                h='150px'
                p='5'
                bg='#061F4A'>
                <Flex>
                    <HashLink smooth to="/home">
                        <Heading color='#E59892'>
                            TORI
                        </Heading>
                    </HashLink>
                </Flex>
                <Flex flexDir={['column', 'column', 'row', 'row']} align='center' justify='flex-end' w='100%'>
                {/* User info to here */}
                    <Flex>
                        <ButtonGroup>
                            <HashLink smooth to='/home'>
                                <Button>
                                    Home
                                </Button>
                            </HashLink>
                            <HashLink smooth to="/mylistings">
                                <Button>
                                    My listings
                                </Button>
                            </HashLink>
                        </ButtonGroup>
                    </Flex>
                    <Flex ml='2'>
                        <Menu>
                            <MenuButton as={Button} rightIcon={<FaChevronDown />}>
                                {user ? (user.name) : ""}
                            </MenuButton>
                            <MenuList>
                                <MenuItem onClick={() => {
                                    localStorage.removeItem("userinfo");
                                    setUser('');
                                    setUpdate(true);
                                }}>Log out</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Flex>
            </Flex>
            </Headroom>
                                
            <Headroom> 
            <Flex
                justifyContent={'space-between'}
                alignItems={'flex-start'}
                display={['flex', 'flex', 'none', 'none']}
                flexDir={'row'}
                h='100px'
                p='5'
                bg='#061F4A'>
                <Flex mt='2'>
                    <Menu>
                        <MenuButton as={IconButton} variant='solid' icon={<FaBars />} />
                                <MenuList>
                                    <MenuItem>
                                        <HashLink smooth to='/home'>
                                            Home
                                        </HashLink>
                                    </MenuItem>
                                    <MenuItem>
                                        <HashLink smooth to="/mylistings">
                                            My listings
                                        </HashLink>
                                    </MenuItem>
                                    <MenuItem onClick={() => {
                                            localStorage.removeItem("userinfo");
                                            setUser('');
                                            setUpdate(true);
                                        }}>Log out
                                    </MenuItem>
                                </MenuList>
                    </Menu>
                    <Text ml='2' mt='2' color={'white'}> {user ? (`logged in as ${user.name}`) : ""}  </Text>
                </Flex>
                <HashLink mt='2' smooth to="/home">
                    <Heading mt='2' color='#E59892'>
                        TORI
                    </Heading>
                </HashLink>
            </Flex>
            </Headroom>
        </>
    )
}

export default Header