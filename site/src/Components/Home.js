import React from 'react';
import { Box } from '@chakra-ui/layout';
import Navbar from './Navbar';
import '../style/Home.css'

const Home = () => {
    return (
        <Box className="home" w="100%" h="2000px">
            <Navbar />
        </Box>
    );
}

export default Home;