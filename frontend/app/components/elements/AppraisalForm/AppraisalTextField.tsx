import {
	Grid,
  TextField,
  OutlinedTextFieldProps
} from '@mui/material';
import classnames from 'classnames';
import { ReactNode } from 'react';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
  textfield: {
    marginBottom: 30,
    '& .MuiFormHelperText-root': {
      position: 'absolute',
      fontWeight: 500,
      fontSize: 15,
      marginBottom: -25,
      bottom: 0,
      marginLeft: 0,
      minWidth: 320
    }
  },
	inputLabel: {
    fontSize: 15,
    color: '#484848'
  },
  error: {
    color: '#ee3d57'
  }
}));

interface TAppraisalTextfieldProps extends Omit<OutlinedTextFieldProps, 'variant'> {
  label: string,
  endAdornment?: ReactNode | null,
  [others: string]: any
}

export default function AppraisalTextfield ({
	label,
	endAdornment,
	...others
}: TAppraisalTextfieldProps) {
  const classes = useStyles();
  return (
    <Grid
      container
      alignItems='center'
      className={classnames(
        classes.textfield,
        {
          [classes.error]: others.error
        }
      )}
    >
      <Grid item xs={4}>
        <label  className={classes.inputLabel} htmlFor={others.id}>
          {label}
        </label>
      </Grid>
      <Grid item xs={8}>
        <TextField
          {...others}
          size='small'
          placeholder=''
          variant='outlined'
        >
          {others.children}
        </TextField>
        {endAdornment}
      </Grid>
    </Grid>
  );
}
