import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { IFilterParams } from '../types/IFilter';

export default function useFilter () {
    const [ query, setQuery ] = useSearchParams();
    const { search } = useLocation();
    const [ filter, setFilter ] = useState<IFilterParams>( {
        _limit: Number( query.get( '_limit' ) ) || 9,
        _page: Number( query.get( '_page' ) ) || 1
    } )

    useEffect( () => {
        if ( !search ) {
            setFilter( _ => search as IFilterParams )
        }
    }, [ search ] );

    const changeFilter = ( filter: IFilterParams ) => {

        setQuery( JSON.stringify( filter ) )
        setFilter( prevState => ( {
            ...prevState,
            ...filter
        } ) )
    }

    return { filter, changeFilter }
}