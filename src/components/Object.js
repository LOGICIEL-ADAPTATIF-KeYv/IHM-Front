import '../styles/Object.css'
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ClientModel from '../models/ClientModel';
import ReceiptModel from '../models/ReceiptModel';
import ProductModel from '../models/ProductModel';
import { apiDelete } from '../services/apiDelete';


    function Object({data, model, refreshData}){
        let ModelComponent = null;
        let containerClass = 'container';

        switch (model){
            case 'client' :
                ModelComponent = ClientModel;
                containerClass += ' client-container';
                break;
            case 'receipt' :
                ModelComponent = ReceiptModel;
                break;
            case 'product' :
                ModelComponent = ProductModel;
                break;

            default:
                ModelComponent = () => <p>Modèle non pris en charge : {model}</p>;
        }

        const handleDelete = async () => {
            try {
                await apiDelete(model, data._id); 
                console.log(`Objet supprimé avec succès.`);
                refreshData(model);
            } catch (error) {
                console.error(`Erreur lors de la suppression de l'objet :`, error);
            }
        };

        return(
            <div className={containerClass}>
                <div className='content'>
                <ModelComponent data={data}/>
                </div>
                <div className='edition-buttons'>
                <EditIcon/>
                <DeleteIcon onClick={handleDelete} />
                </div>
            </div>
        );

}

export default Object;