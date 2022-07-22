import { SelectChangeEvent } from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

export default function usePagination () {
    const [ query, setQuery ] = useSearchParams();
    const { search } = useLocation();
    const [ page, setPage ] = useState<number>( Number( query.get( 'page' ) ) || 1 );
    const [ rowsPerPage, setRowsPerPage ] = useState<number>( Number( query.get( 'rowsPerPage' ) ) || 8 );

    useEffect( () => {
        if ( !search ) {
            setPage( _ => 1 )
            setRowsPerPage( _ => 8 )
        }
    }, [ search ] );


    const handleChangePage = ( event: ChangeEvent<unknown>, value: number ) => {
        setPage( value );
        setQuery( {
            'page': value.toString(),
            'rowsPerPage': rowsPerPage.toString()
        } )
    };

    const handleChangeRowsPerPage = ( event: SelectChangeEvent<number> ) => {
        setRowsPerPage( parseInt( event.target.value as string, 10 ) );
        setPage( 1 );
        setQuery( {
            'page': '1',
            'rowsPerPage': event.target.value.toString()
        } )
    };

    return {
        page,
        rowsPerPage,
        handleChangePage,
        handleChangeRowsPerPage
    }
}