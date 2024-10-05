import BasketCard from "../components/basketCard/BasketCard";
import BasketSidbar from "../components/basketCard/BasketSidbar";
import { useCart } from "../context/CartContext";
import { useTitle } from "../hooks/useTitle";

import styles from "./CheckoutPage.module.css"

function CheckoutPage() {
  useTitle("Store | Basket Cart")
  const [state, dispatch] = useCart();
  const clickHandler = (type, payload) => dispatch({ type, payload });
  if (!state.itemsCounter) {
    return (
      <div className={styles.container}>
        <p>Empty</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <BasketSidbar state={state} clickHandler={clickHandler} />
      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <BasketCard
            key={product.id}
            data={product}
            clickHandler={clickHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default CheckoutPage;
