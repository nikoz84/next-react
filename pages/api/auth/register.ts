// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import userModel from '@/src/utils/db/models/userModel'
import authService from '@/src/utils/services/Auth/authService'
import type { NextApiRequest, NextApiResponse } from 'next'

interface AccessTokenResponse {
    user: object | null
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { user } = req.body

    let newUser = null
    if (user.passwordConfirmed) {
        newUser = authService.register(user)
    }

    if (!newUser) {
        res.status(400).json({
            message: 'user already registered',
        })
    }

    res.status(200).json({ user: newUser })
}
