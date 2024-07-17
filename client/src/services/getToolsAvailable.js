import { useEffect, useState } from "react";
const GetToolsAvailable = () => {

    const [toolsAvailable, SetToolsAvailable] = useState([]);

    useEffect(() => {
        try {
            const fetchComponentsAvailable = async () => {
                const request = await fetch('http://localhost:3001/tool/getToolsAvailable')
                const response = await request.json()
                const data = response
                if (request.status == 200) {
                    SetToolsAvailable(data)
                }
            }
            fetchComponentsAvailable()
        } catch (error) {
            throw Error('Error al ejecutar la solicitud')
        }

    }, [])

    return toolsAvailable
}

export default GetToolsAvailable