import type { NextPage } from "next";
import { auth } from "../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import Header from "../components/Header";
import Login from "../components/Login";
import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext";
import UserDashBoard from "../components/UserDashBoard";
import SignOutModal from "../components/SignOutModal";
import LandingPage from "../components/LandingPage";

const Home: NextPage = () => {
  const {currentUser} = useContext(AuthContext)
  const [user, setUser] = useAuthState(auth);
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <div>
      {modalOpen && <SignOutModal setModalOpen={setModalOpen}/>}
      {!currentUser && <Login />}
      {currentUser && <UserDashBoard user={user} modalOpen={modalOpen} setModalOpen={setModalOpen} />}
    </div>
  );
};

export default Home;
