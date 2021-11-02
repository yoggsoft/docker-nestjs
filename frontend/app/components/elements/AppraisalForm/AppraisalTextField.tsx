import {
	Grid,
  TextField,
  OutlinedTextFieldProps
} from '@mui/material';
import { ReactNode } from 'react';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
  textfield: {
    marginBottom: 20
  },
	inputLabel: {
    color: '#484848'
  },
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
    <Grid container alignItems='center' className={classes.textfield}>
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
