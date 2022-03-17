import React from 'react';
import SignUp from './signUp';
import SignIn from './signIn';
import { connect } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import userActions from '../../redux/actions/userActions';
import { display } from '@mui/system';

function Container(props) {

    function SignOut() {
        props.SignOutUser(props.user.email)
    }

    return (
        <>
            {props.user ? <><h1>Connected user {props.user.firstName && props.user.lastName} from {props.user.from[0]}</h1>
                <div style={{display: "flex", justifyContent: "center", width: "100%"}}>
                    <button onClick={SignOut} className="btn btn primary btn-block" style={{maxWidth: 400}}></button>
                </div>
            </>
                : <h1>There is no user logged in</h1>}
            <div className='card bg-light'>
                <article className='card-body mx-auto' style={{maxWidth: 400}}>
                    <h4 className='card-title mt-3 text-center'>User Account</h4>
                    <p>Get started with your free account</p>

                    <p className='divider-text'>
                        <span className='bg-light'>OR</span>
                    </p>
                </article>
            </div>
        </>
    );
}
const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
    }
}
const mapDispatchToProps = {
    SignOutUser: userActions.SignOutUser,
}
export default Container;