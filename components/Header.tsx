import Image from "next/image";
import React from "react";
import { AiFillApple } from "react-icons/ai";

const Header = () => {
  return (
    <header>
      <AiFillApple className="cursor-pointer text-3xl opacity-75 hover:opacity-100 ease-in-out duration-150" />
    </header>
  );
};

export default Header;
