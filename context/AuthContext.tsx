import React, { useState, useEffect, ReactNode, createContext } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth } from "../firebase/clientApp";
import { UserType } from "../types/UserType";


export type AuthShape = {
  currentUser?: UserType 
  signUp: (email: string, password: string) => void;
  logIn: (email: string, password: string) => void;
  logOut: () => void;
  loading: boolean
  loggedIn: boolean
  setLoggedIn: (arg: boolean) => void
};

export type AuthProps = {
  children: ReactNode;
};
const AuthContext = createContext<AuthShape>({} as AuthShape);

export const MyAuthContextProvider = ({ children }: AuthProps) => {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false)

  const signUp = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password);
    return;
  };

  const logIn = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
  };

  const logOut = () => {
    return signOut(auth)
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    logIn,
    setLoggedIn,
    signUp,
    logOut,
    loading,
    loggedIn,
  };

  return <AuthContext.Provider value={value}> {!loading && children} </AuthContext.Provider> 
};
export default AuthContext

