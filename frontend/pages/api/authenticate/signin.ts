// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  redirect: string,
  user: {
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
    if (req.method === 'POST') {
      // Process a POST request
      try {
        let valid = false;
        let result:Data = {user: { email: '', password: '' }, error: { email: '', password: '' }, redirect: ''};
        const { email, password } = req.query;
        if (email === 'Qover') {
          valid = true;
        } else {
          result = {
            ...result,
            error: {
              ...result.error,
              email: 'invalid username'
            }
          }
        }
  
        if (password === 'ninja') {
          valid = true;
        } else {
          result = {
            ...result,
            error: {
              ...result.error,
              password: 'invalid password'
            }
          }
        }
        res.status(200).json(result)
      } catch (err) {
        // log to external monitoring
      }
    } else {
      res.status(401).send({} as any)
    }
}
