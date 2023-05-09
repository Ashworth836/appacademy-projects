import { useEffect, useState } from "react";
import Cart from "./components/Cart";
import ProduceList from "./components/ProduceList";
import { useDispatch, useSelector } from "react-redux";
import { populateProduce } from "./store/produce";
import { shownCart } from "./store/cart";

function App() {
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(populateProduce());
  }, [dispatch]);

  useEffect(() => {
    dispatch(shownCart(true));
  }, [dispatch]);

  console.log(cart.shown);
  return (
    <>
      <nav>
        <h1>Grocery Store</h1>
        <button
          className="checkout-button"
          onClick={() => dispatch(shownCart(true))}
        >
          <i className="fas fa-shopping-bag" />
          Checkout
        </button>
      </nav>
      <main style={cart.shown ? { marginRight: "300px" } : {}}>
        <ProduceList />
      </main>
      3
      <div
        className="sidebar"
        style={cart.shown ? { transform: "translateX(-100%)" } : {}}
      >
        <div className="sidebar-header">
          <button
            className="arrow-button"
            onClick={() => dispatch(shownCart(false))}
          >
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
        <Cart />
      </div>
    </>
  );
}

export default App;
