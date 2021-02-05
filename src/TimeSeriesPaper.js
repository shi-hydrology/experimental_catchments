import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';

export default function TimeSeriesPaper() {
  
    return (
        <Draggable handle=".handle" defaultPosition={{x: 400, y: 200}}>
            <Paper className="handle" style={{width: '200px', height: '200px', cursor: 'move'}}/>
        </Draggable>
    );
  }