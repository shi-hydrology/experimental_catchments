import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles(theme => ({
  margin: {
    margin: '0 0 0 0',
    fontSize: 11,
    
  },

}));

export default function LayersCheckbox(props) {
  const classes = useStyles();
  const type_name=props.type_name
  const [state, setState] = React.useState({
      
      });
  
  
  const handleChange = (type_name) => event => {
    setState({ ...state, [type_name]: event.target.checked });
    props.setCheckedLayers(type_name, event.target.checked)
  };
  
  return (
    
      <FormControlLabel className={classes.margin}
        control={
          <Checkbox
            checked={state[type_name]}
            onChange={handleChange(type_name)}
            value={type_name}
          />
        }
      label={props.name}
      />
      
      )
    }