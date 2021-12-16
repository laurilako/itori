import React from "react";
import {
    Flex,
    Heading
} from "@chakra-ui/react";
import { ColorModeSwitcher } from './ColorModeSwitcher';

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
            <Heading color='#DD361C'>
                Tori
            </Heading>
        </Flex>
    </Flex>
    )
}

export default Header