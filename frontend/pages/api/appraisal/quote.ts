// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  approve: boolean,
  appraisal: {
    driverAge: string
    car: string
    purchasePrice: string
  },
  error: {
    driverAge: string
    car: string
    purchasePrice: string
    global: string
  },
  redirect: string
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
      let result:Data = {
        approve: false,
        appraisal: {
          driverAge: '',
          car: '',
          purchasePrice: ''
        },
        error: {
          driverAge: '',
          car: '',
          purchasePrice: '',
          global: ''
        },
        redirect: ''
      };
      try {
        const {
          appraisal: {
            driverAge,
            car,
            purchasePrice
          }
        } = req.body;

        if (purchasePrice >= 5000) {
          result = {
            ...result,
            approve: true
          };
        } else {
          result = {
            ...result,
            approve: false,
            error: {
              ...result.error,
              purchasePrice: 'Sorry! The price of the car is too low'
            }
          }
        }

        if (driverAge > 18) {
          result = {
            ...result,
            approve: true
          };
        } else {
          result = {
            ...result,
            approve: false,
            error: {
              ...result.error,
              driverAge: 'Sorry! The driver is too young'
            }
          }
        }

        if (car === 'porsche' && driverAge >= 25) {
          result = {
            ...result,
            approve: true
          };
        } else {
          result = {
            ...result,
            approve: false,
            error: {
              ...result.error,
              car: 'Sorry! We can not accept this particular risk',
              driverAge: 'Sorry! We can not accept this particular risk'
            }
          }
        }

        if (result.approve) {
          result = {
            ...result,
            redirect: '/appraisal/offer'
          };
          console.log('here')
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
