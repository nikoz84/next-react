import Layout from '@/src/components/Layout/Layout'
import { AppContext } from 'next/app'
import { IUser } from '@/src/types/UserTypes'
import UserList from '@/src/components/Users/userList'
import { http } from '@/src/utils/services/Http/httpService'

export default function CreateUser({ users }: { users: any }) {
    return (
        <Layout>
            <main className={`p-10`}>
                <article className="mt-5">
                    {users.map((user: IUser) => {
                        return <UserList key={user.id} user={user} />
                    })}
                </article>
            </main>
        </Layout>
    )
}

export async function getServerSideProps(context: AppContext) {
    const resp = await http.get('/api/users')

    return {
        props: {
            users: resp.data,
        },
    }
}
