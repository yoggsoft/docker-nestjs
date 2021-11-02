import React, { ReactNode, useReducer } from 'react';
import {
  Button,
  FormControl,
  CircularProgress,
  ListItem,
  Grid
} from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import { makeStyles } from "@mui/styles";
import AppraisalTextfield from './AppraisalTextField';

const useStyles = makeStyles({
  textfield: {
    marginBottom: 20
  },
  cta: {
    backgroundColor: '#31cfda',
    textTransform: 'inherit',
    fontWeight: 600,
    minHeight: 48,
    marginTop: 20,
    '&:hover': {
      backgroundColor: '#31cfdaee',
    }
  },
  euro: {
    height: 40,
    display: 'inline-flex',
    alignItems: 'center',
    fontSize: 15,
    marginLeft: 10,
    color: '#484848'
  }
});

function appraisalReducer (state: any, action: any) {
  console.log({ state, action });
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        user: {
          ...state.user,
          [action.field]: action.value
        }
      };
    case 'FOCUS':
      return {
        ...state,
        error: {
          ...state.error,
          [action.field]: ''
        }
      };
    case 'SUBMIT':
      return {
        ...state,
        loading: true,
        user: {
          ...state.user
        }
      };
    case 'ERROR':
      return {
        ...state,
        loading: false,
        error: {
          ...state.error
        }
      };
    default:
      return state;
  }
}

const vehicles = [
  {
    value: 'bmw',
    label: 'BMW',
  },
  {
    value: 'audi',
    label: 'AUDI',
  },
  {
    value: 'porsche',
    label: 'PORSCHE',
  }
];

export default function AppraisalForm () {
  const classes = useStyles();
  const [state, dispatch] = useReducer(appraisalReducer, {
    loading: false,
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
    }
  });

  const handleSubmit = async (event: React.FormEvent<HTMLInputElement | HTMLFormElement>) => {
    event.preventDefault();
    dispatch({ type: 'SUBMIT', state });
    // try {
    //   const { email, password } = state;
    //   console.log('SUBMIT', email, password)
    //   const response = await fetch('/api/authenticate/signin', {
    //     method: 'POST',
    //     body: JSON.stringify({ email, password })
    //   });
    //   dispatch({ type: 'SUCCESS', state });
    // } catch (err) {
    //   return dispatch({ type: 'ERROR', state });
    // }
  }

  function handleChange (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) {
    return dispatch({
      type: 'CHANGE',
      field: event.target.name,
      payload: event.target.value
    });
  }

  const handleFocus = (field: string) => {
    return dispatch({
      type: 'FOCUS',
      field
    });
  }

  return (
    <Grid item xs={7} sx={{ margin: '0 auto' }}>
      <FormControl component='form' onSubmit={handleSubmit} autoComplete='off' fullWidth>
        <AppraisalTextfield
          label='Age of the driver'
          autoFocus
          sx={{ width: 80 }}
          id='driverAge'
          value={state.appraisal.driverAge}
          error={!!state.error.driverAge}
          disabled={state.loading}
          placeholder='31'
          size='small'
          onChange={e => handleChange(e, 'driverAge')}
          onFocus={() => handleFocus('driverAge')}
        />
        <AppraisalTextfield
          label='Car'
          autoFocus
          fullWidth
          id='car'
          select
          value={vehicles[0].value}
          error={!!state.error.driverAge}
          disabled={state.loading}
          placeholder='31'
          onChange={e => handleChange(e, 'driverAge')}
          onFocus={() => handleFocus('driverAge')}
          SelectProps={{
            native: false,
            IconComponent: CustomChevron
          }}
        >
          {vehicles.map((option) => (
            <ListItem key={option.value} value={option.value}>
              {option.label}
            </ListItem>
          ))}
        </AppraisalTextfield>
        <AppraisalTextfield
          label='Purchase Price'
          autoFocus
          sx={{ width: 80 }}
          placeholder=''
          id='purchasePrice'
          type='text'
          value={state.appraisal.purchasePrice}
          error={!!state.error.purchasePrice}
          disabled={state.loading}
          onChange={e => handleChange(e, 'purchasePrice')}
          onFocus={() => handleFocus('purchasePrice')}
          endAdornment={<span className={classes.euro}>{'€'}</span>}
        />
        <Grid container alignItems='center' className={classes.textfield}>
          <Grid item xs={4}>
          </Grid>
          <Grid item xs={8}>
            <Button
              disabled={state.loading}
              variant='contained'
              className={classes.cta}
              type='submit'
              startIcon={state.loading && <CircularProgress size={20} color='inherit' />}
            >
              Get a price
            </Button>
          </Grid>
        </Grid>
      </FormControl>
    </Grid>
  );
}

const CustomChevron = () => <KeyboardArrowDown sx={{ fill: '#31cfda' }} />;
