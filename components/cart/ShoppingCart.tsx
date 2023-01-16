import React from 'react'
import { AiFillApple } from 'react-icons/ai'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import CloseButton from '../buttons/CloseButton'
import CartItem from './CartItem'


interface ShoppingCartProps {
  cartIsOpen: boolean
}

const ShoppingCart = ({cartIsOpen}: ShoppingCartProps) => {
  const {openCart, closeCart, cartItems} = useShoppingCart()
  return (
    <div >
    { cartIsOpen && (
      <div className='fixed top-0 right-0 z-50  flex w-screen h-screen overflow-scroll  flex-col bg-white'>
        <header className='flex items-center justify-between shadow-md p-4'>
        <AiFillApple onClick={() => closeCart() } className="w-8 h-8 cursor-pointer" />
        <CloseButton onClick={() => closeCart()}/>
        </header>
        <div className='w-full flex justify-center p-5 font-semibold text-xl md:text-2xl'>Review Your bag</div>
        <section>
          <div className='flex flex-col gap-3 overflow-scroll'>
{cartItems.map(item => (
  <CartItem key={item.id} {...item} />
  // <div key={item.id}>cart item </div>
))}
          </div>
        </section>
      </div>
    )
     }
    </div>
  )
}

export default ShoppingCart