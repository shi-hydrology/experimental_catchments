import React, {Component} from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Chart from "react-apexcharts";
// import ElStupidoChart from './elStupidoChart.js'
// import './App.css'
import Header from './Header.js'



export default class TestFuckingPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: "basic-bar"
                },
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
                }
            },
            series: [{
                name: "series-1",
                data: [30, 40, 45, 50, 49, 60, 70, 91]
            }]
        };
    }
    render(){return(
            <div>
            <Header/>
            <Paper>
            <Typography variant="h1">
            Я ненавижу React ^__^
            </Typography>
            <div className="app">
              <div className="row">
                <div className="mixed-chart">
                  <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="bar"
                    width="500"
                  />
                </div>
              </div>
            </div>
            </Paper>
            </div>
        )
    }
}
