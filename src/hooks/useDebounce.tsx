import { useEffect, useState } from 'react';

interface IUseDebounce {
    value: string;
    delay: number;
}

export default function useDebounce ( { value, delay }: IUseDebounce ): string {
    const [ debouncedValue, setDebouncedValue ] = useState<string>( value );
    useEffect( () => {
            const handler = setTimeout( () => {
                setDebouncedValue( value );
            }, delay );
            return () => {
                clearTimeout( handler );
            };
        },
        [ value, delay ]
    );
    return debouncedValue;
}