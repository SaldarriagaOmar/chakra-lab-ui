import React from 'react';
import { Box, Button, ButtonGroup } from '@chakra-ui/react';

const Header = () => {
    return (
        <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            width='100vh'
            py={24}
            bgImage={"url('https://images5.alphacoders.com/131/1311166.jpeg')"}
            bgPosition='center'
            bgRepeat='no-repeat'
            flexDirection='column'
            textAlign='center'
        >
            <Box mt={2} color='white'><h1>Llamar a Batman por:</h1></Box>
            <Box mt={2}>
            <ButtonGroup gap='4'>
                <Button colorScheme='red' variant='outline'>Teléfono</Button>
                <Button colorScheme='red' variant='outline'>Batiseñal</Button>
            </ButtonGroup>
            </Box>
        </Box>
    );
};

export default Header;
