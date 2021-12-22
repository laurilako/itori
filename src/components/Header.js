import React, { useState, useEffect } from "react";
import {
    Flex,
    Heading,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { HashLink } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';

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
    <Flex
        flexDir={['column', 'column', 'row', 'row']}
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
        <Flex align='center' justify='flex-end' w='100%'>
        {/* User info to here */}
            <Flex>
                <HashLink smooth to="/listings">
                    <Button>
                        My listings
                    </Button>
                </HashLink>
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
            <ColorModeSwitcher />
        </Flex>
    </Flex>
    )
}

export default Header