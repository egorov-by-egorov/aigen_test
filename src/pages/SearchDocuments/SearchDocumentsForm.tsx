import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, TextField } from '@mui/material';
import React, { FunctionComponent } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { useAppDispatch } from '../../hooks/redux';
import { getAllDocuments } from '../../store/actions/documentsAsyncAction';
import { ID } from '../../types/IGeneral';

interface FormInput {
    id: ID;
    'created-from': string;
    'created-to': string;
    'name': string;
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
        'created-from': yup.string().notRequired(),
        'created-to': yup.string().notRequired(),
        'name': yup.string().notRequired()
    } )


const SearchDocumentsForm: FunctionComponent = () => {
    const dispatch = useAppDispatch()
    const { register, formState: { errors }, handleSubmit } = useForm<FormInput>( {
        resolver: yupResolver( schema ),
    } );

    const onSubmit: SubmitHandler<FormInput> = data => {
        console.log( 'submit', data )
        dispatch( getAllDocuments( { id: data.id } ) )
    };

    return (
        <Box component="form" onSubmit={ handleSubmit( onSubmit ) } noValidate sx={ {} }>
            <TextField
                margin="normal"
                type="text"
                fullWidth
                id="id"
                label="ID документа"
                autoFocus
                error={ Boolean( errors.id ) }
                helperText={ errors.id?.message }
                { ...register( 'id' ) }
            />
            <TextField
                margin="normal"
                fullWidth
                label="Название документа"
                type="text"
                id="name"
                error={ Boolean( errors.name ) }
                helperText={ errors.name?.message }
                { ...register( 'name' ) }
            />
            <Button
                type="submit"
                fullWidth
                key="Enter"
                variant="contained"
                color="primary"
                sx={ { mt: 3, mb: 2 } }
            >
                Искать
            </Button>
        </Box>
    );
};

export default SearchDocumentsForm;
