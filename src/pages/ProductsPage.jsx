import { useState } from "react";
import { ImSearch } from "react-icons/im";
import Card from "../components/card/Card";
import Loader from "../components/loader/Loader";
import { useProducts } from "../context/ProductContext";

import styles from "./ProductsPage.module.css";

function ProductsPage() {
  const products = useProducts();
  const [search, setSearch] = useState("");

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        />
        <button>
          <ImSearch />
        </button>
      </div>
      <div className={styles.container}>
        <div className={styles.products}>
          {!products.length && <Loader />}
          {products.map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </div>
        <div>sidebar</div>
      </div>
    </>
  );
}

export default ProductsPage;
