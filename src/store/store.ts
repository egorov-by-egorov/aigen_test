import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { api } from '../api/api';

import UserSlice from './reducers/UserSlice';

const rootReducer = combineReducers( {
    UserSlice,
    [ api.reducerPath ]: api.reducer,
} );

export const store = configureStore( {
        reducer: rootReducer,
        middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().concat( api.middleware )
    }
);

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>;
