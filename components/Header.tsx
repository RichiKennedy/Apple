import React, { useContext } from "react";
import {
  AiFillApple,
  AiOutlineSearch,
  AiOutlineShopping,
} from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { UserType } from "../types/UserType";
import { TbMenu } from "react-icons/tb";
import Link from "next/link";
import CategoryContext from "../context/CategoryContext";
import { useShoppingCart } from "../context/ShoppingCartContext";
interface HeaderProps {
  user?: UserType;
  modalOpen: boolean;
  setModalOpen: (arg: boolean) => void;
  
}
const Header = ({ user, setModalOpen }: HeaderProps) => {
  const {openCart, cartQuantity } = useShoppingCart()
  const { categories } = useContext(CategoryContext)

  return (
    <header className="fixed top-0 z-20 flex h-[45px] w-full items-center justify-between bg-black/80 text-white">
      <div className="flex w-1/5 items-center justify-center md:hidden ">
        <TbMenu className="headerIcon" />
      </div>
      <div className="flex items-center justify-center md:w-1/5 ">
        <Link href={"/"}>
        <AiFillApple className="headerIcon" />
        </Link>
      </div>
      <ul className="hidden flex-1 items-center justify-center space-x-8 text-sm md:flex">
        {categories.map((category: any) => {
         return <li className="headerLink" key={category.id}>
            <Link href={`/products/${category.id}`} >
              {category.title}
            </Link>
          </li>
})}
      </ul>
      <div className="mr-5 flex items-center justify-center gap-x-4 md:mr-0 md:w-1/5">
          {cartQuantity > 0 && (
          <div onClick={() => openCart()} className="relative cursor-pointer rounded-full">
            <span className="absolute -right-1 -bottom-1 z-50 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 text-[10px]">
              {cartQuantity}
            </span>
            <AiOutlineShopping className="headerIcon" />
          </div>
          )}
        {!user ? (
          <FaUserAlt
            onClick={() => setModalOpen(true)}
            className="headerIcon"
          />
        ) : (
          <img
            onClick={() => setModalOpen(true)}
            src={user.photoURL}
            alt={user.displayName}
            className="h-6 w-6 cursor-pointer rounded-full"
          />
        )}
      </div>
    </header>
  );
};

export default Header;

    // // make sure db is initialized
    // export async function getStaticProps() {
    //   const propsDB = !!getApps().length
    //   ? db
    //   : getFirestore(initializeApp(firebaseConfig))

    //   const response = getDocs(query(collection(propsDB, 'categories')))
    //   return {
    //     props: {
    //       data: (await response).docs.map((doc) => ({
    //         ...doc.data(),
    //         id: doc.id
    //       }))
    //     }
    //   }
    // }
