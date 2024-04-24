import '../styles/ProductModel.css'
import React from 'react';

function ProductModel({ data }) {
    return (
      <div className="ProductModel">
        <p data-title="Nom du produit">{data.name}</p>
        <p data-title="Stock">{data.stock}</p>
        <p data-title="Photo"><img src={data.photo} alt="Photo du produit" /></p>
        <p data-title="Prix">{data.price}</p>
        <p data-title="Factures">{data.invoices.join(", ")}</p>
      </div>
    );
  }
  
export default ProductModel;