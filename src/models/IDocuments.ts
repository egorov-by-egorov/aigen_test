import { ID } from '../types/IGeneral';

export interface IDocument {
    'id': ID,
    'title': string,
    'description': string,
    'file-url': string,
    'created-from': string,
    'created-to': string
}
