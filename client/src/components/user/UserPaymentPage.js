import { React, useState, useEffect } from "react";
import { useShoppingCart } from "../../context/shoppingCartContext";
import { Button } from "react-bootstrap";
import Axios from "axios";
import "./UserPaymentPage.css";
import CartItemPage from "../cartItem/CartItemPage";

const UserPayment = () => {
  const [posts, setPosts] = useState([]);
  const { cartItems } = useShoppingCart();

  const fetchPosts = async () => {
    //  http://localhost:3001/api/get
    const res = await Axios.get("http://localhost:3001/api/get");
    setPosts(res.data);
  };
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="User__wraper">
      <div className="User__items d-flex flex-row">
        {cartItems.map((item) => (
          <CartItemPage key={item.id} {...item} />
        ))}
      </div>
      <div className="fw-bold fs-5">
        <div className=" fw-bold fs-5">
          Загалом до сплати:{" "}
          {cartItems.reduce((total, cartItem) => {
            const item = posts.find((i) => i.id === cartItem.id);
            return total + (item?.itemprice || 0) * cartItem.quantity;
          }, 0)}
        </div>
      </div>
      <Button  variant="success">Замовити</Button>
    </div>
  );
};

export default UserPayment;
