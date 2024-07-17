import { useState } from "react";
import Input from '../components/input';
import { requestPost } from '../services/requestForm';
const ModalNewComponent = ({ refProp }) => {


    const [formData, setFormData] = useState({
        name: '',
        units: ''
    });

    const handleInputChangeNewComponent = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleNewComponentForm = async (e) => {
        e.preventDefault()
        const submitBtn = e.nativeEvent.submitter
        const path = 'http://localhost:3001/component/register'
        const body = {
            'name': formData.name,
            'units': formData.units
        }
        const data = await requestPost(path, body, e.target, submitBtn)
        if(data) {
            location.reload()
        }
	};

    return (
        <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        ref={refProp}
        >
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <form id="new-component-modal" onSubmit={handleNewComponentForm}>
                        <div className="modal-header">
                            <h5 className="modal-title">Registro de componente </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Input
                                type="text"
                                name="name"
                                label="Nombre de componente"
                                onChange={handleInputChangeNewComponent}
                            />
                            <Input
                                type="number"
                                name="units"
                                label="Cantidad"
                                onChange={handleInputChangeNewComponent}
                            />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button className="btn btn-primary btn-principal" id="submit-btn"
                            type="submit">Registrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ModalNewComponent