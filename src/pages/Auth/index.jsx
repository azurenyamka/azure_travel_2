import React from 'react'
import SignIn from './SignIn';
import SignUp from './SignUp';
import { useState } from 'react'; 

const Authpage = () => {
    const [isSignIn, setIsSignIn]= useState(true);
   //Conditional Render

   return(
    <>{isSignIn ? <SignIn setIsSignIn={setIsSignIn}/> : <SignUp setIsSignIn={setIsSignIn}/>}</>
   )
}

export default Authpage;