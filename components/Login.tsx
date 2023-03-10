import React, { useContext, useState } from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { useEffect } from "react";
import { auth } from "../firebase/clientApp";
import { UserType } from "../types/UserType";
import AuthContext from "../context/AuthContext";

interface LoginProps {
  user?: UserType 
  signIn: boolean
  setSignIn: (arg: boolean) => void
}

const Login = ({ user, signIn, setSignIn }: LoginProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(true);
  const googleAuth = new GoogleAuthProvider();

  const googleLogin = async () => {
    const result = await signInWithPopup(auth, googleAuth);
    setSignIn(false)
  };
  const { logIn, signUp, currentUser, loggedIn, setLoggedIn } = useContext(AuthContext);
  
  const submitHandler = async () => {
    if (!email || !password) {
      setError("Please enter a valid Email and Password");
      return;
    }
    if (isSigningIn) {
      try {
        await logIn(email, password);
        setSignIn(false)
      } catch (err) {
        setError("incorrect email or password");
      }
      return
    }
    await signUp(email, password);
  };
  
  return (
    <>
      {signIn ? (
        <div className="overflow-hidden fixed w-screen h-screen flex-1 flex items-center justify-center gap-2 sm:gap-4 flex-col bg-black text-white text-xs sm:text-sm md:text-lg z-50">
          <h1 className="font-extrabold text-2xl sm:text-4xl select-none">
            {isSigningIn ? "Sign in" : "Create an account"}
          </h1>
          {error && (
            <div className="w-full max-w-[40ch] py-2 border border-solid border-red-300 text-center text-red-300">
              {error}
            </div>
          )}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className="w-full outline-none text-slate-900 p-2 max-w-[40ch] duration-300  border-b-2 border-solid border-white focus:border-purple-300"
            placeholder="Email Address"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="w-full outline-none text-slate-900 p-2 max-w-[40ch] duration-300  border-b-2 border-solid border-white focus:border-purple-300"
            placeholder="Password"
          />
          <button
            onClick={submitHandler}
            className="w-full max-w-[40ch] hover:text-black border border-white border-solid py-2 duration-300 relative after:absolute after:top-0 after:right-full after:w-full after:h-full after:bg-white after:z-10 overflow-hidden hover:after:translate-x-full after:duration-300"
          >
            <h2 className="z-20 relative">
              {isSigningIn ? "Sign In" : "Create Account"}
            </h2>
          </button>
          <h2
            className="duration-300 hover:scale-105 cursor-pointer"
            onClick={() => setIsSigningIn(!isSigningIn)}
          >
            {!isSigningIn ? "Sign In" : "Create Account"}
          </h2>
          <h2
            className="duration-300 hover:scale-105 cursor-pointer"
            onClick={() => setSignIn(false)}
          >
            Continue as guest
          </h2>
          <div className="inline-flex justify-center items-center w-full">
            <hr className="my-8 w-64 h-px bg-gray-400 border-0 " />
            <span className="absolute left-1/2 px-3 font-medium text-gray-900 bg-black -translate-x-1/2 dark:text-white ">
              or
            </span>
          </div>
          <button
            className="w-full max-w-[40ch] hover:text-black border border-white border-solid py-2 duration-300 relative after:absolute after:top-0 after:right-full after:w-full after:h-full after:bg-white after:z-10 overflow-hidden hover:after:translate-x-full after:duration-300"
            onClick={googleLogin}
          >
            <h2 className="z-20 relative flex items-center justify-center gap-5">
              <FcGoogle className="text-xl" /> Continue with Google
            </h2>
          </button>
          <h1> welcome guest </h1>
        </div>
      ): alert('already Signed in')}
    </>
  );
};

export default Login;
