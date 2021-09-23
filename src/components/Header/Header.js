import { useState } from 'react';
import './Header.css';
import Nav from "../Nav/Nav";

function Header() {

  return (
    <div className="header">
      <h1>Posdar</h1>
      <Nav></Nav>
    </div>
  );
}

export default Header;