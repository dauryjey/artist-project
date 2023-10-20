const TOKEN_URL = 'https://accounts.spotify.com/api/token'

export const getToken = async () => {
    try {
        const response = await fetch(TOKEN_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `grant_type=client_credentials&client_id=${import.meta.env.VITE_CLIENT_ID}&client_secret=${import.meta.env.VITE_CLIENT_SECRET}`
        })
    
        const json = await response.json()
    
        const token = json.access_token
        const expiration = Date.now() + parseInt(json.expires_in) * 1000
        localStorage.setItem('token', `${token}`)       
        localStorage.setItem('tokenExpiration', `${expiration}`)

        return [token, expiration]
    } catch (e) {
        throw new Error('Error creating token')
    }
}

