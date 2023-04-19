import { useEffect, useState } from 'react'

export default function useSession() {
    const [session, setSession] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {}, [])

    return {
        data: session,
        error,
        loading,
    }
}
