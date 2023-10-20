export const verifyToken = () => {
    const storedToken = localStorage.getItem('token')
    const storedExpiration = localStorage.getItem('tokenExpiration')
    const isTokenExpired = Date.now() > parseInt(storedExpiration, 10)
    const isValid = storedToken && !isTokenExpired

    return [storedToken, isValid]
}