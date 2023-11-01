import PKCE from "js-pkce"

const client_id = import.meta.env.VITE_CLIENT_ID

const PKCE_PARAMS = {
  redirect_uri: 'http://localhost:5173/',
  authorization_endpoint: 'https://accounts.spotify.com/authorize',
  token_endpoint: 'https://accounts.spotify.com/api/token',
  requested_scopes: 'user-read-private user-read-email user-top-read',
  storage: localStorage
}

const { redirect_uri, authorization_endpoint, token_endpoint, requested_scopes, storage } = PKCE_PARAMS

const pkce = new PKCE({
  client_id,
  redirect_uri,
  authorization_endpoint,
  token_endpoint,
  requested_scopes,
  storage,
})

export const getToken = async () => {
  const url = new URL(window.location.href);
  if (url.searchParams.has('code')) {
    const authorizationCode = window.location.href
    try {
      const resp = await pkce.exchangeForAccessToken(authorizationCode)
      const token = resp.access_token
      const refreshToken = resp.refresh_token
      const expiration = Date.now() + parseInt(resp.expires_in) * 1000

      localStorage.setItem('token', token)
      localStorage.setItem('tokenExpiration', expiration)
      localStorage.setItem('refreshToken', refreshToken)

      return [token, expiration, refreshToken]
    } catch (e) {
      throw new Error('Error exchanging authorization code for access token');
    }
  } else {
    window.location.replace(pkce.authorizeUrl());
  }
}

export const getNewToken = async (oldRefreshToken) => {
  const resp = await pkce.refreshAccessToken(oldRefreshToken)
  const token = resp.access_token
  const refreshToken = resp.refresh_token
  const expiration = resp.expires_in

  localStorage.setItem('token', token)
  localStorage.setItem('tokenExpiration', expiration)
  localStorage.setItem('refreshToken', refreshToken)

  return [token, expiration, refreshToken]
}