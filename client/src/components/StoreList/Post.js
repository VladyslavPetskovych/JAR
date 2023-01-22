import React from "react";
import { Button } from "react-bootstrap";
import { isTemplateMiddle } from "typescript";
import { useShoppingCart } from "../../context/shoppingCartContext";
import "./Post.css";

export default function Post({ posts, loading }) {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  if (loading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  let Show1render = posts.map((item) => {
    const quantity = getItemQuantity(item.id);
    return (
      <div className="d-flex flex-column itemcart" key= {item.name}>
        <img
          className="itemImg"
          src={
            "http://localhost:8080/" + item.name 
            
          }
        />
        <div className="d-flex flex-row m-3 p-1 justify-content-between align-items-baseline">
          <p className="m-1 fs-5 ">{item.itemname}</p>
          <p className=" fs-5 text-muted">{item.itemprice}</p>
        </div>
        <p className=" m-2">{item.itemdesc}</p>
        <div>
          {quantity === 0 ? (
            <Button
              className="w-100"
              onClick={() => { increaseCartQuantity(item.id)}}
            >
              + Додати товар
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column"
              style={{ gap: ".5rem", marginBottom: -41 }}
            >
              <div
                className="d-flex align-items-center justify-content-center flex-row "
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => decreaseCartQuantity(item.id)}>
                  -
                </Button>
                <div className="d-flex align-items-center justify-content-center flex-column">
                  <span className="fs-5">{quantity}</span>
                  <p></p>
                </div>
                <Button
                  onClick={() => removeFromCart(item.id)}
                  variant="danger"
                  
                >Видалити</Button>
                <Button onClick={() => increaseCartQuantity(item.id)}>
                  +
                </Button>
              </div>
              buy
            </div>
          )}
        </div>
      </div>
    );
  });
  return Show1render;
}
