import { useDispatch, useSelector } from "react-redux";
import { fetchAsync } from "./productSlice";
// import "../product/Counter.css";
import Filters from "./Filters";
import Header from "./Header";
import { useEffect } from "react";
import { addAsync } from "../cart/cartSlice";
import Cart from "../cart/Cart";
import { useNavigate } from "react-router-dom";
// import { Cart } from "../cart/Cart";

export function Product() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.products);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchAsync());
    const username = sessionStorage.getItem("username");
    if (username === "" || username == null) {
      navigate("/login");
    }
  }, []);
  // console.log(product);
  return (
    <div>
      <Header />
      {/* <div classNameName={styles.row}> */}
      {/* <button
        aria-label="Decrement value"
        onClick={() => dispatch(fetchAsync())}
      >
        Fetch Product
      </button> */}
      {/* <Cart /> */}
      <div className="containerN">
        <div className="filters">
          <Filters />
        </div>
        <div className="product-container">
          {product.map((item) => (
            <div className="card" key={item.id}>
              <div className="card-image">
                <img
                  src={item.thumbnail}
                  alt="Denim Jeans"
                  style={{ width: "100%" }}
                />
                <h1>{item.brand}</h1>
                <p className="price">${item.price}</p>
                <p>{item.description}</p>
                <p>
                  <button onClick={() => dispatch(addAsync(item))}>
                    Add to Cart
                  </button>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
