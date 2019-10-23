import React from 'react';
import {  withStyles } from '@material-ui/core/styles';
import { Button, TextField, Checkbox } from '@material-ui/core';
import '../styles/login.scss';

const ColorButton = withStyles(theme => ({
    root: {
      color: '#ffffff',
      marginTop: 40,
      margin: 30,
      height: 50,
      borderRadius: 20,
      fontWeight: 700,
      backgroundColor: '#f76e43',
      '&:hover': {
        backgroundColor: '#f76b43',
      },
    },
  }))(Button);
  
  const OrangeTextField = withStyles({
    root: {
      '& label.Mui-focused': {
        color: '#f76e43',
      },
      '&:hover fieldset': {
        borderColor: 'green',
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: '#f76e43',
      },
    },
  })(TextField);

  const OrangeCheckbox = withStyles({
    root: {
        color: '#f76e43',
        '&$checked': {
            color: '#f76e43'[600],
        },
    },
    checked: {},
})(props => <Checkbox color="default" {...props} />);


  export  { OrangeTextField, ColorButton, OrangeCheckbox }