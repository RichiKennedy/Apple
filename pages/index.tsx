import type { NextPage } from "next";
import { auth } from "../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import Header from "../components/Header";
import Login from "../components/Login";

const Home: NextPage = () => {
  const [user, setUser] = useAuthState(auth);
  return (
    <section>
      <Header />
      {user ? <h1> Welcome {user.displayName}</h1> : <h1>Welcome Guest</h1>}
      <Login user={user} />
      <button
        className="bg-gray-400 p-3 border-slate-900 w-[100px] hover:scale-105"
        onClick={() => auth.signOut()}
      >
        {" "}
        SIGN OUT{" "}
      </button>
    </section>
  );
};

export default Home;
