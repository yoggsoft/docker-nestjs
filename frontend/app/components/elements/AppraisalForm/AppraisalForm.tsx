import React, { useReducer, useState } from 'react';
import {
  Button,
  FormControl,
  CircularProgress,
  MenuItem,
  Grid
} from '@mui/material';
import { KeyboardArrowDown } from '@mui/icons-material';
import { makeStyles } from "@mui/styles";
import AppraisalTextfield from './AppraisalTextField';
import { isValidAge, isNumber } from '../../../utils/utils';
import axios from 'axios';

const useStyles = makeStyles({
  textfield: {
    marginBottom: 20
  },
  cta: {
    minWidth: 160,
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
  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        appraisal: {
          ...state.appraisal,
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
        loading: true
      };
    case 'ERROR':
      return {
        ...state,
        loading: false,
        error: {
          ...state.error,
          ...action.payload.error
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

  const handleSubmit = (event: React.FormEvent<HTMLInputElement | HTMLFormElement>) => {
    event.preventDefault();
    dispatch({ type: 'SUBMIT' });
    console.log('submit');
    try {
      axios.post('/api/appraisal/quote', {
        ...state
      }).then(
        res => {
          console.log({res});
          if (res.data.valid) {
            dispatch({ type: 'SUCCESS', payload: res.data });
            // window.location.href = res.data.redirect;
          } else {
            dispatch({ type: 'ERROR', payload: res.data });
          }
        }
      ).catch(
        (err) => {
          dispatch({ type: 'ERROR', state });
        }
      );
    } catch (err) {
      return dispatch({ type: 'ERROR', state });
    }
  }

  const handleChangeDriverAge = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (isValidAge(event.target.value)) {
      dispatch({ type: 'CHANGE', value: event.target.value, field: 'driverAge' });
    }
  }

  const handleCarChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch({ type: 'CHANGE', value: event.target.value, field: 'car' });
  }

  const handleChangePurchasePrice = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (isNumber(event.target.value)) {
      dispatch({ type: 'CHANGE', value: event.target.value, field: 'purchasePrice' });
    }
  }

  const handleFocus = (field: string) => {
    dispatch({
      type: 'FOCUS',
      field
    });
  }

  return (
    <Grid item xs={7} sx={{ margin: '0 auto' }}>
      <FormControl component='form' onSubmit={handleSubmit} autoComplete='off' fullWidth>
        <AppraisalTextfield
          label='Age of the driver'
          sx={{ width: 80 }}
          id='driverAge'
          value={state.appraisal.driverAge}
          error={!!state.error.driverAge}
          disabled={state.loading}
          onChange={handleChangeDriverAge}
          onFocus={() => handleFocus('driverAge')}
        />
        <AppraisalTextfield
          label='Car'
          fullWidth
          id='car'
          select
          value={state.appraisal.car}
          error={!!state.error.car}
          helperText={state.error.car}
          disabled={state.loading}
          onChange={e => handleCarChange(e)}
          onFocus={() => handleFocus('car')}
          SelectProps={{
            native: false,
            IconComponent: CustomChevron
          }}
        >
          {vehicles.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </AppraisalTextfield>
        <AppraisalTextfield
          label='Purchase Price'
          sx={{ width: 80 }}
          placeholder=''
          id='purchasePrice'
          error={!!state.error.purchasePrice}
          helperText={state.error.purchasePrice}
          value={state.appraisal.purchasePrice}
          disabled={state.loading}
          onChange={handleChangePurchasePrice}
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
