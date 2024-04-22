// Navbar.js
import React from 'react';
import '../styles/Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          Clients
        </li>
        <li className="nav-item">
          Factures
        </li>
        <li className="nav-item">
          Produits
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
