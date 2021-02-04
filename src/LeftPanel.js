import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import clsx from 'clsx';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import LayersCheckbox from './LayersCheckbox.js'

import station_layers from './data/station_layers.js'

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    height: '50vh', 
    margin: '20vh 0 0 0'
  },
  drawerPaper: {
    width: drawerWidth,
    height: '50vh',
    margin: '20vh 0 0 0',
    borderRadius: "25px",
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  menuButton: {
    margin: '14vh 0 0 0',
    position: 'relative',
    zIndex: 10, 
    background: 'rgba(255, 255, 255, 0.9)',
    height: '50px',
    width:'50px'
 },
  
}));

export default function LeftPanel(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [state, setState] = React.useState({
    open: true,
  });

  const handleDrawerOpen = () => {
    setState({ ...state, open: true});
  };

  const handleDrawerClose = () => {
    setState({ ...state, open: false});
  };

  const returnCheckboxes=()=>{
    var active_layers=[]
    for (var layer in station_layers){
      var rus_name=station_layers[layer].rus_name
      var type_name=station_layers[layer].type_name
      active_layers.push(<LayersCheckbox name={rus_name} type_name={type_name} setCheckedLayers={(type_name, value)=>props.setCheckedLayers(type_name, value)}/>)
    }
      return active_layers
    }
  

  return (
    <div className={classes.root}>      
      <Tooltip placement="right" title="Управление слоями">
        <IconButton
            color="inherit"
            onClick={()=>handleDrawerOpen()}
            edge="start"
            className={clsx(classes.menuButton, state.open && classes.hide)}
        >
        <ChevronRightIcon />
        </IconButton>
      </Tooltip>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={state.open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
      <div className={classes.drawerHeader}>
        <div style={{width: '100%', justifyContent: 'flex-start', padding: '20px'}}>
          <Typography variant="body1" component="p">Управление слоями</Typography>
        </div>
        <Tooltip placement="right" title="Скрыть">
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </Tooltip>
      </div>
      <Divider />
        {returnCheckboxes()}
      </Drawer>
    </div>
  );
}