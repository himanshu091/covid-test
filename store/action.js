import axios from 'axios'
import API_URL from '../utils/API_URL';




export const SIGNIN= 'SIGNIN';
export const loginAction = (data) => async (dispatch, getState) => {
    try{
        const res = await axios({
            method: 'post',
            url: `${API_URL}/api/login`,
            data: data,
            headers: {'Content-Type': 'application/json' }
        })
        
        // console.log("Login =>", res.data)
        if(!res.data.error){
            dispatch({
                type: SIGNIN,
                payload: {token: res.data.token,
                        user_id:res.data.data._id,
                        fName: res.data.data.firstName,
                        lName: res.data.data.lastName,
                        phone: res.data.data.phone,
                        email: res.data.data.email
                    }
            })
        }
        return res.data
    }catch(err){
        console.log(err)
    }
};