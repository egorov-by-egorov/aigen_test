import { Button, Grid, List, Typography } from '@mui/material';
import React, { FunctionComponent, useEffect } from 'react';
import CustomPagination from '../../components/CustomPagination/CustomPagination';
import CustomLoader from '../../components/ui/CustomLoader/CustomLoader';
import { LOADING_STATUS } from '../../constants/constants';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import usePagination from '../../hooks/usePagination';
import { getAllDocuments } from '../../store/actions/documentsAsyncAction';
import SearchDocumentsListItem from './SearchDocumentsListItem';

const SearchDocumentsList: FunctionComponent = () => {
    const dispatch = useAppDispatch();
    const { isLoading, documentsList, error } = useAppSelector( state => state.DocumentsSlice )
    const { page, rowsPerPage, handleChangePage, handleChangeRowsPerPage } = usePagination()
    useEffect( () => {
        dispatch( getAllDocuments( {
            _page: page,
            _limit: rowsPerPage
        } ) )
    }, [ page, rowsPerPage, dispatch ] )

    return (
        <>
            {
                isLoading === LOADING_STATUS.PENDING ?
                    <CustomLoader/>
                    : documentsList.length > 0 ?
                        (
                            <List
                                sx={ { bgcolor: 'background.paper', flexGrow: 1 } }
                                component="ul"
                                aria-labelledby="List documents"
                                dense={ true }
                            >
                                {
                                    documentsList.map( ( document ) => {
                                        return (

                                            <SearchDocumentsListItem key={ document.id } document={ document }/>

                                        )
                                    } )
                                }
                            </List>
                        )

                        : error ? (
                                <Grid sx={ { bgcolor: 'background.paper', flexGrow: 1 } }>
                                    <h1>Ошибка загрузки документов</h1>
                                    <Button onClick={ _ => dispatch( getAllDocuments( {} ) ) }>Повторить</Button>
                                </Grid>
                            )
                            :
                            <Typography align={ 'center' } variant={ 'h5' }
                                        sx={ { bgcolor: 'background.paper', flexGrow: 1 } }>Нет
                                документов</Typography>
            }
            <CustomPagination
                count={ 100 }
                rowsPerPage={ rowsPerPage }
                page={ page }
                handleChangeRowsPerPageAction={ handleChangeRowsPerPage }
                handleChangePageAction={ handleChangePage }
            />
        </>
    );
};

export default SearchDocumentsList;
