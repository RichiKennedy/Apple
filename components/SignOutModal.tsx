import React, { useContext } from "react";
import { MdOutlineClose } from "react-icons/md";
import AuthContext from "../context/AuthContext";
import { UserType } from "../types/UserType";
import CloseButton from "./buttons/CloseButton";

interface ModalProps {
  setModalOpen: (arg: boolean) => void;
  user?: UserType;
  setSignIn: (arg: boolean) => void;
}

const SignOutModal = ({ setModalOpen, user, setSignIn }: ModalProps) => {
  const { logOut, logIn } = useContext(AuthContext);
  return (

    <div className="fixed top-0 left-0 z-50 flex h-screen w-screen flex-col bg-white">
      <section className="flex items-center justify-between border-b border-solid border-slate-900 p-4">
        <h2 className="select-none text-2xl font-extrabold sm:text-5xl">
          MENU
        </h2>
        <CloseButton onClick={() => setModalOpen(false)}/>
      </section>
      <section className="flex flex-col gap-3 p-4">
        {user ? (
          <button
            onClick={() => {
              logOut();
              setModalOpen(false);
            }}
            className="cursor-pointer select-none duration-300 hover:pl-2"
          >
            Sign Out
          </button>
        ) : (
          <button
            onClick={() => {
              setModalOpen(false);
              setSignIn(true)
            }}
            className="cursor-pointer select-none duration-300 hover:pl-2"
          >
            Sign In
          </button>
        )}
      </section>
    </div>
  );
};

export default SignOutModal;
