import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IUser } from '../../models/IUser';

export const getUser = createAsyncThunk(
    'user/getUser',
    async ( _, { rejectWithValue } ) => {
        console.info( 'User: getUser' );
        try {
            const response = await axios.get<IUser>( 'https://fakestoreapi.com/users/1' );
            return response.data;

        } catch ( e: any ) {
            console.info( 'User ERROR: getUser' );
            return rejectWithValue( e.response?.data?.error?.message || 'Не удалось получить данные о юзере! Повторите попытку или обратитесь в службу поддержки.' );
        }
    } )
