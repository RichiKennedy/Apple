import { collection, doc, DocumentData, getDoc, getDocs, query, QueryDocumentSnapshot, where } from "firebase/firestore";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import CategoryContext from "../../context/CategoryContext";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { db } from "../../firebase/clientApp";
import { ProductsType, ProductType } from "../../types/CategoryTypes";
import { formatCurrency } from "../../utils/formatCurrency";

interface CartItemProps {
  quantity: number;
  id: number;
}

const CartItem = ({ quantity, id }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart()
  const [products, setProducts] = useState<Array<ProductType>>([])
  const [product, setProduct] = useState<ProductType>({} as ProductType)

  // const { products } = useContext(CategoryContext);
  useEffect(() => {
const getProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "test-products"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    const data: any = doc.data()
    if (doc.id === id.toString()) {
      setProduct(data)
    } else {
      console.log('know id found')
    }





  });
  

  // setProducts(data.items)
  
  
};
console.log(product)

getProducts();

}, []);


  return (
    <section className="p-5 ">
      <div className="relative h-44 w-44 ">
        <Image
          src={product.url}
          alt={product.name}
          fill
          sizes="100vw"
          className=" absolute object-contain"
        />
      </div>
      <div className="flex flex-1 items-end lg:items-center">
<div className="flex-1 space-x-4">
  <div className="flex flex-col gap-x-8 text-xl lg:flex-row lg:text-2xl">
    <h4 className="font-semibold lg:w-96">{product.name}</h4>
    <p className="flex items-end font-medium"> {product.info} </p>
  </div>
  <div className="flex flex-col items-end space-y-4">
<h4>
{formatCurrency(product.price)}
</h4>
<button onClick={() => removeFromCart(id)}>
  remove item
</button>
  </div>
</div>
      </div>
    </section>
  );
};

export default CartItem;
