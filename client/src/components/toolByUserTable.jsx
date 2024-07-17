import { useEffect, useState } from "react";
const ToolByUserTable = () => {

    const [toolData, setToolData] = useState([]);

    useEffect(() => {
        const jwt = localStorage.getItem('access_token')
        fetch('http://localhost:3001/tool/getToolsByUser', {
            headers: {
                'Authorization': `Bearer ${jwt}`
            }
        })
        .then((response) => response.json())
        .then((data) => {
            setToolData(data.data)
        })
        .catch(() => console.error('Error obteniendo datos.'));
    }, []);

    return (
        <div className='container-table'>
            <h3 className='text-center mb-4'> Herramientas solicitadas </h3>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>ID herramienta</th>
                        <th>Nombre herramienta</th>
                        <th>Fecha solicitud</th>
                    </tr>
                </thead>
                <tbody>
                    {toolData.map((item) => (
                        <tr key={item.toolId}>
                            <td>{item.toolId}</td>
                            <td>{item.name}</td>
                            <td>{(item.requestDate).substring(0,10)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ToolByUserTable;
