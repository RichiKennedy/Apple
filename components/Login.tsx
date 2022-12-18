import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "../firebase/clientApp";
import { UserType } from "../types/UserType";

interface LoginProps {
  user?: UserType | string;
}

const Login = ({ user }: LoginProps) => {
  const googleAuth = new GoogleAuthProvider();
  const login = async () => {
    const result = await signInWithPopup(auth, googleAuth);
  };
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <>
      {!user ? (
        <div className="flex items-center justify-center flex-col gap-11 bg-black w-full h-[100vh] text-white">
          <h1 className=" text-4xl">apple re-design</h1>
          <button
            className="bg-gray-400 p-3 border-slate-900 w-[100px] hover:scale-105"
            onClick={login}
          >
            {" "}
            SIGN IN{" "}
          </button>
          <h1> welcome guest </h1>
        </div>
      ) : null}
    </>
  );
};

export default Login;
