import React from "react";
import {
    Flex,
    Heading,
    Text,
    Button,
    Box,
    Menu,
    MenuButton,
    MenuList,
    MenuItem
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { HashLink } from 'react-router-hash-link';

function Header() {
    return(
    <Flex
        w='100%'
        align='flex-start'
        p='8'
        bg='#061F4A'>
        <ColorModeSwitcher mt='-5' mr='3' ml='-5'/>
        <Flex>
            <HashLink smooth to="/home">
                <Heading color='#DD361C'>
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
                        {/* Logged in user here */}
                        Konsta
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Log out</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
        </Flex>
        {/* Search bar to here */}
    </Flex>
    )
}

export default Header