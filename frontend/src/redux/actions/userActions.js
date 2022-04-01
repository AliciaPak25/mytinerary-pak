import axios from 'axios';

const userActions = {

    signUpUser: (newUser) => {
        return async (dispatch, getState) => {
            const res = await axios.post('https://mytinerary-pak.herokuapp.com/api/auth/signUp', {newUser})
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
            const user = await axios.post('https://mytinerary-pak.herokuapp.com/api/auth/signIn', {logedUser})
            if(user.data.success){
                localStorage.setItem('token', user.data.response.token)
                dispatch({type: 'user', payload: user.data.response.userData});
            }
                dispatch({
                    type: 'message',
                    payload: {
                        view: true,
                        message: user.data.message,
                        success: user.data.success
                    }
                });
        }

    },
    signOutUser: (closedUser) => {
        return async (dispatch, getState) => {
            const user = axios.post('https://mytinerary-pak.herokuapp.com/api/auth/signOut', {closedUser})
            localStorage.removeItem('token')
            dispatch({type: 'user', payload: null});
        }
    },

    verifyToken: (token) => {

        return async (dispatch, getState) => {
            const user = await axios.get('https://mytinerary-pak.herokuapp.com/api/auth/signInToken', {
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            
            if (user.data.success) {
                dispatch({type: 'user', payload: user.data.response});
                dispatch({
                    type: 'message',
                    payload: {
                        view: true,
                        message: user.data.message,
                        success: user.data.success
                    }
                });
            } else {
                localStorage.removeItem('token')
            }

        }
    }

}
export default userActions;