import React, { ReactNode } from 'react';
import FormControl from '@material-ui/core/FormControl';
import OutlinedTextField, { OutlinedTextFieldProps } from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const textFieldClasses = makeStyles(theme => ({
  formControl: {
    marginBottom: theme.spacing(2.5)
  },
  label: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 24,
    marginBottom: theme.spacing(1)
  },
  helperText: {
    position: 'absolute',
    bottom: theme.spacing(2.5) * -1
  }
}));

export interface ITextFieldProps extends Omit<OutlinedTextFieldProps, 'variant'> {
  label: string | ReactNode,
  [others: string]: any
}

export default function TextField ({
  label,
  ...others
}: ITextFieldProps) {
  const classes = textFieldClasses();
  return (
    <FormControl className={classes.formControl}>
      <label htmlFor={others.id} className={classes.label}>
        {label}
      </label>
      <OutlinedTextField
        {...others}
        variant='outlined'
        FormHelperTextProps={{ className: classes.helperText }}
      />
    </FormControl>
  );
}
