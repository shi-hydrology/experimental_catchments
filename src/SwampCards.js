import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'

import img from "./images/background.png";
import {frontend_settings} from './server_settings.js' 

const useStyles = makeStyles({
	root: {
	  maxWidth: 345,
	},
	media: {
	  height: 140,
	},
  });

  export default function SwampCards() {
    const classes = useStyles();
  
    return (
      <div style={{display:'inline-block'}}>
        <Link underline='none' component={RouterLink} to={'/lammin_suo'} target='_blank'>
        <Card className={classes.root}>
            <CardHeader title="Озеро Ламмин-Суо" />
            <CardMedia
              className = {classes.media}
              image = {img}
              title = "Озеро Ламмин-Суо"
            />
            
        </Card>
        </Link>
        <Link underline='none' component={RouterLink} to={'/belorussian'} target='_blank'>
        <Card className={classes.root}>
            <CardHeader title="Белорусское озеро" />
            <CardMedia
              className = {classes.media}
              image = {img}
              title = "Белорусское озеро"
            />
            
        </Card>
        </Link>
      </div>
    );
  }