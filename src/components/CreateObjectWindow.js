import '../styles/CreateObjectWindow.css'
import Modal from 'react-modal';
import React from 'react';
import ClientModelForm from '../models/ClientModelForm';
import ReceiptModelForm from '../models/ReceiptModelForm';
import ProductModelForm from '../models/ProductModelForm';

function CreateObjectWindow({ isOpen, onClose, model, refreshData }) {
    const handleCloseClick = (e) => {
        e.stopPropagation(); 
        onClose(); 
    };

    const handleSubmitSuccess = () => {
        onClose(); 
        refreshData(model);
    };


    const renderModelForm = () => {
        switch (model) {
            case 'client':
                return <ClientModelForm onSubmitSuccess={handleSubmitSuccess}/>;
            case 'receipt':
                return <ReceiptModelForm onSubmitSuccess={handleSubmitSuccess}/>;
            case 'product':
                return <ProductModelForm onSubmitSuccess={handleSubmitSuccess}/>;
            default:
                return null;
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Create Object Modal"
            appElement={document.getElementById('root')}
            className="custom-modal"
        >
            <div className="CreateObjectWindow">
                <button onClick={handleCloseClick}>Close Modal</button>
                <p>Creation {model}</p>
                {renderModelForm()}
            </div>
        </Modal>
    );
}

export default CreateObjectWindow;