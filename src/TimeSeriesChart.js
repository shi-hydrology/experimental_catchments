import React, {Component} from 'react';
import ReactApexChart from "react-apexcharts";

export default class TimeSeriesChart extends React.Component {
    constructor(props) {
        super(props);
        console.log(props.data)
        this.state = {      
                    series: [{
                    name: 'XYZ MOTORS',
                    data: props.data
                    }],
                    options: {
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
                        inverseColors: true,
                        opacityFrom: 0.5,
                        opacityTo: 0,
                        stops: [0, 90, 100]
                        },
                    },
                    yaxis: {
                        labels: {
                        formatter: function (val) {
                            return (val).toFixed(0);
                        },
                        },
                    },
                    xaxis: {
                        categories: props.lables
                    },
                    tooltip: {
                        shared: false,
                        y: {
                        formatter: function (val) {
                            return (val).toFixed(0)
                        }
                        }
                    }
                    },
                
                
                };
                }

  

    render() {
      return (
        

  <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="area" height={350} />
</div>
);
}
}