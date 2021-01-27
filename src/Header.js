import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import colors from './palette.js' 

export default function Header(props) {

  const [state, setState] = React.useState({
    swampListOpen: false
  });

  const setSwampListOpen=(event)=>{
    setState({ ...state, swampListOpen: true });
  }

  const setSwampListClose=(event)=>{
    setState({ ...state, swampListOpen: false });
  }

  const returnSwampItems=()=>{
    if (state.swampListOpen==true){
      return <div style={{height: '100px', width: '100px', background:'red'}}>
        <p>im alive</p>
      </div>
    }
  }

  return (
    <div>
      <AppBar position="static" style={{flexGrow: 1, background: colors.blue2, color: '#ffffff', height: '7vh', padding: 0}} >
        <Toolbar style={{height:'7vh', minHeight:0}}>

        <ButtonBase onClick={()=>console.log('click')}>
            <img src='https://raw.githubusercontent.com/ChrisLisbon/RDE_SHI_frontend/master/src/shi_round.png' alt="logo"  style={{height: '6vh', width: '6vh', margin: '0.5 0'}}/>
        </ButtonBase>
            
          <div style={{flexGrow: 1}}>
          <Typography  style={{flexGrow: 1, fontSize: '2.5vh', margin: '0 1vw '}} >
            Экспериментальные водосборы
          </Typography>
          <Typography  style={{fontSize: '1.7vh', flexGrow: 1, margin: '0 1vw ', padding: 0}}>
            Государственный Гидрологический Институт
          </Typography>
          </div>

          <div style={{flexGrow: 3}}>
            <Button wrapped color="inherit" endIcon={<ExpandMoreIcon/>} >
              <span style={{ fontSize: '1.7vh' }}>Водосборы</span>            
            </Button>
            <Button wrapped color="inherit" href='https://docs.google.com/document/d/1ypX0_GwKSKtDZJIolB54_Xmwn0wxbII0zEQMkpTd-HU/edit#heading=h.khx6aa9k6ye4' target="_blank">
              <span style={{ fontSize: '1.7vh' }}>Документация</span>            
            </Button>
            <Button wrapped color="inherit">
              <span style={{ fontSize: '1.7vh' }}>О проекте</span>            
            </Button>       
            <Button wrapped color="inherit" href='#'>
              <span style={{ fontSize: '1.7vh' }}>Архивные данные</span>
            </Button>
          </div>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}