import nookies from 'nookies'
const KEY = 'ACCESS_TOKEN'

export const tokenService = {
    save(accessToken: string, ctx = null) {
        globalThis?.sessionStorage?.setItem(KEY, accessToken)
        globalThis?.localStorage?.setItem(KEY, accessToken)
        nookies.set(ctx, KEY, accessToken)
    },
    get(ctx = null) {
        globalThis?.sessionStorage?.getItem(KEY)
        globalThis?.localStorage?.getItem(KEY)
        return nookies.get(ctx, KEY) || ''
    },
    delete(ctx = null) {
        globalThis?.sessionStorage?.removeItem(KEY)
        globalThis?.localStorage.removeItem(KEY)
        nookies.destroy(ctx, KEY)
    },
}
