import { IDocument } from '../models/IDocuments';
import { IFilterParams } from '../types/IFilter';
import { api } from './api';

export const documentsAPI = api.injectEndpoints( {
    endpoints: ( build ) => ( {
        getAllDocuments: build.query<IDocument[], IFilterParams>( {
            query: ( { _limit = '9', _page = '1' } ) => ( {
                url: '/documents',
                params: {
                    _limit,
                    _page
                },
            } ),
            // сделал Пример для трансформа данных
            //transformResponse ( response: IDocument[] ): Promise<IDocument[]> | IDocument[] {
            //    return response.map( document => {
            //        document[ 'created-from' ] = new Date( document[ 'created-from' ] ).toISOString()
            //        return document
            //    } )
            //},
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

export const {
    useGetAllDocumentsQuery,
} = documentsAPI