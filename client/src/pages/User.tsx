import React from "react";
import {  Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCartContext";
import CartItem from "../components/cartItem/CartItem";

type shoppingCartProps = {
  isOpen: boolean
}

export default function User({isOpen}: shoppingCartProps) {
  const {closeCart, cartItems} = useShoppingCart();
  return (
    <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map(item => (
             <CartItem key={item.id} {...item}/>
             ))}
          
        </Stack>

      </Offcanvas.Body>
    </Offcanvas>
  );
}
