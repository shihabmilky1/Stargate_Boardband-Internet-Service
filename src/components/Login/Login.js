import React, { useContext, useEffect, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }
const Login = () => {
    const [loginUser,setLoginUser] = useContext(UserContext)
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
   
    const user = result.user;
    setLoginUser({name:user.displayName,email:user.email,role:''})
    history.replace(from);

  }).catch((error) => {
    const errorMessage = error.message;
  });
    }
    useEffect(() => {
        firebase.auth().onAuthStateChanged(myUser=>{
            const user = myUser;
           if(myUser){
            setLoginUser({name:user.displayName,email:user.email,image:user.photoURL});
            history.replace(from);
           }
           else{
               console.log('hi')
           }
        })
    },[])
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="google-signIn" style={{position: 'absolute',top: '50%', left: '50%',transform: 'translate(-50%,-50%)'}}>
                            <button className="btn my-btn"onClick={handleGoogleSignIn}><i class="fab fa-google"></i> Continue Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login;