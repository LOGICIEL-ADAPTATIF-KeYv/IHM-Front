import '../styles/CreateObjectWindow.css'
import Modal from 'react-modal';
import React from 'react';
import ClientModelForm from '../models/ClientModelForm';
import ReceiptModelForm from '../models/ReceiptModelForm';
import ProductModelForm from '../models/ProductModelForm';
import CloseIcon from '@mui/icons-material/Close';

function CreateObjectWindow({ isOpen, onClose, model, refreshData, data, mode, id }) {
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
                return <ClientModelForm onSubmitSuccess={handleSubmitSuccess} mode={mode}  data={data} id={id}/>;
            case 'receipt':
                return <ReceiptModelForm onSubmitSuccess={handleSubmitSuccess} mode={mode}  data={data} id={id}/>;
            case 'product':
                return <ProductModelForm onSubmitSuccess={handleSubmitSuccess} mode={mode} data={data} id={id}/>;
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
                <CloseIcon className="CloseIcon" onClick={handleCloseClick}></CloseIcon>
                {renderModelForm()}
            </div>
        </Modal>
    );
}

export default CreateObjectWindow;