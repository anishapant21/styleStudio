import React from 'react';
import {ChakraProvider} from '@chakra-ui/react'
import Home from './Home';
import Filter from './Filter';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/filter">
                    <ChakraProvider>
                        <Filter />
                        
                    </ChakraProvider>
                </Route>
                <Route path="/">
                <ChakraProvider>
            <Home />
        </ChakraProvider>

                </Route>
            </Switch>
        </Router>
        
    )
}

export default App;