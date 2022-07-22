import { ID } from '../types/IGeneral';
import { Address } from '../types/IGeoLocation';


interface Name {
    firstname: string;
    lastname: string;
}

export interface IUser {
    address: Address;
    id: ID;
    email: string;
    username?: string;
    password?: string;
    name: Name;
    phone: string;
}
