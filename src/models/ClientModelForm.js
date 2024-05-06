import React, { useState} from 'react';
import { apiPost } from '../services/apiPost';
import '../styles/ClientModelForm.css'

function ClientModelForm({ data, onSubmitSuccess, mode, id }) {
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
            const createdModel = await apiPost(id, formData, mode); 
            console.log('Model créé avec succès:', createdModel);
            onSubmitSuccess();
        } catch (error) {
            console.error('Erreur lors de la création du modèle:', error);
        }
    };

    return (
        <div className="ClientModelForm">
            <form onSubmit={handleSubmit}>
                <p>Création d'un nouveau client</p>
                <div>
                    <label htmlFor="name">Nom</label>
                    <input type="text" id="name" defaultValue={data?.name || ''} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="firstName">Prénom</label>
                    <input type="text" id="firstName" defaultValue={data?.firstName || ''} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" defaultValue={data?.email || ''} onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="creationDate">Date de création</label>
                    <input type="text" id="creationDate" defaultValue={data?.creationDate || ''} onChange={handleChange}/>
                </div>
                <button type="submit">Valider</button>
            </form>
        </div>
    );
}

export default ClientModelForm;
