import '../styles/CreateObject.css'
import AddIcon from '@mui/icons-material/Add';
import React, { useState } from 'react';    
import CreateObjectWindow from './CreateObjectWindow';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function CreateObject({ model, refreshData }) {
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div className='container-createObject' onClick={handleOpenModal}>
            <AddIcon/>
            <CreateObjectWindow isOpen={modalOpen} onClose={handleCloseModal} model={model} refreshData={refreshData}/>
        </div>
    );
}

export default CreateObject;