import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Draggable from 'react-draggable';

export default function TimeSeriesPaper(props) {
  
    return (
        <Draggable handle=".handle" defaultPosition={{x: 400, y: 200}} style={{position: 'relative'}}>
            <Paper style={{width: '40vw', height: '40vh', padding: '5px 10px'}}>
                <div className="handle" style={{width:'100%', height:'40px', cursor: 'move', }}>
                        <Typography variant="body1" component="div" style={{display: 'inline-block', width: '90%'}}>
                            <b>{props.title}</b>
                        </Typography>
                    <div style={{width: '10%', justifyContent: 'flex-end', display: 'inline-block'}}>
                        <IconButton onClick={()=>{props.closePaper(props.id)}}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                </div>
                <Divider />
                <div className="handle" style={{width:'100%'}}>
                        <Typography variant="body1" component="div" >
                            <i>{props.description}</i>
                        </Typography>
                </div>
                <Divider />
            </Paper>
        </Draggable>
    );
  }