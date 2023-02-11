import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useShoppingCart } from "../../context/shoppingCartContext";
import { Stack } from "react-bootstrap";

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
    console.log("fecth called");
  };

  useEffect(() => {
    console.log("useEffect called");
    fetchPosts();
  }, []);

  const item = posts.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack>
      <img
        key={item.id}
        className="itemImg"
        src={"http://localhost:8080/" + item.name}
      />
    </Stack>
  );
}
