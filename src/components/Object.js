import '../styles/Object.css'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function Object(){
    return(
        <div className='container'>
            <div className='content'>
                <p>testtttttttttttttttttttttttttttttttttt</p>
            </div>
            <div className='edition-buttons'>
            <EditIcon/>
            <DeleteIcon/>
            </div>
        </div>
    );

}

export default Object;