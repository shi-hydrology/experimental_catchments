import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'

import l_img from "./images/l_img.jpg";
import b_img from "./images/b_img.jpg";

const useStyles = makeStyles({
	root: {
    maxWidth: 350,
    width:350
	},
	media: {
	  height: 150,
	},
  });

  export default function SwampCards() {
    const classes = useStyles();
  
    return (
      <div>
        <Link style={{display:'inline-block', padding: '0 5px'}} underline='none' component={RouterLink} to={'/lammin_suo'} target='_blank'>
        <Card className={classes.root}>
            <CardHeader title="Болото Ламмин-Суо" style={{height: '12px'}}/>
            <CardMedia
              className = {classes.media}
              image = {l_img}
              title = "Озеро Ламмин-Суо"
            />
            
        </Card>
        </Link>
        <Link style={{display:'inline-block'}} underline='none' component={RouterLink} to={'/belorussian'} target='_blank'>
        <Card className={classes.root}>
            <CardHeader title="Белорусское озеро" style={{height: '12px'}}/>
            <CardMedia
              className = {classes.media}
              image = {b_img}
              title = "Белорусское озеро"
            />
            
        </Card>
        </Link>
      </div>
    );
  }