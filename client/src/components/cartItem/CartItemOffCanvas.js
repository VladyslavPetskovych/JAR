import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useShoppingCart } from "../../context/shoppingCartContext";
import { Button } from "react-bootstrap";

export default function ({ id, quantity }) {
  const { removeFromCart } = useShoppingCart();
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

  const item = posts.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <div className="d-flex flex-row">
      <img
        key={item.id}
        className="itemImg "
        style={{ width: "125px", height: "95px", objectFit: "cover" }}
        src={"http://localhost:8080/" + item.name}
      />
      <div className="me-auto mt-3">
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

      <div className="me-auto mt-3">{`${item.itemprice * quantity}грн`}</div>
      <Button
        className="h-50 mt-3"
        size="sm"
        variant="outline-danger"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </div>
  );
}

