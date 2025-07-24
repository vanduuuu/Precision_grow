import React from "react";
import { BlogProvider } from "../Components/Blog/BlogProvider";
import { MagazineProvider } from "../Components/Home/Publications/MagazineContext";
import { CartProvider } from "../Components/Product/BuyProduct/CartContext.js"; // <-- adjust path if needed

const GlobalProvider = ({ children }) => {
  return (
    <BlogProvider>
      <MagazineProvider>
        <CartProvider>
          {children}
        </CartProvider>
      </MagazineProvider>
    </BlogProvider>
  );
};

export default GlobalProvider;
