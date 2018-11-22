// let user = JSON.parse(localStorage.getItem('user'));
const initState = { isLoad: false, auth: false, success: false, message: null, isOutlet: false, data: [] }

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('login error');
            return {
                ...state,
                isLoad: false,
                message: action.message,
                success: false,
            }
        case 'LOGIN_SUCCESS':
            console.log('login success');
            console.log(action);
            return {
                ...state,
                isLoad: false,
                auth: action.auth,
                success: action.success,
                message: action.message,
                isOutlet: action.isOutlet,
                data: JSON.parse(action.data)
            }
        case 'CHG_BRAND':
            console.log(action);
            return {
                ...state,
                isLoad: false,
                isOutlet: action.isOutlet,
                data: JSON.parse(action.data)
            }
        case 'LOAD':
            return {
                ...state,
                isLoad: action.load
            }
        default:
            return state
    }
};

export default authReducer;