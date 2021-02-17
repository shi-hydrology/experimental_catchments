import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Draggable from 'react-draggable';

import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import TimeSeriesChart from './TimeSeriesChart.js'
import {data} from './data/daily.js'

export default function TimeSeriesPaper(props) {
    const dataKeys=Object.keys(data[props.id])
    dataKeys.shift()

    const [state, setState] = React.useState({      
        selectedParameterName: dataKeys[0],        
        });

    const setSelectedParameter = (event) => {
        console.log(event.target)
        setState({...state, selectedParameterName: event.target.value});
        };
    
    const returnItemsList=()=>{       
        
        const list = dataKeys.map((key)=>{
            return <MenuItem value={key}>{key}</MenuItem>
        })      
        
        
        return list
    }

    return (
        <div >
            <Draggable handle=".handle" defaultPosition={{ x: 400, y: 200 }}>
                <Paper style={{ width: '40vw', height: '600px', padding: '5px 10px' }}>
                    <div className="handle" style={{ width: '100%', height: '40px', cursor: 'move', }}>
                        <Typography variant="body1" component="div" style={{ display: 'inline-block', width: '90%' }}>
                            <b>{props.title}</b>
                        </Typography>
                        <div style={{ width: '10%', justifyContent: 'flex-end', display: 'inline-block' }}>
                            <IconButton onClick={() => { props.closePaper(props.id) }}>
                                <CloseIcon />
                            </IconButton>
                        </div>
                    </div>
                    <Divider />
                    <div className="handle" style={{ width: '100%' }}>
                        <Typography variant="body1" component="div" >
                            <i>{props.description}</i>
                        </Typography>
                    </div>
                    <Divider />
                    <br />
                    <div style={{ width: '100%' }}>
                        <Typography variant="body2" component="div" >
                            Измеренный показатель:
                        </Typography>
                        <FormControl style={{ width: '50%' }}>
                            <Select
                            value={state.selectedParameterName}
                            onChange={setSelectedParameter}
                            >
                            {returnItemsList()}
                            </Select>
                        </FormControl>
                        <TimeSeriesChart data={data[props.id][state.selectedParameterName]} lables={data[props.id]['Дата']}/>
                    </div>
                </Paper>
            </Draggable>
        </div>
    );
}