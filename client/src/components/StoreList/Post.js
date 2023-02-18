import { React, useState } from "react";
import { Button } from "react-bootstrap";
import UserOrder from "../user/UserOrderOffCanvas";
import { useShoppingCart } from "../../context/shoppingCartContext";
import "./Post.css";

export default function Post({ posts, loading }) {
  const [isOpen, setIsOpen] = useState(false);

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
    openCart,
  } = useShoppingCart();

  function order__buttonClick() {
    openCart();
  }
  if(loading === true) {
    return (<div>
      <p>Loading......</p>
    </div>)
  }
  let Show1render = posts.map((item) => {
    const quantity = getItemQuantity(item.id);
    return (
      <div className="d-flex flex-column itemcart" key={item.id}>
        <img
          key={item.id}
          className="itemImg"
          src={"http://localhost:8080/" + item.name}
        />
        <div className="d-flex flex-row  justify-content-between align-items-baseline">
          <p className=" fs-5 ">{item.itemname}</p>
          <p className=" fs-5 text-muted">{item.itemprice}</p>
        </div>
        <p className=" m-2">{item.itemdesc}</p>
        <div>
          {quantity === 0 ? (
            <Button
              className="w-100"
              onClick={() => {
                increaseCartQuantity(item.id);
              }}
              key={item.id}
            >
              + Додати товар
            </Button>
          ) : (
            <div
              className="d-flex align-items-center flex-column itemCol"
              style={{ gap: "16px", marginBottom: -48 }}
            >
              <div
                className="d-flex align-items-center justify-content-center flex-row "
                style={{ gap: ".5rem" }}
              >
                <Button onClick={() => decreaseCartQuantity(item.id)}>-</Button>
                <div className="d-flex align-items-center justify-content-center flex-column">
                  <span className="fs-5">{quantity}</span>
                  <p></p>
                </div>
                <Button
                  onClick={() => removeFromCart(item.id)}
                  variant="outline-danger"
                >
                  Видалити
                </Button>
                <Button onClick={() => increaseCartQuantity(item.id)}>+</Button>
              </div>
              <Button
                variant="success"
                className="order__button btn-green"
                onClick={order__buttonClick}
                style={{ marginTop: "-14px", marginLeft: "17px" }}
              >
                замовити
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  });
  return Show1render;
}
