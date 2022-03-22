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
    <>
        {!props.user ?
        (<img src={'https://png.pngitem.com/pimgs/s/24-248235_user-profile-avatar-login-account-fa-user-circle.png'} alt="user" width={30}/>) :
          <img src={props.user.photoURL} alt="google-profile-picture" width={50}/>
        }
      {props.user ? (
        <>
          <h1>
            Connected user {props.user.firstName && props.user.lastName} from{" "}
            {props.user.from}
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
      <div className="card bg-light">
        {/* <BrowserRouter>
						<Routes>
							{!props.user &&<Route path="/signIn" element={<SignIn />} />}
							{!props.user &&<Route path="/signUp" element={<SignUp />} />}
						</Routes>
					</BrowserRouter> */}
      </div>
    </>
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
