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