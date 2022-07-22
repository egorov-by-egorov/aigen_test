import { AppBar, Toolbar, Typography } from '@mui/material';
import React, { FunctionComponent } from 'react';

const Header: FunctionComponent = () => {

    return (
        <AppBar color={ 'secondary' } position={ 'fixed' }>
            <Toolbar>
                <Typography variant="h6" component="div">
                    Поиск документов
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
