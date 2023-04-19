import { IUser } from '@/src/types/UserTypes'
import client from '@/src/utils/db/client'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'


const userModel = {
    async getUsers(): Promise<IUser[] | undefined> {
        try {
            const users = await client.user.findMany()

            if(users.length > 0) {
                return users.map((user: IUser) => {
                    return {
                        ...user,
                        createdAt: user.createdAt.toString()
                    }
                })
            }
        }catch (err) {
            console.log(err)
        }
        
    }
}


export default userModel