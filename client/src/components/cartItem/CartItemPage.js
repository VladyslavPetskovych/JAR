import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useShoppingCart } from "../../context/shoppingCartContext";
import { Button } from "react-bootstrap";
import "./CartItemPage.css"

export default function CartItemPage({ id, quantity }) {
  const { removeFromCart } = useShoppingCart();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    const res = await Axios.get("http://localhost:3001/api/get");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const item = posts.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <div className="CartItem d-flex flex-row m-3">
        <div className=" d-flex flex-row ">
        <img
        key={item.id}
        className="itemImg "
        style={{ width: "205px", height: "205px", objectFit: "cover" }}
        src={"http://localhost:8080/" + item.name}
      />
      <div className="mt-3 ">
        <p className=" fw-bold">
          {item.itemname}
          {quantity > 1 && (
            <span
              className=" text-muted"
              style={{ fontSize: ".7rem" }}
            >{` x${quantity}`}</span>
          )}
        </p>
        <p className="text-muted ">Ціна: {item.itemprice}грн</p>
      </div>

      <div className=" d-flex m-2 mt-3">{`${item.itemprice * quantity}грн`}</div>
      <div className=" d-flex align-items-center">
      <Button
        className="h-100"
        style={{borderRadius: "0 30px 30px 0"}}
        variant="outline-danger"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
      </div>
 
        </div>
    </div>
  );
}

