import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, TextField } from '@mui/material';
import React, { FunctionComponent, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useAppDispatch } from '../../hooks/redux';
import useDebounce from '../../hooks/useDebounce';
import { getAllDocuments } from '../../store/actions/documentsAsyncAction';
import { IFilterParams } from '../../types/IFilter';

interface FormInput {
    id: string;
    'created-from': string;
    'created-to': string;
    'title': string;
}

const schema = yup
    .object()
    .shape( {
        //@ts-ignore
        id: yup.string()
            .nullable()
            .default( undefined )
            .transform( ( curr, orig ) => orig === '' ? null : curr )
            .matches( /^[0-9]+$/, 'Must be only digits' ),
        'created-from': yup.date()
            .nullable().notRequired(),
        'created-to': yup.string()
            .nullable().notRequired(),
        'title': yup.string().notRequired()
    } )


const SearchDocumentsForm: FunctionComponent = () => {
    const dispatch = useAppDispatch()
    const { register, formState: { errors, touchedFields }, reset, watch, handleSubmit } = useForm<FormInput>( {
        resolver: yupResolver( schema ),
    } );
    const watchID = watch( 'id' )
    const debouncedSearchTerm = useDebounce( { value: watchID, delay: 500 } )

    useEffect( () => {
        if ( debouncedSearchTerm ) {
            dispatch( getAllDocuments( {
                id: Number( debouncedSearchTerm ),
                _page: 1,
                _limit: 8
            } ) )
        } else if ( touchedFields.id ) {
            dispatch( getAllDocuments( {
                _page: 1,
                _limit: 8
            } ) )
        }

    }, [ debouncedSearchTerm ] );


    const onSubmit: SubmitHandler<FormInput> = data => {
        console.log( 'submit', data )
        const filter: IFilterParams = {
            _page: 1,
            _limit: 8,
        }

        if ( data?.title ) {
            filter.title_like = data.title
        }
        dispatch( getAllDocuments( filter ) )
    };

    const onReset = () => {
        reset()
        dispatch( getAllDocuments( {
            _page: 1,
            _limit: 8
        } ) )
    }

    return (
        <Box component="form" onSubmit={ handleSubmit( onSubmit ) } noValidate sx={ {} }>
            <TextField
                margin="normal"
                type="text"
                autoComplete={ 'new-password' }
                fullWidth
                id="id"
                label="ID документа"
                error={ Boolean( errors.id ) }
                helperText={ errors.id?.message }
                { ...register( 'id' ) }
            />
            <TextField
                margin="normal"
                fullWidth
                disabled={ Boolean( watchID ) }
                label="Название документа"
                type="text"
                autoComplete={ 'new-password' }
                id="title"
                error={ Boolean( errors.title ) }
                helperText={ errors.title?.message }
                { ...register( 'title' ) }
            />
            <Button
                type="submit"
                key="Enter"
                variant="contained"
                color="primary"
                sx={ { mt: 3, mb: 2 } }
            >
                Искать
            </Button>
            <Button
                onClick={ onReset }
                type="button"
                variant="contained"
                color="secondary"
                sx={ { mt: 3, mb: 2 } }
            >
                Сбросить
            </Button>
        </Box>
    );
};

export default SearchDocumentsForm;
