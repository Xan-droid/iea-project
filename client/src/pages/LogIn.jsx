import { useState } from "react";
import Input from "../components/input.jsx";
import { requestPost } from "../services/requestForm.jsx"

const LogIn = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleChange = async (e) => {
        e.preventDefault()
        const submitBtn = e.nativeEvent.submitter
        const path = 'http://localhost:3001/user/validate'
        const body = {
        'email': formData.email,
        'password': formData.password
        }

        const data = await requestPost(path, body, e.target, submitBtn)
        if(data) {
            localStorage.setItem('access_token', data.token);
            if(data.profileType == 1) {
                location.href='/adminHome'
            } else if(data.profileType == 2) {
                location.href = '/userHome'
            }
        }
	};

    return (
        <div className="container-login container">
            <div className="container second-container-login p-4">
                <div className="container-title mb-5">
                    <p className="text-center h2 mb-0"> Inicio de sesión </p>
                    <p className="text-center small fst-italic text-secondary">IEA management system</p>
                </div>
                <form onSubmit={handleChange} id="login-form">
                    <Input
                        type="text"
                        name="email"
                        label="Correo electrónico"
                        onChange={handleInputChange}
                    />
                    <Input
                        type="text"
                        name="password"
                        label="Contraseña"
                        onChange={handleInputChange}
                    />
                    <div className="text-end mt-3">
                        <button
                            id="submit-btn"
                            type="submit"
                            className="btn btn-primary btn-principal"
                        >Ingresar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LogIn