import { Container } from '@mui/material';
import React, { FunctionComponent } from 'react';
import Header from './components/Header/Header';
import SearchDocuments from './pages/SearchDocuments/SearchDocuments';

const App: FunctionComponent = () => {

    return (
        <Container
            maxWidth={ false }
            component="div"
            sx={ {
                backgroundColor: theme => theme.palette.background.default,
                pt: 10,
                display: 'flex'
            } }
        >
            <Header/>
            <SearchDocuments/>
        </Container>
    );
};

export default App;
