import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { api } from '../api/api';
import DocumentsSlice from './reducers/DocumentsSlice';

const rootReducer = combineReducers( {
    DocumentsSlice,
    [ api.reducerPath ]: api.reducer,
} );

export const store = configureStore( {
        reducer: rootReducer,
        middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().concat( api.middleware )
    }
);

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>;
