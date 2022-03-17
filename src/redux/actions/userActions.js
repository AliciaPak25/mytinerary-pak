import axios from 'axios';

const userActions = {

    signUpUser: (newUser) => {
        return async (dispatch, getState) => {
            const res = await axios.post('http://localhost:4000/api/auth/signUp', {newUser})
            /* dispatch({type: 'message', payload: res.data}); */
            dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            });
        }
    },
    signInUser: (logedUser) => {
        return async (dispatch, getState) => {
            const user = await axios.post('http://localhost:4000/api/auth/signIn', {logedUser})
            if(user.data.success){
                /* dispatch({type: 'user', payload: user.data.response.logedUser}); */
                dispatch({
                    type: 'message',
                    payload: {
                        view: true,
                        message: user.data.message,
                        success: user.data.success
                    }
                });
            }else{console.log(user.data.message)}
        }
    },
    signOutUser: (closedUser) => {
        return async (dispatch, getState) => {
            const user = axios.post('http://localhost:4000/api/auth/signOut', {closedUser})
            dispatch({type: 'user', payload: null});
        }
    }
}
export default userActions;