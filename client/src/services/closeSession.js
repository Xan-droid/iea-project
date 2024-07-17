const closeSession = async () => {
    localStorage.removeItem('access_token')
    location.reload()
}

export default closeSession