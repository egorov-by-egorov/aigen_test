import { ID } from './IGeneral';

export interface IFilterParams {
    _limit?: number,
    _page?: number,
    id?: ID,
    title_like?: string
}