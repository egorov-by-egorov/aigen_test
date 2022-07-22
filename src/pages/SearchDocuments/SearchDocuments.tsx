import { Box, Grid } from '@mui/material';
import React, { FunctionComponent } from 'react';
import SearchDocumentsList from './SearchDocumentsList';
import SearchDocumentsSearch from './SearchDocumentsSearch';

interface OwnProps {
}

type Props = OwnProps;

const SearchDocuments: FunctionComponent<Props> = ( props ) => {

    return (
        <Grid container component={ 'main' }>
            <Grid item xs={ 4 } component={ 'aside' }>
                <Box sx={
                    {
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'sticky',
                        top: 80
                    }
                }
                >
                    <SearchDocumentsSearch/>
                </Box>
            </Grid>
            <Grid component={ 'section' } item xs={ 8 }>
                <SearchDocumentsList/>
            </Grid>
        </Grid>
    );
};

export default SearchDocuments;
