// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { IUser } from '@/src/types/UserTypes'
import type { NextApiRequest, NextApiResponse } from 'next'

interface AccessTokenResponse {
    accessToken: string | null
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<AccessTokenResponse>
) {
    const { email, password } = req.body
    let tokenResponse: AccessTokenResponse = {
        accessToken: '',
    }
    if (email && password) {
        tokenResponse.accessToken = '209ioweoiwe9we900we'
    }
    res.status(200).json(tokenResponse)
}
