import '../styles/ReceiptModel.css'
import React from 'react';

function ReceiptModel({ data }) {
    return (
      <div className="ReceiptModel">
        <p data-title="ID du client">{data.clientReference}</p>
        <p data-title="Date d'émission">{data.emissionDate}</p>
        <p data-title="Payé">{data.isPaid ? "Oui" : "Non"}</p>
        <p data-title="Date de paiement">{data.paymentDate}</p>
        <p data-title="Prix">{data.price}</p>
        <p data-title="Produits">{data.products.join(", ")}</p>
      </div>
    );
  }

export default ReceiptModel;
  