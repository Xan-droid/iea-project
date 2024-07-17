import { useState } from "react";
import Input from '../components/input';
import { requestPost } from '../services/requestForm';
const ModalNewTool = ({ refProp }) => {


    const [formData, setFormData] = useState({
        name: ''
    });

    const handleInputChangeNewTool = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleNewToolForm = async (e) => {
        e.preventDefault()
        const submitBtn = e.nativeEvent.submitter
        const path = 'http://localhost:3001/tool/register'
        const body = {
            'name': formData.name
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
                    <form id="new-tool-modal" onSubmit={handleNewToolForm}>
                        <div className="modal-header">
                            <h5 className="modal-title">Registro de herramienta </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <Input
                                type="text"
                                name="name"
                                label="Nombre de la herramienta"
                                onChange={handleInputChangeNewTool}
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

export default ModalNewTool