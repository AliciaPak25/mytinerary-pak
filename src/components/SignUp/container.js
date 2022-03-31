import React from "react";
import SignUp from "./signUp";
import SignIn from "./signIn";
import { connect } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import userActions from "../../redux/actions/userActions";

function Container(props) {
  function SignOut() {
    props.signOutUser(props.user.email);
    console.log("sign out");
  }
  

  return (
    <div className="container">
        {!props.user ?
        (<img src={'https://png.pngitem.com/pimgs/s/24-248235_user-profile-avatar-login-account-fa-user-circle.png'} alt="user" width={50} className='imgBorderSign'/>) :
          <img src={props.user.photoURL} alt="google-profile-picture" width={50} className='imgBorderSign'/>
        }
      {props.user ? (
        <>
          <h1>
            {props.user.firstName +" "+ props.user.lastName}
          </h1>
          <div
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            <button
              onClick={SignOut}
              className="btn btn-primary btn-block"
              style={{ maxWidth: 400 }}
            >
              {" "}
              SignOut{" "}
            </button>
          </div>
        </>
      ) : (
        <h1>There is no user connected</h1>
      )}
      {}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
  };
};
const mapDispatchToProps = {
  signOutUser: userActions.signOutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
