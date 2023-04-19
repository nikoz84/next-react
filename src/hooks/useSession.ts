import { useEffect, useState } from 'react'
import { authService } from '../utils/services/Auth/__authService'

export default function useSession() {
    const [session, setSession] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        authService
            .getSession()
            .then((userSession) => {
                setSession(userSession)
            })
            .catch((err) => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return {
        data: session,
        error,
        loading,
    }
}
