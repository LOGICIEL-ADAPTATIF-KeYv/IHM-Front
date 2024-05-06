import React, { useState} from 'react';
import { apiPost } from '../services/apiPost';
import '../styles/ProductModelForm.css'

function ProductModelForm({ data, onSubmitSuccess, mode, id }) {
    const [formData, setFormData] = useState(data || {});

    const handleChange = (e) => {
        const { id, value } = e.target;
        if (id === 'invoices') {
            const invoicesIds = value.split(',').map(id => id.trim());
            setFormData(prevData => ({
                ...prevData,
                invoices: invoicesIds
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [id]: value
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const createdModel = await apiPost(id, formData, mode); 
            console.log('Produit créé avec succès:', createdModel);
            onSubmitSuccess();
        } catch (error) {
            console.error('Erreur lors de la création du modèle:', error);
        }
    };

    return (
        <div className="ProductModelForm">
            <form onSubmit={handleSubmit}>
                <p>Création d'un nouveau produit</p>
                <div>
                    <label htmlFor="name">Nom du produit</label>
                    <input type="text" id="name" defaultValue={data?.name || ''} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="stock">Stock</label>
                    <input type="text" id="stock" defaultValue={data?.stock || ''} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="photo">Photo</label>
                    <input type="text" id="photo" defaultValue={data?.photo || ''} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="price">Prix</label>
                    <input type="text" id="price" defaultValue={data?.price || ''} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="invoices">Factures</label>
                    <input type="text" id="invoices" value={(Array.isArray(formData.invoices) && formData.invoices.join(', ')) || ''} onChange={handleChange}/>
                </div>
                <button type="submit">Valider</button>
            </form>
        </div>
    );
}

export default ProductModelForm;
