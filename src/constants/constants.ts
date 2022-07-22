export const AUTH_EXP_OFFSET_MS = 60 * 1000;
export const ALERT_DEFAULT_CLOSE_MS = 6 * 1000;
export const TIMEZONE_OFFSET_MINUTES = Math.abs( new Date().getTimezoneOffset() );
export const DRAWER_WIDTH = 280;
export const ENTER_KEY_CODE = 'Enter';


export const LOADING_STATUS = Object.freeze( {
    PENDING: 'PENDING',
    FULFILLED: 'FULFILLED',
    REJECTED: 'REJECTED',
} )
