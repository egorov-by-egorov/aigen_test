import { useCallback, useRef } from 'react';

interface IUseDebounce {
    callback: ( ...args: Array<any> ) => void;
    delay: number;
}

export default function useDebounce ( { callback, delay }: IUseDebounce ) {
    const timer = useRef<any | null>( null );
 
    return useCallback(
        ( ...args: Array<any> ) => {
            if ( timer.current ) {
                clearTimeout( timer.current )
            }
            timer.current = setTimeout( () => {
                callback( ...args )
            }, delay )
        },
        [ callback, delay ],
    )

}