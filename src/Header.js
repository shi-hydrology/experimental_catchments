import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonBase from '@material-ui/core/ButtonBase';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import colors from './palette.js'
import img from "./images/shi_round.png";
import {frontend_settings} from './server_settings.js' 

export default function Header(props) {

  const [state, setState] = React.useState({
    anchorEl: null
  });

  const closeList=(event, index)=>{
    if (index==0){
      window.open('http://'+ frontend_settings.host+ ':'+frontend_settings.port+'/lammin_suo', '_blank');
    }
    if (index==1){
      window.open('http://'+ frontend_settings.host+ ':'+frontend_settings.port+'/belorussian', '_blank');
    }
    setState({ ...state, anchorEl: null });
  }

  const openList=(event)=>{
    setState({ ...state, anchorEl: event.currentTarget });
  }

  const mainWindowOpen=()=>{
    window.open('http://'+ frontend_settings.host+ ':'+frontend_settings.port, "_self");
  } 

  const options = [
    'Озеро Ламмин-Суо',
    'Белорусское болото',
  ];

  return (
    <div>
      <AppBar position="static" style={{flexGrow: 1, background: colors.blue2, color: '#ffffff', height: '7vh', padding: 0}} >
        <Toolbar style={{height:'7vh', minHeight:0}}>

        <ButtonBase onClick={()=>mainWindowOpen()}>
            <img src={img} alt="logo"  style={{height: '6vh', width: '6vh', margin: '0.5 0'}}/>
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
            <Button wrapped color="inherit" endIcon={<ExpandMoreIcon/>} onClick={(event)=>openList(event)}>
              <span style={{ fontSize: '1.7vh' }}>Водосборы</span>            
            </Button>

            <Menu style={{margin:'4vh 0 0'}}
              keepMounted
              anchorEl={state.anchorEl}
              open={Boolean(state.anchorEl)}
              onClose={closeList}
            >              
              {options.map((option, index) => (
                <MenuItem
                  key={option}
                  onClick={(event) => closeList(event, index)}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>

            <Button wrapped color="inherit" href={'http://'+ frontend_settings.host+ ':'+frontend_settings.port+'/documentation'}>
              <span style={{ fontSize: '1.7vh' }}>Документация</span>            
            </Button>
            <Button wrapped color="inherit" href={'http://'+ frontend_settings.host+ ':'+frontend_settings.port+'/about'}>
              <span style={{ fontSize: '1.7vh' }}>О проекте</span>            
            </Button>       
            <Button wrapped color="inherit" href={'http://'+ frontend_settings.host+ ':'+frontend_settings.port+'/archive'}>
              <span style={{ fontSize: '1.7vh' }}>Архивные данные</span>
            </Button>
          </div>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}