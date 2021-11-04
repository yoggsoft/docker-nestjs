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
      if (driverAge) {
        if (parseInt(driverAge) > 18) {
          if (car) {
            if (car === 'porsche' && parseInt(driverAge) > 24) {
              if (purchasePrice) {
                if (parseInt(purchasePrice) > 5000) {
                  result = {
                    ...result,
                    approve: true
                  };
                } else {
                  result.error.purchasePrice = 'Sorry! The price of the car is too low';
                }
              } else {
                result.error.purchasePrice = 'Purchase price must be provided';
              }
            } else {
              result = {
                ...result,
                error: {
                  ...result.error,
                  driverAge: 'Sorry! We can not accept this particular risk',
                  car: 'Sorry! We can not accept this particular risk'
                }
              }
            }
          } else {
            result.error.car = 'Car must be provided';
          }
        } else {
          result.error.driverAge = 'Sorry! The driver is too young';
        }
      } else {
        result.error.driverAge = 'Age of driver must be provided';
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
