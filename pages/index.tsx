import type { NextPage } from "next";
import { auth } from "../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import Header from "../components/Header";
import Login from "../components/Login";

const Home: NextPage = () => {
  const [user, setUser] = useAuthState(auth);
  return (
    <section>
      <Header user={user} />
      <Login user={user} />
    </section>
  );
};

export default Home;
