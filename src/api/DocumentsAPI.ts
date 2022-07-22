import { IDocument } from '../models/IDocuments';
import { api } from './api';

export const documentsAPI = api.injectEndpoints( {
    endpoints: ( build ) => ( {
        getAllDocuments: build.query<IDocument[], { limit: number, page: number }>( {
            query: ( { limit = 9, page = 1 } ) => ( {
                url: '/documents',
                params: {
                    _limit: limit,
                    _page: page,
                },
            } ),
            providesTags: ( result = [] ) => [ ...result.map( ( { id } ) => (
                {
                    type: 'Documents', id
                } as const
            ) ),
                {
                    type: 'Documents' as const, id: 'LIST'
                }
            ],
        } ),
        createDocument: build.mutation<IDocument, IDocument>( {
            query: ( post ) => ( {
                url: '/documents',
                method: 'POST',
                body: post
            } ),
            invalidatesTags: [ { type: 'Documents', id: 'LIST' } ],
        } )
    } ),
} );
