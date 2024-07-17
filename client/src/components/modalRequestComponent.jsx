import { useState } from "react";
import GetComponentsAvailable from "../services/getComponentsAvailable";
const ModalRequestComponent = ({ refProp }) => {

    const [selectComponent, setSelectComponent] = useState(0)

    const handleSelectComponent = (e) => {
        setSelectComponent(e.target.value)
    };

    const handleRequestComponentForm = async (e) => {
        e.preventDefault()

        const jwt = localStorage.getItem('access_token');
        const body = {
            'componentId': selectComponent
        }

        const request = await fetch('http://localhost:3001/component/request', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${jwt}`
            },
            body: JSON.stringify(body)
        })

        const response = await request.json()
        const data = response

        if(data) {
            location.reload()
        }
	};

    const componentsAvailable = GetComponentsAvailable().data

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
                    <form id="rquest-component-modal" onSubmit={handleRequestComponentForm}>
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Solicitud componente </h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="mb-3">
                                <label htmlFor="component-input" className="form-label"> Componente </label>
                                <select
                                    className="form-select"
                                    name="componentid"
                                    id="component-input"
                                    value={selectComponent}
                                    onChange={handleSelectComponent}
                                    >
                                    <option key="0" value="0">Selecciona un componente</option>
                                    {
                                        componentsAvailable != undefined
                                        ? (
                                            componentsAvailable.map((item) => (
                                                <option
                                                    key={item.componentId}
                                                    value={item.componentId}
                                                >
                                                        {item.name}
                                                </option>
                                            ))
                                        )
                                        : ''
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button className="btn btn-primary btn-principal" id="submit-btn"
                            type="submit">Solicitar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ModalRequestComponent