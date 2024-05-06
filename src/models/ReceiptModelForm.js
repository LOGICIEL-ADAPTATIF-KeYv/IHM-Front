import React, { useState} from 'react';
import { apiPost } from '../services/apiPost';

function ReceiptModelForm({ data, onSubmitSuccess, mode, id }) {
    const [formData, setFormData] = useState(data || {});

    const handleChange = (e) => {
        const { id, value } = e.target;
        if (id === 'products') {
            const productIds = value.split(',').map(id => id.trim());
            setFormData(prevData => ({
                ...prevData,
                products: productIds
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
            console.log('Model créé avec succès:', createdModel);
            onSubmitSuccess();
        } catch (error) {
            console.error('Erreur lors de la création du modèle:', error);
        }
    };

    return (
        <div className="ReceiptModelForm">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="clientReference">ID du client</label>
                    <input type="text" id="clientReference" defaultValue={data?.clientReference || ''} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="emissionDate">Date d'émission</label>
                    <input type="text" id="emissionDate" defaultValue={data?.emissionDate || ''} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="isPaid">Payé</label>
                    <input type="text" id="isPaid" defaultValue={data?.isPaid ? "true" : "false"} onChange={handleChange} />   
                </div>
                <div>
                    <label htmlFor="price">Prix</label>
                    <input type="text" id="price" defaultValue={data?.price || ''} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="products">Produits (séparés par des virgules)</label>
                    <input type="text" id="products" value={(Array.isArray(formData.products) && formData.products.join(', ')) || ''} onChange={handleChange} />
                </div>
                <button type="submit">Valider</button>
            </form>
        </div>
    );
}

export default ReceiptModelForm;
