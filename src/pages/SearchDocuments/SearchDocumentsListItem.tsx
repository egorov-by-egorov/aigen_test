import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse, Grid, Typography } from '@mui/material';
import { DateTime } from 'luxon';
import React, { FunctionComponent, useState } from 'react';
import { IDocument } from '../../models/IDocuments';

interface Props {
    document: IDocument
}

const SearchDocumentsListItem: FunctionComponent<Props> = ( { document } ) => {
    const [ open, setOpen ] = useState( false );

    const handleClick = () => {
        setOpen( !open );
    };


    // Если нужно скрывать колапс при клике на другую вкладку, раскомментируйте код ниже!
    //const handleClickAway = () => {
    //    setOpen( false )
    //}

    return (
        //<ClickAwayListener onClickAway={ handleClickAway }>
        <Grid
            component={ 'li' }
            sx={ { mb: 1 } }
        >
            <Grid
                onClick={ handleClick }
                sx={ {
                    padding: 3,
                    backgroundColor: theme => theme.palette.success.light,
                    cursor: 'pointer',
                    color: '#000',
                    borderRadius: 1
                } }
                container
                justifyContent={ 'space-between' }
                alignItems={ 'center' }>
                <Grid item xs={ 11 }>
                    <Typography component={ 'span' } fontWeight={ 600 } variant={ 'body1' }>
                        { document.title || 'Название отсутсвует' }
                    </Typography>
                </Grid>
                { open ? <ExpandLess/> : <ExpandMore/> }
            </Grid>
            <Collapse in={ open } timeout="auto" unmountOnExit>
                <Grid container direction={ 'column' } justifyContent={ 'space-between' } minHeight={ 250 }
                      sx={ { pl: 3, pr: 3, pt: 2 } }>
                    <Grid item>
                        <Typography component={ 'h3' } fontWeight={ 600 } variant={ 'h6' } mb={ 1 }>
                            Описание
                        </Typography>
                        <Typography component={ 'p' } variant={ 'body1' } mb={ 1 }>
                            { document.description || 'Описание отсутсвует' }
                        </Typography>
                    </Grid>
                    <Typography align={ 'right' } component={ 'span' } fontWeight={ 600 } variant={ 'subtitle2' }>
                        Создан: { DateTime.fromISO( document[ 'created-from' ] ).toFormat( 'dd.MM.yyyy HH:mm' ) || 'дата отсутсвует' }
                    </Typography>
                </Grid>
            </Collapse>
        </Grid>
        //</ClickAwayListener>
    );
};

export default SearchDocumentsListItem;
