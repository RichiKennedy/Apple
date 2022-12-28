import Image from "next/image";
import React, { useState } from "react";
import { AiFillApple, AiOutlineUser, AiOutlineSearch, AiOutlineShopping } from "react-icons/ai";
import { FaUserAlt} from "react-icons/fa";
import { auth } from "../firebase/clientApp";
import { UserType } from "../types/UserType";
import { TbMenu } from "react-icons/tb"
import Link from "next/link";

interface HeaderProps {
  user?: UserType;
  modalOpen: boolean
  setModalOpen: (arg: boolean) => void
}

const Header = ({ user, modalOpen, setModalOpen }: HeaderProps) => {
  return (
    <header className="fixed h-[45px] top-0 z-20 flex w-full items-center justify-between bg-[#1D1D1F] text-white">
      <div className="flex items-center justify-center w-1/5 md:hidden ">
      <TbMenu className="headerIcon" />
      </div>
      <div className="flex items-center justify-center md:w-1/5 ">
        <AiFillApple className="headerIcon" />
    </div>
    <ul className="hidden md:flex flex-1 items-center justify-center space-x-8 text-sm">
      <a className="headerLink">Mac</a>
      <a className="headerLink">iPad</a>
      <a className="headerLink">iPhone</a>
      <a className="headerLink">Watch</a>
      <a className="headerLink">AirPods</a>
    </ul>
    <div className="flex items-center justify-center gap-x-4 mr-5 md:mr-0 md:w-1/5">
      <AiOutlineSearch className="headerIcon hidden md:block" />
      <Link href="/checkout">
      <div className="relative rounded-full cursor-pointer">
        <span className="absolute text-[10px] rounded-full -right-1 -bottom-1 z-50 h-4 w-4 flex items-center justify-center bg-gradient-to-r from-pink-500 to-violet-500">5</span>
      <AiOutlineShopping className="headerIcon"/>
      </div>
      </Link>
        {!user ?  <FaUserAlt className="headerIcon" /> : 
         <img onClick={() => setModalOpen(true)} src={user.photoURL} alt={user.displayName} className="cursor-pointer rounded-full w-6 h-6" />
        }
        </div>
    </header>
  );
};

export default Header;
