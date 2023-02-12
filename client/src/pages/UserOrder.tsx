import React, { useEffect, useState } from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCartContext";
import CartItem from "../components/cartItem/CartItem";
import User from "./User";
import  Axios  from "axios";

type shoppingCartProps = {
  isOpen: boolean;
};


export default function UserOrder({ isOpen }: shoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
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
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
