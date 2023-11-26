import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, SetProducts] = useState(null);
  const [selectedCategory, setSelecetedCategory] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://fakestoreapi.com/products${
          selectedCategory ? '/category/' + selectedCategory : ''
        }`
      )
      .then((res) => SetProducts(res.data));
  }, [selectedCategory]);

  return (
    <ProductContext.Provider value={{ products, setSelecetedCategory }}>
      {children}
    </ProductContext.Provider>
  );
}
