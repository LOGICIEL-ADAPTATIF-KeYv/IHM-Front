import '../styles/Object.css'
import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ClientModel from '../models/ClientModel';
import ReceiptModel from '../models/ReceiptModel';
import ProductModel from '../models/ProductModel';
import { apiDelete } from '../services/apiDelete';
import Modal from 'react-modal';
import CreateObjectWindow from './CreateObjectWindow';

Modal.setAppElement('#root');

function Object({data, model, refreshData}){
    const [modalOpen, setModalOpen] = useState(false);

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

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return(
        <div className={containerClass}>
            <div className='content'>
            <ModelComponent data={data}/>
            </div>
            <div className='edition-buttons'>
            <EditIcon onClick={handleOpenModal}/>
            <DeleteIcon onClick={handleDelete} />
            </div>
            <CreateObjectWindow isOpen={modalOpen} onClose={handleCloseModal} model={model} refreshData={refreshData} data={data} mode="PATCH" id={ model+"/"+data._id}/>
        </div>
    );

}

export default Object;