import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';

import img from "./images/background.png";

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
      <Card className={classes.root}>
          <CardHeader title="Озеро Ламмин-Суо" />
          <CardMedia
            className = {classes.media}
            image = {img}
			      title = "Озеро Ламмин-Суо"
          />
          
      </Card>
    );
  }