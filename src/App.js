import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { CssBaseline, Container } from "@material-ui/core";
import Layout from './layout';
import './styles/styles.scss';

class App extends React.Component {
    render() {
        return (
            <CssBaseline>
                <Container maxWidth="lg">
                    <Router>
                        <Layout />
                    </Router>
                </Container>
            </CssBaseline>
        )
    }
}

export default App;