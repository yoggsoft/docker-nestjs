// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  valid: boolean,
  redirect: string,
  appraisal: {
    email: string,
    password: string
  },
  error: {
    email: string,
    password: string,
    global?: string
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    
}
