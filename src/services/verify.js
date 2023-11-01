export const verifyToken = () => {
  const storedToken = localStorage.getItem('token')
  const storedRefreshToken = localStorage.getItem('refreshToken')
  const storedExpiration = localStorage.getItem('tokenExpiration')
  const isTokenExpired = Date.now() > parseInt(storedExpiration, 10)
  const isValid = storedToken && !isTokenExpired

  if (isValid) {
    return [isValid, storedToken, storedRefreshToken]
  } else {
    return [isValid]
  }
}
