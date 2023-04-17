import { IUser } from '@/src/types/UserTypes'
import { http } from '../Http/httpService'
import { tokenService } from './tokenService'

const authService = {
    async login({ email, password }: IUser) {
        return await http('/api/auth/login', {
            method: 'POST',
            body: { email, password },
        }).then(async (response) => {
            if (!response.ok) {
                throw new Error('Usuário ou senha inválidos')
            }
            const { accessToken } = await response.body

            tokenService.save(accessToken)

            return response.body
        })
    },
    async getSession(ctx = null) {
        const token = tokenService.get(ctx)
        console.log(token)
        return http('/api/auth/session', {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }).then((response) => {
            if (!response.ok) {
                throw new Error('Não autorizado')
            }
            const { data }: any = response.body
            console.log(response)
            return data
        })
    },
}

export { authService }
