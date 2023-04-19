import type { NextApiRequest, NextApiResponse } from 'next'
import userModel from '@/src/utils/db/models/userModel'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const users = await userModel.getUsers()

    res.status(200).json(users)
}
