import { createAsyncThunk } from '@reduxjs/toolkit';
import facadeApi from '../../axios/facade-api';
import { IDocument } from '../../models/IDocuments';
import { IFilterParams } from '../../types/IFilter';

export const getAllDocuments = createAsyncThunk(
    'documents/getAllDocuments',
    async ( filter: IFilterParams, { rejectWithValue } ) => {
        console.info( 'documents: getAllDocuments' );
        try {
            const response = await facadeApi.get<IDocument[]>( '/documents', {
                params: filter
            } );

            return response.data;

        } catch ( e: any ) {
            console.info( 'documents ERROR: getAllDocuments' );
            return rejectWithValue( e.response?.data?.error?.message || 'Не удалось получить данные о юзере! Повторите попытку или обратитесь в службу поддержки.' );
        }
    } )
