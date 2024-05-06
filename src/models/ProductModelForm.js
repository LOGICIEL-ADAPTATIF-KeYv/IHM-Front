import React, { useState} from 'react';
import { apiPost } from '../services/apiPost';

function ProductModelForm({ data, onSubmitSuccess }) {
    const [formData, setFormData] = useState(data || {});

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const createdModel = await apiPost('product', formData); 
            console.log('Produit créé avec succès:', createdModel);
            onSubmitSuccess();
        } catch (error) {
            console.error('Erreur lors de la création du modèle:', error);
        }
    };

    return (
        <div className="ProductModelForm">
            <form onSubmit={handleSubmit}>
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
                    <input type="text" id="invoices" defaultValue={(data?.invoices && data.invoices.join(", ")) || ''} onChange={handleChange}/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ProductModelForm;
