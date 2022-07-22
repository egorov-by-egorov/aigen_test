export interface Geolocation {
    lat: string;
    long: string;
}

export interface Address {
    geolocation: Geolocation;
    city: string;
    street: string;
    number: number;
    zipcode: string;
}
