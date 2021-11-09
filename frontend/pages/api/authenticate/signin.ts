import type { NextApiRequest, NextApiResponse } from 'next';

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

const signin_rules = {
  email: {
    is_empty: {
      error_message: 'Username required'
    },
    incorrect: {
      error_message: 'Invalid username'
    }
  },
  password: {
    is_empty: {
      error_message: 'Password required'
    },
    incorrect: {
      error_message: 'Invalid password'
    }
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
      ...req.body,
      error: {
        email: '',
        password: ''
      },
      redirect: ''
    };

    try {
      if (!email) {
        result.error.email = signin_rules.email.is_empty.error_message;
      } else if (email !== 'Qover') {
        result.error.email = signin_rules.email.incorrect.error_message;
      }

      if (!password) {
        result.error.password = signin_rules.password.is_empty.error_message;
      } else if (password !== 'ninja') {
        result.error.password = signin_rules.password.incorrect.error_message;
      }

      const hasErrors = Object.values(result.error).some(val => (val !== null && val !== ''));
      
      if (!hasErrors) {
        result = {
          ...result,
          valid: true,
          redirect: '/appraisal/create'
        };
      }
      
      res.status(200).json({ ...result });
    } catch (err) {
      res.status(401).send({ ...result })
    }
  } else {
    res.status(404).send({} as any)
  }
}
