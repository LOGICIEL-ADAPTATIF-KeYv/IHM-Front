import React from 'react';
import '../styles/ClientModel.css'

function ClientModel({ data }) {
    return (
      <div className="ClientModel">
        <p data-title="Nom">{data.name}</p>
        <p data-title="Prénom">{data.firstName}</p>
        <p data-title="Email">{data.email}</p>
        <p data-title="Date de création">{data.creationDate}</p>
      </div>
    );
  }
  
export default ClientModel;
