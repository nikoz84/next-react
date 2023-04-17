import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '@/src/components/Layout/Layout'
import { authService } from '@/src/utils/services/Auth/authService'
import { IUser } from '@/src/types/UserTypes'

export default function Login() {
    const router = useRouter()
    const [credentials, setCredentials] = useState<IUser>({
        password: '',
        email: '',
    })

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target
        setCredentials((currentValues) => {
            return {
                ...currentValues,
                [name]: value,
            }
        })
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        authService
            .login({ ...credentials })
            .then((resp) => {
                console.log('login')
                router.push('/auth/page-ssr')
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <>
            <Head>
                <title>Login page</title>
                <meta name="description" content="enter login session" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <main className="p-10">
                    <h1 className={`text-3xl font-bold text-gray-900`}>
                        Login
                    </h1>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    type="text"
                                    name="email"
                                    value={credentials.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="password"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    name="password"
                                    value={credentials.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <button
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    type="submit"
                                >
                                    Entrar
                                </button>
                            </div>
                        </form>
                        <div>
                            <pre>{JSON.stringify(credentials, null, 2)}</pre>
                        </div>
                    </div>
                </main>
            </Layout>
        </>
    )
}
