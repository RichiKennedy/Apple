import type { NextPage } from "next";
import { auth } from "../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import Header from "../components/Header";
import Login from "../components/Login";
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import SignOutModal from "../components/SignOutModal";
import LandingPage from "../components/LandingPage";
import { UserType } from "../types/UserType";

const Home: NextPage = () => {
  const {currentUser} = useContext(AuthContext)
  const [user, setUser] = useAuthState(auth);
  const [modalOpen, setModalOpen] = useState(false)
  const [signIn, setSignIn] = useState(false)
 
  return (
    <div>
      <Header user={user} modalOpen={modalOpen} setModalOpen={setModalOpen} />
      {modalOpen && <SignOutModal setModalOpen={setModalOpen} setSignIn={setSignIn}  user={user} />}
      {signIn && <Login setSignIn={setSignIn} signIn={signIn}/>}
      <main className="relative h-[200vh]  ">
        <LandingPage />
      </main>
      <section className="relative z-30 -mt-[100vh] min-h-screen bg-[#1B1B1B]">
        <div className="space-y-10 py-16 text-white">
          <h1 className="text-center text-4xl font-medium tracking-wide md:text-5xl">
          {/* <button onClick={() => fetchCategories()}>click me</button> */}
            New Promos!
          </h1>
        </div>
      </section>
    </div>
  );
};

export default Home;
