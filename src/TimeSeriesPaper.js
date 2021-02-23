import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Draggable from 'react-draggable';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import ruLocale from "date-fns/locale/ru";

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
        selectedParameterData: data[props.id][dataKeys[0]],
        startDate: new Date('1958-02-01T00:00:00'),
        endDate: new Date('1958-02-28T00:00:00')    
        });

    const setSelectedParameter = (event) => {
        console.log(event.target)
        var name=event.target.value
        setState({...state, selectedParameterName: name,
                            selectedParameterData: data[props.id][name],
        });
        };
    
    const returnItemsList=()=>{       
        const list = dataKeys.map((key)=>{
            return <MenuItem value={key}>{key}</MenuItem>
        })      
        return list
    }

    const setStartDate=(date)=>{
        setState({...state, startDate: date});
    }

    const setEndDate=(date)=>{
        setState({...state, endDate: date});
    }

    return (
        <div >
            <Draggable handle=".handle" defaultPosition={{ x: 400, y: 200 }}>
                <Paper style={{ width: '40vw', height: '60vh', padding: '5px 10px' }}>
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
                    <div className="handle" style={{ width: '100%'}}>
                        <Typography variant="body1" component="span" style={{fontSize: '2vh'}}>
                            <i>{props.description}</i>
                        </Typography>
                    </div>
                    <Divider />
                    <div style={{ width: '100%'}}>
                        <div style={{ width: '39%', display:'inline-block', margin: '12px 1% 0 0' }}>
                            <Typography variant="body2" component="div" >
                                Измеренный показатель:
                            </Typography>
                            <FormControl style={{ width: '100%'}}>
                                <Select
                                value={state.selectedParameterName}
                                onChange={setSelectedParameter}
                                >
                                {returnItemsList()}
                                </Select>
                            </FormControl>
                        </div>                           
                            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
                                <KeyboardDatePicker  style={{ width: '29%', display:'inline-block', marginRight: '10px'}}
                                disableToolbar
                                autoOk
                                disableFuture
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                label="Начало периода"
                                value={state.startDate}
                                onChange={setStartDate}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                />
                                <KeyboardDatePicker  style={{ width: '29%', display:'inline-block'}}
                                disableToolbar
                                autoOk
                                disableFuture
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                label="Конец периода"
                                value={state.endDate}
                                onChange={setEndDate}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                />
                            </MuiPickersUtilsProvider> 
                        <TimeSeriesChart name={state.selectedParameterName} data={state.selectedParameterData} lables={data[props.id]['Дата']}/>
                    </div>
                </Paper>
            </Draggable>
        </div>
    );
}