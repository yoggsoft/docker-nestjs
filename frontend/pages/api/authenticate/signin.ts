// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  valid: boolean,
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
    const {
      user: {
        email,
        password
      }
    } = req.body;

    let result:Data = {
      valid: false,
      ...req.body,
      error: {
        email: '',
        password: ''
      },
      redirect: ''
    };


    try {
      if (email === 'Qover') {
        result = {
          ...result,
          valid: true
        };
      } else {
        result = {
          ...result,
          user: {
            email: email,
            password: password
          },
          error: {
            ...result.error,
            email: 'invalid username'
          }
        }
      }

      if (password === 'ninja') {
        result = {
          ...result,
          valid: true
        };
      } else {
        result = {
          ...result,
          user: {
            email: email,
            password: password
          },
          error: {
            ...result.error,
            password: 'invalid password'
          }
        }
      }

      if (result.valid) {
        result = {
          ...result,
          redirect: '/appraisal'
        };
        res.status(200).json({ ...result });
      } else {
        res.status(200).json({ ...result });
      }
    } catch (err) {
      res.status(401).send({ ...result })
    }
  } else {
    res.status(404).send({} as any)
  }
}
