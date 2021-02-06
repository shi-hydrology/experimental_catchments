import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';

export default function TimeSeriesPaper(props) {
  
    return (
        <Draggable handle=".handle" defaultPosition={{x: 400, y: 200}}>
            <Paper style={{width: '200px', height: '200px'}}>
                <div className="handle" style={{width:'100%', height:'40px', cursor: 'move'}}>
                    {props.title}
                </div>
            </Paper>
        </Draggable>
    );
  }