import authService from '@/src/utils/services/Auth/authService'
import NextAuth from 'next-auth/next'
import CredentialProvider from 'next-auth/providers/credentials'

export default NextAuth({
    session: {
        //jwt: true,
        maxAge: 30 * 24 * 60 * 60,
    },
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialProvider({
            name: 'credentials',
            credentials: {
                username: {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'myemail@nice.com',
                },
                password: { label: 'Password', type: 'password' },
            },
            authorize: async (credentials) => {
                const user = await authService.login(credentials!)
                return user || null
            },
        }),
    ],
})
