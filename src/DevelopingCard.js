import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';

import w_img from "./images/waiting.jpg";

const useStyles = makeStyles({
	root: {
    margin: '30vh 40vw',
    maxWidth: 350,
    width:350,
    padding: 20,
	},
	media: {
	  height: 150,
	},
  });

  export default function DevelopingCard() {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
          <CardHeader title="Страница в разработке..." style={{height: '12px'}}/>
          <CardMedia
            className = {classes.media}
            image = {w_img}
            title = "Страница в разработке"
          />      
     </Card>
    );
  }