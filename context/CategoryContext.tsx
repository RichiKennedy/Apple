import {
  collection,
  doc,
  DocumentData,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { createContext, ReactNode, useEffect, useState } from "react";
import { db } from "../firebase/clientApp";
import { ProductType } from "../types/CategoryTypes";

export type CategoryProps = {
  children: ReactNode;
};

export type CategoryShape = {
  categories: Array<DocumentData | undefined>;
  setCategories: (arg: Array<DocumentData | undefined>) => void;
  products: Array<DocumentData | undefined>;
  setProducts: (arg: Array<DocumentData | undefined>) => void;
};

const CategoryContext = createContext<CategoryShape>({} as CategoryShape);

export const MyCategoryContextProvider = ({ children }: CategoryProps) => {
  const [categories, setCategories] = useState<Array<DocumentData | undefined>>([]);
  const [products, setProducts] = useState<Array<DocumentData | undefined>>([]);

  useEffect(() => {
    (async () => {
      const colRef = collection(db, "categories");

      const snapshots = await getDocs(colRef);

      const docs = snapshots.docs.map((doc) => {
        const data = doc.data();
        data.id = doc.id;
        return data;
      });
      setCategories(docs);
    })();
  }, []);


  // useEffect(() => {
  //   (async () => {
  //     const colRef = collection(db, "products");

  //     const snapshots = await getDocs(colRef);

  //     const docs = snapshots.docs.map((doc) => {
  //       const data = doc.data();
  //       data.id = doc.id;
  //       return data;
  //     });
  //     setProducts(docs);
  //   })();
  // }, []);


  
  const value = {
    categories,
    setCategories,
    products,
    setProducts
  };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};

export default CategoryContext;
