import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import userActions from '../../redux/actions/userActions';
import './stylesSign.css'

function FacebookSignUp(props) {

  const responseFacebook = async (res) => {
    /* console.log(res)
    console.log(res.name) */
    const separatedFullName = res.name.split(" ")
    /*  console.log(fullNameSeparado) 
 */
    let firstName = separatedFullName[0]
    let surname = separatedFullName[1]
      //console.log(nombre)
      //console.log(apellido)

    const newUser = {
    firstName: firstName,
    lastName: surname,
    email: res.email,
    password: res.id,
    photoURL: res.picture.data.url, 
    country: props.country,
    from: "facebook",
    }
    await props.signUpUser(newUser)
  }

  return (
    <FacebookLogin
    cssClass="buttonsocial my-facebook-button-class"
    icon="fa-facebook"
    textButton=" Sign up with Facebook"
      appId="639963210404538"
      autoLoad={false}
      fields="name,email,picture,country"
      callback={responseFacebook}

    />
  );
}
const mapDispatchToProps = {
  signUpUser: userActions.signUpUser,

}

export default connect(null, mapDispatchToProps)(FacebookSignUp);