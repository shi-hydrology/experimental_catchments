import React, {Component} from 'react';
import ReactApexChart from "react-apexcharts";

export default class TimeSeriesChart extends Component {
    constructor(props) {
        super(props);
        console.log("Props from charts\n\n", props)
    }
    series=(props)=>{
        const list = [{ name: props.name,
                        data: props.data
                        }]
        return list
                    }

    options=(props)=>{
        const opt = {
            chart: {
                type: 'area',
                stacked: false,
                height: 350,
                zoom: {
                type: 'x',
                enabled: true,
                autoScaleYaxis: true
                },
                toolbar: {
                autoSelected: 'zoom'
                }
            },
            dataLabels: {
                enabled: false
            },
            markers: {
                size: 0,
            },
            fill: {
                type: 'gradient',
                gradient: {
                shadeIntensity: 1,
                inverseColors: false,
                opacityFrom: 0.3,
                opacityTo: 0.8,
                stops: [0, 90, 100]
                },
            },
            stroke: {
                width: 2,
                curve: 'smooth'
              },
            yaxis: {
                labels: {
                formatter: function (val) {
                    return (val).toFixed(0);
                },
                },
            },
            xaxis: {
                categories: props.lables,
                min: props.minDate,
                max: props.maxDate,
            },
            tooltip: {
                shared: false,
                y: {
                formatter: function (val) {
                    return (val).toFixed(0)
                }
                }
            }
        }
        return opt
    }
    render() {
        return (
            <div id="chart" style={{height: '40vh'}}>
                <ReactApexChart options={this.options(this.props)} series={this.series(this.props)} type="area" height='100%' />
            </div>
        );
    }
}
