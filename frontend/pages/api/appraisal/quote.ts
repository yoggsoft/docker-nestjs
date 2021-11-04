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
    const {
      appraisal: {
        driverAge,
        car,
        purchasePrice
      }
    } = req.body;

    let result:Data = {
      approve: false,
      ...req.body,
      error: {
        driverAge: '',
        car: '',
        purchasePrice: '',
        global: ''
      },
      redirect: ''
    };

    try {
      if (!car) {
        result = {
          ...result,
          approve: false,
          error: {
            ...result.error,
            car: 'Car must be provided'
          }
        }
      }

      if (!purchasePrice) {
        result = {
          ...result,
          approve: false,
          error: {
            ...result.error,
            purchasePrice: 'Purchase price must be provided'
          }
        }
      } else if (parseInt(purchasePrice) >= 5000) {
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

      if (!driverAge) {
        result = {
          ...result,
          approve: false,
          error: {
            ...result.error,
            driverAge: 'Age of the driver must be provided'
          }
        }
      } else if (parseInt(driverAge) < 18) {
        result = {
          ...result,
          approve: false,
          error: {
            ...result.error,
            driverAge: 'Sorry! The driver is too young'
          }
        }
      } else if (parseInt(driverAge) < 25  && car === 'porsche') {
        result = {
          ...result,
          approve: false,
          error: {
            ...result.error,
            driverAge: 'Sorry! We can not accept this particular risk',
            car: 'Sorry! We can not accept this particular risk'
          }
        }
      } else {
        result = {
          ...result,
          approve: true
        };
      }

      if (result.approve) {
        result = {
          ...result,
          redirect: '/appraisal/offer'
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
