import React from 'react';
import GoogleLogin from 'react-google-login'
import { connect } from 'react-redux';
import userActions from '../../redux/actions/userActions';
import './stylesSign.css'

function GoogleSignUp(props) {

  const responseGoogle = async (res) => {
      console.log(res)
    const userData = {
      firstName: res.profileObj.givenName + " ",
      lastName: res.profileObj.familyName,
      email: res.profileObj.email,
      password: res.profileObj.googleId,
      photoURL: res.profileObj.imageUrl, 
      country: 'Argentina',
      from: "google"
    }
    await props.signUpUser(userData)
  }

  return (
    <GoogleLogin
    className="buttonsocial buttonGoogle"
      clientId="971845975096-a3gu832l2esbdv2dmp2iktvql4t5imot.apps.googleusercontent.com"
      buttonText="Sign up with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />

  );
}
const mapStateToProps = (state) => {
    return{
        user: state.userReducer.user,
    }
}
const mapDispatchToProps = {
  signUpUser: userActions.signUpUser,

}
export default connect(mapStateToProps, mapDispatchToProps)(GoogleSignUp);


