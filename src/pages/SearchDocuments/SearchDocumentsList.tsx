import { List } from '@mui/material';
import React, { FunctionComponent } from 'react';
import SearchDocumentsListItem from './SearchDocumentsListItem';

interface OwnProps {
}

type Props = OwnProps;

const SearchDocumentsList: FunctionComponent<Props> = ( props ) => {

    return (
        <List
            sx={ { width: '100%', bgcolor: 'background.paper' } }
            component="ul"
            aria-labelledby="List documents"
            dense={ true }
        >
            <SearchDocumentsListItem/>
            <SearchDocumentsListItem/>
        </List>
    );
};

export default SearchDocumentsList;
