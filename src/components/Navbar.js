// Navbar.js
import React from 'react';
import '../styles/Navbar.css'; 
import { fetchData } from '../services/apiGet';

function Navbar({ onDataReceived }) {
  const handleItemClick = async (model) => {
    try {
      const response = await fetchData(model); 
      onDataReceived(response, model); 
    } catch (error) {
      console.error('Erreur lors de la récupération des données pour le modèle', model, ':', error);
    }
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
      <li className="nav-item" onClick={() => handleItemClick('client')}>
          Clients
        </li>
        <li className="nav-item" onClick={() => handleItemClick('receipt')}>
          Factures
        </li>
        <li className="nav-item" onClick={() => handleItemClick('product')}>
          Produits
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
