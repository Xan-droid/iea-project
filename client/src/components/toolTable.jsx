import { useEffect, useState } from "react";
const ToolTable = () => {

    const [toolData, setToolData] = useState([]);

    useEffect(() => {

        fetch('http://localhost:3001/tool/getAllTools')
        .then((response) => response.json())
        .then((data) => {
            setToolData(data.data)
        })
        .catch(() => console.error('Error obteniendo datos.'));
    }, []);

    return (
        <div className='container-table'>
            <h3 className='text-center mb-4'> Herramientas </h3>
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>ID herramienta</th>
                        <th>Nombre herramienta</th>
                        <th>ID usuario</th>
                        <th>Disponibilidad</th>
                    </tr>
                </thead>
                <tbody>
                    {toolData.map((item) => (
                        <tr key={item.toolId}>
                            <td>{item.toolId}</td>
                            <td>{item.toolName}</td>
                            <td>{item.userId}</td>
                            <td>
                                <span
                                    className={`badge bg-${item.label ? 'success' : 'secondary'}`} >
                                    {item.issuedToUserId}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ToolTable;
