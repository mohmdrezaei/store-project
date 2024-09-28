import { useEffect, useState } from "react";
import { ImSearch } from "react-icons/im";
import Card from "../components/card/Card";
import Loader from "../components/loader/Loader";
import { useProducts } from "../context/ProductContext";

import styles from "./ProductsPage.module.css";
import { FaListUl } from "react-icons/fa";

function ProductsPage() {
  const products = useProducts();

  const [displayed , setDisplayed] = useState([])
  const [search, setSearch] = useState("");

  useEffect(()=>{
    setDisplayed(products)
  },[products])

  const categoryHandler = (e)=>{
    const {tagName} = e.target
    const category = e.target.innerText.toLowerCase()
    if(tagName !== "LI") return;
    console.log(category)

  }
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
          {!displayed.length && <Loader />}
          {displayed.map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </div>
        <div>
          <div>
            <FaListUl />
            <p>Categories</p>
          </div>
        <ul onClick={categoryHandler}>
          <li>All</li>
          <li>Electronics</li>
          <li>Jewelery</li>
          <li>Men's Clothing</li>
          <li>Women's Clothing</li>
        </ul>
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
