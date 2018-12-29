const initState = {
    authMessage: null
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case 'LOGIN_ERROR':
            console.log('login failed');
            return {
                ...state,
                authMessage: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('login succeeded');
            return {
                ...state,
                authMessage: null
            }
        case 'LOGOUT_SUCCESS':
            console.log('logout success');
            return state;
        case 'SIGNUP_ERROR':
            console.log('signup error');
            return {
                ...state,
                authError: action.err.message
            }
        case 'SIGNUP_SUCCESS':
            console.log('signup success');
            return {
                ...state,
                authError: null
            }
        default:
            return state;
    }
}

export default authReducer;