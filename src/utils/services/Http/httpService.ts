async function http(endPoint: RequestInfo | URL, options?: any) {
    const fullUrl = process.env.NEXT_API_URL || ''
    return fetch(fullUrl  + endPoint, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers,
        },
        body: options?.body ? JSON.stringify(options.body) : null,
    }).then(async (resp: Response) => {
        const body = await resp.json()
        return {
            ok: resp.ok,
            status: resp.status,
            statusText: resp.statusText,
            body,
        }
    })
}

export { http }
