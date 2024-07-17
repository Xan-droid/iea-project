import { useEffect, useState } from "react";
const GetComponentsAvailable = () => {

    const [componentsAvailable, SetComponentsAvailable] = useState([]);

    useEffect(() => {
        try {
            const fetchComponentsAvailable = async () => {
                const request = await fetch('http://localhost:3001/component/getComponentsAvailable')
                const response = await request.json()
                const data = response
                if (request.status == 200) {
                    SetComponentsAvailable(data)
                }
            }
            fetchComponentsAvailable()
        } catch (error) {
            throw Error('Error al ejecutar la solicitud')
        }

    }, [])

    return componentsAvailable
}

export default GetComponentsAvailable