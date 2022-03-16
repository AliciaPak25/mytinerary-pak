import axios from 'axios';

const userActions = {

    signUpUser: (userData) => {
        return async (dispatch, getState) => {
            const res = await axios.post('http://localhost:4000/api/auth/signUp', {userData})
            console.log(res.data)
        }
    },
    signInUser: (logedUser) => {
        return async (dispatch, getState) => {
            const user = await axios.post('http://localhost:4000/api/auth/signIn', {logedUser})
            if(user.data.success){
                dispatch({type: 'user', payload: user.data.response.userData});
            }else{console.log(user.data.message)}
        }
    },
    signOutUser: (closedUser) => {
        return async (dispatch, getState) => {
            const user = axios.post('http://localhost:4000/api/auth/signOut', {closedUser})
        }
    }
}
export default userActions;