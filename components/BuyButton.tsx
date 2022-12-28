import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

interface ButtonProps {
    title: string
    onClick?: () => void;
    width?: string;
    loading?: boolean;
    padding?: string;
    noIcon?: boolean;
}

const BuyButton = ({title, width, padding, onClick, noIcon}: ButtonProps) => {
    const {loading} = useContext(AuthContext)
  return (
    <button
    className={`ease group relative z-30 box-border inline-flex ${
      width ? width : "w-auto"
    } ${padding} cursor-pointer items-center justify-center overflow-hidden rounded bg-indigo-600 bg-gradient-to-r from-pink-500 to-violet-500 px-5 py-1 font-bold text-white transition-all duration-300 focus:outline-none`}
    onClick={onClick}
  >
    <span className="absolute bottom-0 right-0 -mb-8 -mr-5 h-20 w-8 translate-x-1 rotate-45 transform bg-white opacity-10 transition-all duration-300 ease-out group-hover:translate-x-0"></span>
    <span className="absolute top-0 left-0 -mt-1 -ml-12 h-8 w-20 -translate-x-1 -rotate-45 transform bg-white opacity-10 transition-all duration-300 ease-out group-hover:translate-x-0"></span>

    <span className="relative z-20 flex items-center font-semibold">
      {noIcon && (
        <svg
          className="relative mr-2 h-5 w-5 flex-shrink-0 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          ></path>
        </svg>
      )}
      {loading ? "Loading..." : title}
    </span>
  </button>
//     <button> 
//         <a href="#_" className="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
// <span className="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-pink-600 rounded-full blur-md ease"></span>
// <span className="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
// <span className="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-violet-500 rounded-full blur-md"></span>
// <span className="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
// </span>
// <span className="relative text-white">{loading ? "...Loading" : title}</span>
// </a>
//     </button>
  )
}

export default BuyButton