import { useEffect, useState } from "react";
const GetUserName = () => {

    const [userName, setUserName] = useState('');

    useEffect(() => {
        try {
            const fetchUserName = async () => {
                const jwt = localStorage.getItem('access_token');
                const request = await fetch('http://localhost:3001/user/getUserName', {
                    headers: {
                        'Authorization': `Bearer ${jwt}`
                    }
                })
                const response = await request.json()
                const data = response
                if (request.status == 200) {
                    setUserName(data.name)
                }
            }
            fetchUserName()
        } catch (error) {
            throw Error('Error al ejecutar la solicitud')
        }

    }, [])

    return userName
}

export default GetUserName