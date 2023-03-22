// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Action = {
  action: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Action>
) {
  res.status(200).json({ action: 'test' })
}
