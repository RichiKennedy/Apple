import type { NextPage } from "next";
import Image from "next/image";
import { auth } from "../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  signInWithPopup,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import { useEffect } from "react";

const Home: NextPage = () => {
  const [user, setUser] = useAuthState(auth);
  const googleAuth = new GoogleAuthProvider();
  const login = async () => {
    const result = await signInWithPopup(auth, googleAuth);
  };
  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="flex items-center justify-center flex-col gap-11 bg-black w-full h-[100vh] text-white">
      <h1 className=" text-4xl">apple re-design</h1>
      <button
        className="bg-gray-400 p-3 border-slate-900 w-[100px] hover:scale-105"
        onClick={login}
      >
        {" "}
        SIGN IN{" "}
      </button>
      <button
        className="bg-gray-400 p-3 border-slate-900 w-[100px] hover:scale-105"
        onClick={() => auth.signOut()}
      >
        {" "}
        SIGN OUT{" "}
      </button>
      {user ? <h1> welcome {user.displayName} </h1> : <h1> welcome guest </h1>}
    </div>
  );
};

export default Home;
