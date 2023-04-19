import { IShowUser } from '@/src/types/UserTypes'
import client from '@/src/utils/db/client'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

const userModel = {
    async getUsers(): Promise<IShowUser[] | undefined> {
        try {
            const users = await client.user.findMany({select: {name: true, id: true, email: true, createdAt: true}})

            if (users.length > 0) {
                return users.map((user: any) => {
                    return {
                        name: user.name,
                        id: user.id,
                        email: user.email,
                        createdAt: user.createdAt.toString(),
                    } as IShowUser
                })
            }
        } catch (err) {
            console.log(err)
        }
    },
}

export default userModel
