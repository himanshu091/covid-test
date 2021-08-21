const initialState = {
    email: "", 
    name: "", 
    token: null, 
    user_id: null, 
    auth_process: false
}
export default (state = initialState, action) => {
    switch (action.type) {
        case 'SIGNIN':
            return {
                ...state,
                email:action.payload.email, 
                name:action.payload.name, 
                token: action.payload.token,
                is_guest: false
            }
        case 'SIGNUP':
            return {
                ...state,
                email:action.payload.email, 
                user_id:action.payload.user_id,
            }
        case 'LOGOUT':
            return{
                email: "", 
                name: "", 
                token: null, 
                user_id: "", 
                image: "",
                is_guest: true,
                auth_process: false
            }
        case 'BEGIN_AUTH':
            console.log("Begin Auth State =>", state)
            return{
                ...state,
                auth_process: true
            }
        default:
            return state
    }
}