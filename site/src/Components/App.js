import React from 'react';
import {ChakraProvider} from '@chakra-ui/react'
import Home from './Home';

const App = () => {
    return (
        <ChakraProvider>
            <Home />
        </ChakraProvider>
    )
}

export default App;