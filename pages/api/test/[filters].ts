// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Action = {
    pid: string | string[] | undefined
    size?: string | string[] | undefined
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Action>
) {
    console.log(req.body, req.query)
    const { pid, size } = req.query
    console.log(size)
    res.status(200).json({ pid, size })
}
