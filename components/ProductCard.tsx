import Image from "next/image";
import React, { useContext } from "react";
import { ShoppingCartProvider, useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utils/formatCurrency";
import AddToCart from "./buttons/AddToCart";

interface ProductCardProps {
    name: string
    url: string
    info: string
    price: number
    id: number
}

const ProductCard = ({ name, url, info, price, id }: ProductCardProps) => {
  const {increaseCartQuantity, decreaseCartQuantity, getItemQuantity, removeFromCart} = useShoppingCart()

  const quantity = getItemQuantity(id)

  return (
    <div className=" h-100 mb-20 flex flex-col items-center justify-between">
      <div className="relative h-[300px] w-[200px] ">
        <Image
          src={url}
          alt={name}
          fill
          sizes="100vw"
          className=" absolute object-contain"
        />
      </div>
      <div className="flex w-full flex-col items-center justify-evenly gap-5">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="flex w-1/2 flex-col items-center justify-center text-center">
          {info}
        </p>
        <h2 className="">{formatCurrency(price)}</h2>
        <div className="mt-auto">
          {quantity === 0 ? (
            <AddToCart onClick={() => increaseCartQuantity(id)} title="Add To Cart" />

        
          ) :  <div className="flex items-center flex-col gap-5"> 
          <div className="flex items-center justify-center gap-5">
            <AddToCart onClick={() => decreaseCartQuantity(id)} title="-" />
            <span className="font-light">{quantity}</span>
            <AddToCart onClick={() => increaseCartQuantity(id)} title="+" />
          </div>
          <AddToCart onClick={() => removeFromCart(id)} title="Remove" />
          </div>}
        </div>
      </div>
      <hr className="my-8 h-px w-64 border-0 bg-gray-400" />
    </div>
  );
};

export default ProductCard;
