async function http(url: RequestInfo | URL, options?: any) {
    const fullUrl = process.env.LOCAL_URL
    return fetch(url, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options?.headers,
        },
        body: options?.body ? JSON.stringify(options.body) : null,
    }).then((resp: Response) => {
        return {
            ok: resp.ok,
            status: resp.status,
            statusText: resp.statusText,
            body: resp.json(),
        }
    })
}

export { http }
