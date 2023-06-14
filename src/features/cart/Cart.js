import { useDispatch, useSelector } from "react-redux";
// import Header from "./Header";
import { useEffect } from "react";
import { deleteAsync, fetchAsync, updateAsync } from "./cartSlice";
import Header from "../product/Header";
import "./cart.css";
import "./cartp.css";

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const handleChange = (e, id) => {
    dispatch(updateAsync({ id, change: { quantity: +e.target.value } }));
  };
  return (
    <div>
      <Header />
      <div className="containerr">
        <div className="">{/* <Filters /> */}</div>
        <div className="product-containerr">
          {items.map((itm) => (
            <div className="cart-itemm" key={itm.id}>
              <img
                className="cartItemImage"
                src={itm.thumbnail}
                alt={itm.title}
              />
              <div className="cardItemDetail">
                <p className="spn">{itm.title}</p>
                <span className="spn">{itm.brand}</span>
                <strong className="price">${itm.price}</strong>
              </div>
              <div className="drop">
                quantity
                <select
                  value={itm.quantity}
                  onChange={(e) => handleChange(e, itm.id)}
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                </select>
              </div>
              <div className="close">
                <button onClick={() => dispatch(deleteAsync(itm.id))}>X</button>
              </div>
            </div>
          ))}
          <h2>
            Total :
            {items.reduce((acc, item) => item.price * item.quantity + acc, 0)}
          </h2>
        </div>
      </div>
    </div>
  );
}
