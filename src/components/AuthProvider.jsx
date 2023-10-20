/* eslint-disable react/prop-types */
import { useAuthToken } from '../hooks/useAuthToken'
import { AuthContext } from '../contexts/AuthContext'

export const AuthProvider = ({ children }) => {
    const token = useAuthToken()
    return (
        <AuthContext.Provider value={token}>
        {children}
      </AuthContext.Provider>
    )
}