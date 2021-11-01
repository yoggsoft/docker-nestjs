import React, { useReducer } from 'react';
import {
  Button,
  FormControl,
  TextField,
  CircularProgress
} from '@mui/material';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
  textfield: {
    marginBottom: 20
  },
  cta: {
    backgroundColor: '#31cfda',
    textTransform: 'inherit',
    fontWeight: 600,
    minHeight: 48,
    marginTop: 20
  },
  link: {
    fontWeight: 500,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
}));

function appraisalReducer (state: any, action: any) {
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
      driverAge: 0,
      car: '',
      purchasePrice: 0
    },
    error: {
      driverAge: '',
      car: '',
      purchasePrice: ''
    }
  });

  const handleSubmit = async (event: React.FormEvent<HTMLInputElement | HTMLFormElement>) => {
    event.preventDefault();
    dispatch({ type: 'SUBMIT', state });
    try {
      const { email, password } = state;
      console.log('SUBMIT', email, password)
      const response = await fetch('/api/authenticate/signin', {
        method: 'POST',
        body: JSON.stringify({ email, password })
      });
      dispatch({ type: 'SUCCESS', state });
    } catch (err) {
      return dispatch({ type: 'ERROR', state });
    }
  }

  function handleChange (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, field: string) {
    return dispatch({ type: 'CHANGE', value: event.target.value, field });
  }

  const handleFocus = (field: string) => {
    return dispatch({ type: 'FOCUS', field });
  }
  return (
    <FormControl
      component='form'
      onSubmit={handleSubmit}
      autoComplete='off'
    >
      <TextField
        autoFocus
        id='driverAge'
        type='text'
        value={state.appraisal.driverAge}
        error={!!state.error.driverAge}
        disabled={state.loading}
        placeholder='31'
        variant='outlined'
        className={classes.textfield}
        onChange={e => handleChange(e, 'driverAge')}
        onFocus={() => handleFocus('driverAge')}
        InputLabelProps={{
          shrink: true
        }}
      />
      <TextField
          id='car'
          select
          value={state.appraisal.car}
          className={classes.textfield}
          // onChange={handleChange}
          SelectProps={{
            native: true
          }}
          variant='outlined'
        >
        {vehicles.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
      <TextField
        id='purchasePrice'
        type='text'
        value={state.appraisal.purchasePrice}
        error={!!state.error.purchasePrice}
        disabled={state.loading}
        placeholder=''
        variant='outlined'
        className={classes.textfield}
        onChange={e => handleChange(e, 'purchasePrice')}
        onFocus={() => handleFocus('purchasePrice')}
        InputLabelProps={{
          shrink: true
        }}
      />
      <Button
        disabled={state.loading}
        variant='contained'
        className={classes.cta}
        type='submit'
        startIcon={state.loading && <CircularProgress size={20} color='inherit' />}
      >
        Get a price
      </Button>
    </FormControl>
  );
}
