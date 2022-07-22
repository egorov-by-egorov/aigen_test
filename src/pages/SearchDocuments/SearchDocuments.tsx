import { Box, Grid } from '@mui/material';
import React, { FunctionComponent } from 'react';
import SearchDocumentsForm from './SearchDocumentsForm';
import SearchDocumentsList from './SearchDocumentsList';

interface OwnProps {
}

type Props = OwnProps;

const SearchDocuments: FunctionComponent<Props> = ( props ) => {

    return (
        <Grid container component={ 'main' } spacing={ 4 } sx={ { minHeight: 'calc(100vh - 100px)' } }>
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
                    <SearchDocumentsForm/>
                </Box>
            </Grid>
            <Grid component={ 'section' } item xs={ 8 }
                  sx={ { position: 'relative', display: 'flex', flexDirection: 'column' } }>
                <SearchDocumentsList/>
            </Grid>
        </Grid>
    );
};

export default SearchDocuments;
