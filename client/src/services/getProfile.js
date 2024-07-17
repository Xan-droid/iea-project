const getProfile = async () => {
    const jwt = localStorage.getItem('access_token');

    const request = await fetch('http://localhost:3001/user/getProfile', {
        headers: {
            'Authorization': `Bearer ${jwt}`
        }
    })
    const response = await request.json()
    const data = response
    if (request.status == 200) {
        return data.profile
    }
}

export default getProfile