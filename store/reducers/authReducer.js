const initialState = {
    email: null, 
    token: null, 
    auth_process: false,
    token: null,
    user_id:null,
    fName: null,
    lName: null,
    phone: null,

}
export default (state = initialState, action) => {
    switch (action.type) {
        case 'SIGNIN':
            return {
                ...state,
                token: action.payload.token,
                user_id: action.payload._id,
                fName: action.payload.firstName,
                lName: action.payload.lastName,
                phone: action.payload.phone,
                email: action.payload.email
            }
        case 'LOGOUT':
            return{
                email: null, 
                token: null, 
                auth_process: false,
                token: null,
                user_id:null,
                fName: null,
                lName: null,
                phone: null,
            }
        default:
            return state
    }
}