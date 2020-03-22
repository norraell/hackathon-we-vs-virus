import React, { Component } from 'react';
import { Chart } from 'react-chartjs-2';

export default class PingChart extends Component {
  constructor(props){
    super(props);
    this.node = null;
    this.chart = null;
  }
  
  componentDidMount() {
    this.chart = new Chart(this.node, {
      type: 'line',
      data: {
        labels: [1, 2, 3, 4, 5, 6],
        datasets: [{
          label: 'Ping Numbers',
          data: [50, 44, 30, 10, 100, 1],
          borderColor: '#333',
          backgroundColor: 'transparent',
          borderWidth: 2
        }]
      },
      options: {
        elements: {
          point: { radius: 0}
        },
        legend: { display: false },
        scales: {
          xAxes: [{ display: false }],
          yAxes: [{
            display: false,
            ticks: {
              beginAtZero: true,
            }
          }]
        }
      }
    });
  }

  render(){
    return <canvas ref={e => this.node = e} />;
  }
}
