import { useState } from "react";
import Input from '../components/input';
import { requestPost } from '../services/requestForm';
const ModalNewUser = ({ refProp }) => {

    const [selectNewUser, setSelectNewUser] = useState(1);

    const handleSelectNewUser = (e) => {
        setSelectNewUser(e.target.value);
    };

    const [formData, setFormData] = useState({
        profileType: '',
        name: '',
        email: '',
        password: ''
    });

    const handleInputChangeNewUser = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleNewUserForm = async (e) => {
        e.preventDefault()
        const submitBtn = e.nativeEvent.submitter
        const path = 'http://localhost:3001/user/register'
        const body = {
            'profileType': selectNewUser,
            'name': formData.name,
            'email': formData.email,
            'password': formData.password
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
                    <form id="new-user-modal" onSubmit={handleNewUserForm}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Registro de usuario </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="profileType-input" className="form-label"> Tipo de usuario </label>
                                <select
                                    className="form-select"
                                    name="profileType"
                                    id="profileType-input"
                                    value={selectNewUser}
                                    onChange={handleSelectNewUser}
                                    >
                                    <option value="1">Administrador</option>
                                    <option value="2">Uusario genérico</option>
                                </select>
                            </div>
                            <Input
                                type="text"
                                name="name"
                                label="Nombre de usuario"
                                onChange={handleInputChangeNewUser}
                            />
                            <Input
                                type="text"
                                name="email"
                                label="Correo electrónico"
                                onChange={handleInputChangeNewUser}
                            />
                            <Input
                                type="text"
                                name="password"
                                label="Contraseña"
                                onChange={handleInputChangeNewUser}
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

export default ModalNewUser