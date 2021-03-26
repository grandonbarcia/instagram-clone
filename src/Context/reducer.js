
let user = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : '';
let id = localStorage.getItem('id')
    ? JSON.parse(localStorage.getItem('id'))
    : '';

let jwt = localStorage.getItem('jwt')
    ? JSON.parse(localStorage.getItem('jwt'))
    : '';

let isLoggedIn = user && id && jwt ? true : false


const ACTIONS = {

    REQUEST_SIGNUP: 'REQUEST_LOGIN',
    REQUEST_LOGIN: 'REQUEST_LOGIN',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_ERROR: 'LOGIN_ERROR',
    LOGOUT: 'LOGOUT'

}

export const initialState = {
    user: '' || user,
    id: '' || id,
    isLoggedIn: false || isLoggedIn,
    loading: false,
    error: '',
    isValidated: false
};



export const AuthReducer = (initialState, action) => {
    switch (action.type) {
        case ACTIONS.REQUEST_LOGIN:
            return {
                ...initialState,
                loading: true,
            };
        case ACTIONS.LOGIN_SUCCESS:
            return {
                user: action.payload.username,
                id: 12345678,
                isLoggedIn: true,
                loading: false,
                isValidated: true
            };
        case ACTIONS.LOGOUT:
            return {
                ...initialState,
                user: '',
                id: '',
                isLoggedIn: false
            };

        case ACTIONS.LOGIN_ERROR:
            return {
                ...initialState,
                isValidated: false,
                error: action.error.message
            };
        default:
            throw new Error('Unhandled action type: ', action.type);
    }
};