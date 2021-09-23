import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';

//import w_img from "./images/waiting.jpg";
import w_img from "./images/developing.gif";
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


  export function FetchData(){
    return fetch('http://localhost:8080/test',
    {
    	method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((responseData) => {
      console.log(responseData);
      return responseData;
    })
    .catch(error => console.warn(error));
  }


  let superduper = FetchData();
  console.log('SuperDuperResponce\n', superduper)



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
