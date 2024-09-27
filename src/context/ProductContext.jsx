import { createContext, useEffect } from "react";
import api from "../services/config";

const ProductContext = createContext();
function ProductsProvider({ children }) {
  const [products, setProducts] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setProducts(await api.get("/products"));
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductsProvider;
