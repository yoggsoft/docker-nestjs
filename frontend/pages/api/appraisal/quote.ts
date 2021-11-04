import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  approve: boolean,
  valid: boolean,
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

const appraisal_rules = {
  driver: {
    is_empty: {
      error_message: 'Age of driver must be provided'
    },
    minimum_age: {
      value: 18,
      error_message: 'Sorry! The driver is too young'  
    }
  },
  car: {
    is_empty: {
      error_message: 'Car must be provided'
    },
    model: {
      porsche: {
        minimum_driver_age: {
          value: 25,
          error_message: 'Sorry! We can not accept this particular risk'
        }
      }
    },
  },
  purchase_price: {
    is_empty: {
      error_message: 'Purchase price must be provided'
    },
    minimum_purchase_price: {
      value: 4000,
      error_message: 'Sorry! The price of the car is too low'
    }
  }
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
      if (!driverAge) {
        result.error.driverAge = appraisal_rules.driver.is_empty.error_message;
      } else if (
        parseInt(driverAge) < appraisal_rules.driver.minimum_age.value
      ) {
        result.error.driverAge = appraisal_rules.driver.minimum_age.error_message;
      }

      if (!purchasePrice) {
        result.error.purchasePrice = appraisal_rules.purchase_price.is_empty.error_message;
      } else if (
        parseInt(purchasePrice) < appraisal_rules.purchase_price.minimum_purchase_price.value
      ) {
        result.error.purchasePrice = appraisal_rules.purchase_price.minimum_purchase_price.error_message;
      }

      if (!car) {
        result.error.car = appraisal_rules.car.is_empty.error_message;
      } else if (
        car === 'porsche' &&
        parseInt(driverAge) < appraisal_rules.car.model.porsche.minimum_driver_age.value
      ) {
        result.error.car = appraisal_rules.car.model.porsche.minimum_driver_age.error_message
        result.error.driverAge = appraisal_rules.car.model.porsche.minimum_driver_age.error_message
        result.error.global = appraisal_rules.car.model.porsche.minimum_driver_age.error_message
      }

      const hasErrors = Object.values(result.error).some(val => (val !== null && val !== ''));

      if (!hasErrors) {
        result = {
          ...result,
          valid: true,
          redirect: '/appraisal/offer'
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
