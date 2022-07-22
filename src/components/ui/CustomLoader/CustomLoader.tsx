import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import React, { FunctionComponent } from 'react';

type Tcolor = 'default' | 'white'

interface OwnProps {
    color?: Tcolor
}

const CustomLoader: FunctionComponent<OwnProps> = ( { color = 'default' } ) => {
    return (
        <Box
            sx={
                {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 99999,
                    backgroundColor: 'transparent'
                }
            }
        >
            <CircularProgress sx={ { marginBottom: 1 } }/>
            {
                /*
                 <Typography align={ 'center' }>Loading</Typography>
                 */
            }
        </Box>
    );
};

export default CustomLoader;
