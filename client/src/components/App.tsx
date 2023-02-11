import React from "react";
import "./App.css";
import Header from "./header/Header";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "../pages/Home";
import User from "../pages/User";
import Contact from "../pages/Contact";
import Goods from "../pages/Goods";
import { ShoppingCartProvider } from "../context/shoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <Container fluid className="p-0">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User isOpen={false}/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/goods" element={<Goods />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
