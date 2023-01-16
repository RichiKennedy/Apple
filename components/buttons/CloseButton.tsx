import React from 'react'
import { MdOutlineClose } from "react-icons/md";

interface CloseButtonProps {
    onClick: () => void
}

const CloseButton = ({onClick}: CloseButtonProps) => {
  return (
    <>
    <MdOutlineClose
    onClick={onClick}
    className="cursor-pointer text-lg duration-300 hover:rotate-90 sm:text-3xl"
  />
    </>
)}

export default CloseButton