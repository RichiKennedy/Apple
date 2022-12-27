import type { NextPage } from "next";
import { auth } from "../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import Header from "../components/Header";
import Login from "../components/Login";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import UserDashBoard from "../components/UserDashBoard";

const Home: NextPage = () => {
  const {currentUser} = useContext(AuthContext)
  const [user, setUser] = useAuthState(auth);
  return (
    <section>
      <Header user={user} />
      {!currentUser && <Login/>}
      {currentUser && <UserDashBoard />}
    </section>
  );
};

export default Home;
