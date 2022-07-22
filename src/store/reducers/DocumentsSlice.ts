import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOADING_STATUS } from '../../constants/constants';
import { IDocument } from '../../models/IDocuments';
import { LOADING_STATUS_TYPE } from '../../types/IGeneral';
import { getAllDocuments } from '../actions/documentsAsyncAction';

interface DocumentsState {
    documentsList: Array<IDocument>,
    isLoading: LOADING_STATUS_TYPE;
    error: string;
}

const initialState: DocumentsState = {
    documentsList: [],
    isLoading: LOADING_STATUS.FULFILLED,
    error: '',
};

export const DocumentsSlice = createSlice( {
    name: 'documents',
    initialState,
    reducers: {},
    extraReducers: {
        [ getAllDocuments.pending.type ]: ( state ) => {
            state.isLoading = LOADING_STATUS.PENDING;
        },
        [ getAllDocuments.fulfilled.type ]: ( state, action: PayloadAction<IDocument[]> ) => {
            state.documentsList = action.payload;
            state.isLoading = LOADING_STATUS.FULFILLED;
            state.error = '';
        },
        [ getAllDocuments.rejected.type ]: ( state, action: PayloadAction<string> ) => {
            state.isLoading = LOADING_STATUS.REJECTED;
            state.error = action.payload;
        },
    }
} )

export default DocumentsSlice.reducer