import React, { useContext } from "react";
import { MdOutlineClose } from "react-icons/md";
import AuthContext from "../context/AuthContext";

interface ModalProps {
    setModalOpen: (arg: boolean) => void
}

const SignOutModal = ({setModalOpen}:ModalProps) => {
    const {logOut} = useContext(AuthContext)
  return (
    <div className="fixed w-screen h-screen top-0 left-0 bg-white flex flex-col z-50">
      <section className="flex items-center justify-between border-b border-solid border-slate-900 p-4">
        <h2 className="font-extrabold text-2xl sm:text-5xl select-none">MENU</h2>
    <MdOutlineClose onClick={() => setModalOpen(false)} className="duration-300 hover:rotate-90 cursor-pointer text-lg sm:text-3xl"/>
      </section>
      <section className="flex flex-col p-4 gap-3">
        <button onClick={() => {
            logOut()
            setModalOpen(false)
        }} className="select-none duration-300 hover:pl-2 cursor-pointer">Sign Out</button>
        {/* {user ? (
          <button
            className="bg-gray-400 p-1 border-slate-900 w-[100px] text-sm hover:scale-105"
            onClick={() => auth.signOut()}
          >
            {" "}
            SIGN OUT{" "}
          </button>
        ) : null} */}
      </section>
    </div>
  );
};

export default SignOutModal;
