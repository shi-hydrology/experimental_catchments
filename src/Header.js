import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';

import colors from './palette.js' 

export default function Header(props) {
    return (
        <div>
          <AppBar position="static" style={{flexGrow: 1, background: colors.blue2, color: '#ffffff', height: '7vh', padding: 0}} >
            <Toolbar style={{height:'7vh', minHeight:0}}>
    
            <ButtonBase onClick={()=>console.log('click')}>
                <img src='https://raw.githubusercontent.com/ChrisLisbon/RDE_SHI_frontend/master/src/shi_round.png' alt="logo"  style={{height: '6vh', width: '6vh', margin: '0.5 0'}}/>
            </ButtonBase>
                
              <div style={{flexGrow: 1}}>
              <Typography  style={{flexGrow: 1, fontSize: '2.5vh', margin: '0 1vw '}} >
                Экспериментальные водотоки
              </Typography>
              <Typography  style={{fontSize: '1.7vh', flexGrow: 1, margin: '0 1vw ', padding: 0}}>
                Государственный Гидрологический Институт
              </Typography>
              </div>

              <Button wrapped color="inherit" href='#'>
                        <span style={{ fontSize: '1.7vh' }}>Архив</span>
              </Button>
              
              
            </Toolbar>
          </AppBar>
        </div>
      );
    }