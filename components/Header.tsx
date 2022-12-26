import Image from "next/image";
import React from "react";
import { AiFillApple, AiOutlineUser } from "react-icons/ai";
import { FaUserAlt} from "react-icons/fa";
import { auth } from "../firebase/clientApp";
import { UserType } from "../types/UserType";

interface HeaderProps {
  user?: UserType;
}

const Header = ({ user }: HeaderProps) => {
  return (
    <header>
      <div className="flex w-full  items-center justify-between">
        <AiFillApple className="cursor-pointer text-3xl opacity-75 hover:opacity-100 ease-in-out duration-150" />
        {user ? <h1> Welcome {user.displayName}</h1> : <h1>Welcome Guest</h1>}
        {user ? (
          <button
            className="bg-gray-400 p-1 border-slate-900 w-[100px] text-sm hover:scale-105"
            onClick={() => auth.signOut()}
          >
            {" "}
            SIGN OUT{" "}
          </button>
        ) : null}
        <FaUserAlt className="cursor-pointer text-xl m-1 opacity-75 hover:opacity-100 ease-in-out duration-150" />
      </div>
    </header>
  );
};

export default Header;
