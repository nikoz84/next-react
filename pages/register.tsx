'use client'
import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Layout from '@/src/components/Layout/Layout'
import { IUserRegistration } from '@/src/types/UserTypes'
import { http } from '@/src/utils/services/Http/httpService'

export default function Login() {
    const router = useRouter()
    const [user, setUser] = useState<
        IUserRegistration & { passwordConfirmation: string }
    >({
        password: '',
        email: '',
        passwordConfirmed: false,
        name: '',
        passwordConfirmation: '',
    })

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target
        setUser((currentValues) => {
            return {
                ...currentValues,
                [name]: value,
            }
        })
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const isValid =
            user.password === user.passwordConfirmation && user.password != ''
        if (isValid) {
            const newUser = { ...user, passwordConfirmed: isValid }
            const resp = await http.post('/api/auth/register', { user: newUser })
            if (resp.status === 200) {
                router.push('/api/auth/signin')
            }
        }
    }
    return (
        <>
            <Head>
                <title>Registro page</title>
                <meta name="description" content="enter to registration page" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <main className="p-10">
                    <div className="flex flex-col justify-center items-center mt-8">
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title mt-5">Register</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <input
                                            className="input input-bordered w-full max-w-xs"
                                            type="text"
                                            name="name"
                                            value={user.name}
                                            placeholder="Name"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            className="input input-bordered w-full max-w-xs"
                                            type="text"
                                            name="email"
                                            placeholder="Email Address"
                                            value={user.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="password"
                                            className="input input-bordered w-full max-w-xs"
                                            name="password"
                                            placeholder="Enter your password"
                                            value={user.password}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            type="password"
                                            className="input input-bordered w-full max-w-xs"
                                            name="passwordConfirmation"
                                            placeholder="Confirm your password"
                                            value={user.passwordConfirmation}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">
                                            Register
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </Layout>
        </>
    )
}
