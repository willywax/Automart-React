import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { InputLabel, Slider, Button } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    border: 1,
    borderStyle: 'solid',
    borderColor: '#505050',
    padding: 10,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    width: 250,
    padding: 10,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  select: {
    height: 40
  },
  inputLabel: {
    width: 250,
    fontSize: 13
  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: '#f76e43',
    fontWeight: 800,
    color: 'white'
  },
  slider: {
    marginTop: theme.spacing(4),
  }
}));

function valuetext(value) {
  return `${value}°C`;
}


function Filter() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
    manufacturer: 'Any Manufacturer',
    model: 'Any Model',
    type: '',
    state: '',
    minYear: '2019/10/10',
    maxYear: ''
  });


  const [value, setValue] = React.useState([20, 37]);

  const handlePriceChange = (event, newValue) => {
    setValue(newValue);
  };


  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  return (
    <div className={classes.root}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel className={classes.inputLabel}>SELECT MANUFACTURER</InputLabel>
        <Select
          native
          className={classes.select}
          value={state.manufacturer}
          onChange={handleChange('manufacturer')}
          inputProps={{
            name: 'age',
            id: 'filled-age-native-simple',
          }}
        >
          <option value="Any Make" />
          <option value="Benz">Benz</option>
          <option value="Toyota">Toyota</option>
          <option value="Nissan">Nissan</option> />
            </Select>
      </FormControl>

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel className={classes.inputLabel}>SELECT A MODEL</InputLabel>
        <Select
          native
          className={classes.select}
          value={state.model}
          onChange={handleChange('model')}
        >
          <option value="Any Model" />
          <option value="Model 1">Model 1</option>
          <option value="Model 2">Model 2</option>
          <option value="Model 3">Model 3</option>
        </Select>
      </FormControl>

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel className={classes.inputLabel}>SELECT A TYPE</InputLabel>
        <Select
          native
          className={classes.select}
          value={state.type}
          onChange={handleChange('type')}
        >
          <option value="Any Model" />
          <option value="Model 1">Model 1</option>
          <option value="Model 2">Model 2</option>
          <option value="Model 3">Model 3</option>
        </Select>
      </FormControl>

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel className={classes.inputLabel}>SELECT A STATUS</InputLabel>
        <Select
          native
          className={classes.select}
          value={state.status}
          onChange={handleChange('status')}
        >
          <option value="Any Model" />
          <option value="Model 1">Model 1</option>
          <option value="Model 2">Model 2</option>
          <option value="Model 3">Model 3</option>
        </Select>
      </FormControl>

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel className={classes.inputLabel}>SELECT MIN YEAR</InputLabel>
        <Select
          native
          className={classes.select}
          value={state.minYear}
          onChange={handleChange('minYear')}
        >
          <option value="Any Model" />
          <option value="Model 1">Model 1</option>
          <option value="Model 2">Model 2</option>
          <option value="Model 3">Model 3</option>
        </Select>
      </FormControl>

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel className={classes.inputLabel}>SELECT MAX YEAR</InputLabel>
        <Select
          native
          className={classes.select}
          value={state.maxYear}
          onChange={handleChange('maxYear')}
        >
          <option value="Any Model" />
          <option value="Model 1">Model 1</option>
          <option value="Model 2">Model 2</option>
          <option value="Model 3">Model 3</option>
        </Select>
      </FormControl>

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel className={classes.inputLabel}>PRICE RANGE</InputLabel>
        <Slider
          className={classes.slider}
          value={value}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          getAriaValueText={valuetext}
        />
      </FormControl>
      
      <FormControl variant="outlined" className={classes.formControl}>
      <Button variant="contained"  className={classes.button}>
        SUBMIT FILTERS
      </Button>
      </FormControl>
    </div>
  );
}

export default Filter;