// Вывод склонений
export function declinationWords ( number: number, txt: string ) {
    const cases = [ 2, 0, 1, 1, 1, 2 ];
    return txt[ ( number % 100 > 4 && number % 100 < 20 ) ? 2 : cases[ ( number % 10 < 5 ) ? number % 10 : 5 ] ];
}

// Ограничитель длины текста с добавлением многоточия
export function limitedStringValue ( string: string, count: number ) {
    return string.length > count ? `${ string.slice( 0, count ) }...` : string;
}

// Формат битов к значениям
export function formatBytes ( bytes: number, decimals = 2 ) {
    if ( bytes === 0 ) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = [ 'Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB' ];

    const i = Math.floor( Math.log( bytes ) / Math.log( k ) );

    return parseFloat( ( bytes / Math.pow( k, i ) ).toFixed( dm ) ) + ' ' + sizes[ i ];
}

export function b64toBlob ( base64: string, type = 'application/octet-stream' ) {
    return fetch( `data:${ type };base64,${ base64 }` ).then( res => res.blob() );
}
