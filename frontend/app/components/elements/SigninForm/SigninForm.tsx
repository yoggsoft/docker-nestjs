import React, { useReducer } from 'react';
import {
  Button,
  FormGroup,
  FormControl,
  FormControlLabel,
  Checkbox,
  TextField,
  Typography,
  CircularProgress
} from '@mui/material';
import MuiLink from '@mui/material/Link';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { makeStyles } from "@mui/styles";
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  textfield: {
    marginBottom: 30,
    '& .MuiFormHelperText-root': {
      position: 'absolute',
      marginBottom: -20,
      bottom: 0
    }
  },
  cta: {
    backgroundColor: '#317bda',
    textTransform: 'inherit',
    fontWeight: 600,
    minHeight: 48,
    marginTop: 20
  },
  checkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  link: {
    fontWeight: 500,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  greeting: {
    height: 28,
    fontSize: 18,
    lineHeight: 1.56,
    margin: '0 81px 20px 66px',
    textAlign: 'center',
    color: '#5b7289'
  }
}));

function signupReducer (state: any, action: any) {
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
          ...state.user,
          remember: !!state.user.remember
        }
      };
    case 'SUCCESS':
      return {
        ...state,
        loading: false,
        user: {
          ...state.user,
        }
      };
    case 'REMEMBER':
      return {
        ...state,
        user: {
          ...state.user,
          remember: !state.user.remember
        }
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

export default function SigninForm () {  
  const router = useRouter();
  const classes = useStyles();
  const [state, dispatch] = useReducer(signupReducer, {
    loading: false,
    user: {
      email: '',
      password: '',
      remember: false
    },
    error: {
      email: '',
      password: '',
      remember: false,
      global: ''
    }
  });

  const handleSubmit = (event: React.FormEvent<HTMLInputElement | HTMLFormElement>) => {
    event.preventDefault();
    dispatch({ type: 'SUBMIT' });
    try {
      axios.post('/api/authenticate/signin', {
        ...state
      }).then(
        res => {
          if (res.data.valid) {
            dispatch({ type: 'SUCCESS', payload: res.data });
            router.push(res.data.redirect);
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
      fullWidth
      autoComplete='off'
    >
      <Typography className={classes.greeting}>Welcome at Qover</Typography>
      <TextField
        autoFocus
        id='email'
        label='Email'
        type='text' // should be 'email'
        value={state.user.email}
        error={!!state.error.email}
        disabled={state.loading}
        helperText={state.error.email}
        placeholder=''
        fullWidth
        variant='standard'
        className={classes.textfield}
        onChange={e => handleChange(e, 'email')}
        onFocus={() => handleFocus('email')}
        InputLabelProps={{
          shrink: true
        }}
      />
      <TextField
        id='password'
        label='Password'
        type='password'
        value={state.user.password}
        error={!!state.error.password}
        helperText={state.error.password}
        disabled={state.loading}
        placeholder=''
        fullWidth
        variant='standard'
        className={classes.textfield}
        onChange={e => handleChange(e, 'password')}
        onFocus={() => handleFocus('password')}
        InputLabelProps={{
          shrink: true
        }}
      />
      <FormGroup
        className={classes.checkContainer}
      >
        <FormControlLabel
          control={
            <Checkbox
              disabled={state.loading}
              checked={!!state.user.remember}
              onChange={() => dispatch({ type: 'REMEMBER'  })}
              color='primary'
            />
          }
          label={'Remember me'}
        />
        <Link href='#' passHref>
          <MuiLink href='#' className={classes.link}>Forgot your password?</MuiLink>
        </Link>
      </FormGroup>
      <Button
        disabled={state.loading}
        variant='contained'
        className={classes.cta}
        type='submit'
        startIcon={state.loading && <CircularProgress size={20} color='inherit' />}
      >
        Sign in to your account
      </Button>
    </FormControl>
  );
}
