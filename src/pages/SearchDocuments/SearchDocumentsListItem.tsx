import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse, Grid, Typography } from '@mui/material';
import React, { FunctionComponent, useState } from 'react';

interface OwnProps {
}

type Props = OwnProps;

const SearchDocumentsListItem: FunctionComponent<Props> = ( props ) => {
    const [ open, setOpen ] = useState( false );

    const handleClick = () => {
        setOpen( !open );
    };

    return (
        <Grid
            component={ 'li' }
            onClick={ handleClick }
        >
            <Grid
                sx={ {
                    padding: 3,
                    backgroundColor: theme => theme.palette.success.light,
                    cursor: 'pointer',
                    color: '#000'
                } }
                container
                justifyContent={ 'space-between' }
                alignItems={ 'center' }>
                <Grid item xs={ 11 }>
                    <Typography component={ 'span' } fontWeight={ 600 } variant={ 'body1' }>
                        Название док-та Lorem ipsum
                        dolor sit amet, consectetur adipisicing elit. Ad consequatur ex nam quod reprehenderit!
                        Excepturi libero nesciunt temporibus unde veniam.
                    </Typography>
                </Grid>
                { open ? <ExpandLess/> : <ExpandMore/> }
            </Grid>
            <Collapse in={ open } timeout="auto" unmountOnExit>
                <Grid component={ 'p' } minHeight={ 250 } sx={ { pl: 3, pr: 3 } }>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequatur ex nam quod reprehenderit!
                    Excepturi libero nesciunt temporibus unde veniam.
                </Grid>
            </Collapse>
        </Grid>
    );
};

export default SearchDocumentsListItem;
