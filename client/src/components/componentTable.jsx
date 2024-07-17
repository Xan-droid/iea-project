import { useEffect, useState } from "react";
const ComponentTable = () => {

    const [componentData, setComponentData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/component/getAllComponents')
        .then((response) => response.json())
        .then((data) => {
            setComponentData(data.data)
        })
        .catch(() => console.error('Error obteniendo datos.'));

    }, []);

    return (
        <div className='container-table'>
            <h3 className='text-center mb-4'> Componentes </h3>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Unidades</th>
                    <th>Disponibilidad</th>
                    </tr>
                </thead>
                <tbody>
                    {componentData.map((item) => (
                        <tr key={item.componentId}>
                            <td>{item.componentId}</td>
                            <td>{item.name}</td>
                            <td>{item.unitsAvailable}</td>
                            <td>
                                <span
                                    className={`badge bg-${item.label ? 'success' : 'danger'}`} >
                                {item.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ComponentTable;