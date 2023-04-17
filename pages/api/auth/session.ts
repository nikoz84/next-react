// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

interface AccessTokenResponse {
    user: object | null
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<AccessTokenResponse>
) {
    console.log(req)
    const { token } = req.body
    let user = {}
    if (token === '209ioweoiwe9we900we') {
        user = {
            name: 'Nicolás Romero',
            email: 'niko@gmail.com',
            isAdmin: true,
        }
    }

    res.status(200).json({ user })
}
