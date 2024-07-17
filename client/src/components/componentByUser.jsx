import { useEffect, useState } from "react";
const ComponentByUser = () => {

    const [componentData, setComponentData] = useState([]);

    useEffect(() => {
        const jwt = localStorage.getItem('access_token')
        fetch('http://localhost:3001/component/getComponentsByUser', {
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        })
        .then((response) => response.json())
        .then((data) => {
            setComponentData(data.data)
        })
        .catch(() => console.error('Error obteniendo datos.'));
    }, []);

    return (
        <div className='container-table'>
            <h3 className='text-center mb-4'> Componentes solicitados </h3>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>ID componente</th>
                        <th>Nombre componente</th>
                        <th>Fecha solicitud</th>
                    </tr>
                </thead>
                <tbody>
                    {componentData.map((item) => (
                        <tr key={item.componentId}>
                            <td>{item.componentId}</td>
                            <td>{item.componentName}</td>
                            <td>{(item.requestDate).substring(0,10)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ComponentByUser;
