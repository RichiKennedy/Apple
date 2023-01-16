import {
  doc,
  getDoc,
} from "firebase/firestore";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Header from "../../components/Header";
import ProductCard from "../../components/ProductCard";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { db } from "../../firebase/clientApp";
import { ProductType } from "../../types/CategoryTypes";



const ProductPage = () => {
  const { productData, setProductData} = useShoppingCart()
  const {
    query: { productID },
  } = useRouter();

  useEffect(() => {
  const getCategories = async () => {
    if (!productID) return false;
    const docRef = doc(db, "categories", productID as string);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      
      setProductData(data);
    } else {
      console.log("No data");
    }
  };
  
    getCategories();
  }, [productID]);

  return (
    <>
      <Header />
    <div className="w-screen">
      <section className="w-full h-full flex items-center justify-center flex-col translate-y-[45px]">
      <h1 className="p-20 text-xl sm:text-2xl md:text-3xl font-bold"> Which {productData?.title} is right for you?</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5  w-[70%] top-10 ">
        {productData?.items?.map((item: ProductType) => (
        <div key={item.id}>
          <ProductCard {...item} />
        </div>
        )
        )}
      </div>

      </section>
    </div>
    </>
  );
};

export default ProductPage;
