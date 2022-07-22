import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOADING_STATUS } from '../../constants/constants';
import { IUser } from '../../models/IUser';
import { LOADING_STATUS_TYPE } from '../../types/IGeneral';
import { getUser } from '../actions/userAsyncAction';

interface UserState {
    user: IUser,
    isLoading: LOADING_STATUS_TYPE;
    error: string;
}

const initialState: UserState = {
    user: {
        address: {
            geolocation: {
                lat: '',
                long: ''
            },
            city: 'Moscow',
            street: '',
            number: 0,
            zipcode: ''
        },
        id: 1,
        email: '',
        username: '',
        password: '',
        name: {
            firstname: '',
            lastname: ''
        },
        phone: ''
    },
    isLoading: LOADING_STATUS.FULFILLED,
    error: '',
};

export const UserSlice = createSlice( {
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        [ getUser.pending.type ]: ( state ) => {
            state.isLoading = LOADING_STATUS.PENDING;
        },
        [ getUser.fulfilled.type ]: ( state, action: PayloadAction<IUser> ) => {
            state.user = action.payload;
            state.isLoading = LOADING_STATUS.FULFILLED;
            state.error = '';
        },
        [ getUser.rejected.type ]: ( state, action: PayloadAction<string> ) => {
            state.isLoading = LOADING_STATUS.REJECTED;
            state.error = action.payload;
        },
    }
} )

export default UserSlice.reducer