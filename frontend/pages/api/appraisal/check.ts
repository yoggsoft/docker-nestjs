// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
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
    try {
      let valid = false;
      let result:Data = {};
      const {email, password} = req.query;
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
      console.log(result);
      if (valid) {
        result = {
          ...result,
          redirect: '/appraisal'
        }
        res.status(200).json(result)
      } else {
        res.status(401).json(result)
      }
    } catch (err) {
      // log to external monitoring
    }
}
