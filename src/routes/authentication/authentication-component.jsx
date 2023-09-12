// import { useEffect } from "react";
//import { getRedirectResult } from "firebase/auth";
// import { auth,
//     signInWithGooglePopup , 
//     createUserDocumentFromAuth, 
//     signInWithGoogleRedirect
// } from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-component";
import SignInForm from "../../components/sign-in-form/sign-in-component";
import './authentication.styles.scss';

const Authentication = () => {
    
    // useEffect( async() => {
    // const response = await getRedirectResult(auth);
    // console.log(response);
    // }, []);
    // useEffect(() => {
    //     //const response = await getRedirectResult(auth);
    //   //  console.log('hi');
    
      
    // }, [])
    
    // const logGoogleUser = async() =>{
    //     const {user} = await signInWithGooglePopup();
    //     const userDocRef = await createUserDocumentFromAuth(user);
    // }
   

    return(
        <div className="authentication-container">

            {/* <h1>Signin page</h1> */}
            {/* <button onClick={logGoogleUser}>Sign in with Google popup</button> */}
            {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}

            <SignInForm/>
            <SignUpForm/>
        </div>
    );
}
export default Authentication;