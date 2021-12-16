import React from "react";
import {
    Flex,
    Heading,
    Text,
    Button,
    Box,
    IconButton,
    SearchIcon,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Input
} from "@chakra-ui/react";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { HashLink } from 'react-router-hash-link';

function Header() {
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
                        {/* Logged in user here */}
                        Konsta
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Log out</MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
            <ColorModeSwitcher />
        </Flex>
    </Flex>
    )
}

export default Header