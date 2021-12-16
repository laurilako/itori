import React from "react";
import {
    Flex,
    Heading
} from "@chakra-ui/react";
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { HashLink } from 'react-router-hash-link';

function Header() {
    return(
    <Flex
        w='100%'
        align='flex-start'
        wrap='wrap'
        p='8'
        bg='#061F4A'>
        <Flex align={"center"}>
            <ColorModeSwitcher mr='8'/>
            <HashLink smooth to="/home">
                <Heading color='#DD361C'>
                    TORI
                </Heading>
            </HashLink>    
        </Flex>

        {/* Search bar to here */}
        
        {/* User info to here */}
    </Flex>
    )
}

export default Header