import React from "react";
import Style from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={Style.footer}>
      <h2>Redux Shopping Cart</h2>
      <p>
        &copy; <span>{year}</span> - All Rights Copyright Reserved To{" "}
       <span>vipul kumawat 2001</span>
      </p>
    </footer>
  );
}
