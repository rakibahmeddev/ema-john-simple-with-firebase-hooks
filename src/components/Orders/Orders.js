import React from "react";
import "./Orders.css";
import useProducts from "../../Hook/useProducts";
import useCart from "../../Hook/useCart";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import { Link, useNavigate } from "react-router-dom";

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);

  const handleRemoveProduct = (product) => {
    const rest = cart.filter((pd) => pd.id !== product.id);
    setCart(rest);
  };

  return (
    <div className="shop-container">
      <div className="review-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleRemoveProduct={handleRemoveProduct}
          ></ReviewItem>
        ))}
      </div>

      <div className="cart-container">
        <Cart cart={cart}>
          <Link to="/inventory" className="proceed-checkout-button">
            Proceed to Checkout
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
