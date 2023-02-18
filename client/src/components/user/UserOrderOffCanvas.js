import React, { useEffect, useState } from "react";
import { Offcanvas, Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "../../context/shoppingCartContext";
import { Link } from "react-router-dom";
import CartItem from "../cartItem/CartItemOffCanvas";
import Axios from "axios";
import "./UserOrderOffCanvas.css";

export default function UserOrder({ isOpen }) {
  const { closeCart, cartItems } = useShoppingCart();

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    //  http://localhost:3001/api/get
    const res = await Axios.get("http://localhost:3001/api/get");
    setPosts(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <Stack gap={3}>
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </Stack>
          <div className="ms-auto fw-bold fs-5">
            <div className=" mt-5 fw-bold fs-5">
              <p>Загалом до сплати: &emsp; {" "} {cartItems.reduce((total, cartItem) => {
                const item = posts.find((i) => i.id === cartItem.id);
                return total + (item?.itemprice || 0) * cartItem.quantity;
              }, 0)} грн</p> 
            </div>
            <div>
            <Link to="/user">
              <Button onClick={closeCart} variant="success">Офрмити замовлення...</Button>
              </Link>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
