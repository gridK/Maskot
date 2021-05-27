import React from "react";
import {Bar} from 'react-chartjs-2';
// const labels = ['22 Jan','23 Jan','24 Jan','25 Jan','26 Jan','27 Jan','28 Jan','29 Jan','30 Jan','31 Jan','1 Feb','2 Feb','3 Feb','4 Feb'];
// const data = {
//   labels: labels,
//   datasets: [{
//     // label: 'My First Dataset',
//     data: [0.09, 0.13, 0.11, 0.14, 0.17, 0.18, 0.20, 0.09, 0.13, 0.16, 0.04, 0.07, 0.18, 0.25],
//     backgroundColor: '#F17841'
//   }]
// };
const options = {
        legend: {
          display: false,
        },
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Chart.js Bar Chart'
          },
        },
        scales: {
          yAxes: [
            {
              gridLines: {
                drawBorder: false,
                color: "#DDDDDD",
                zeroLineColor: "transparent",
              },
              min: 0,
              max: 1,
              ticks: {
                callback: function (value) {
                  return value.toLocaleString('de-DE', {style:'percent'});
                },
                stepSize: 0.05
              },
            }
          ],
          xAxes: [
            {
              gridLines: {
                display: false,
              },
              barPercentage: 0.5
            },
          ],
        }
        
  }

export default function InspectionBarChart(props) {
  
  const bar_labels = props.inspectionRecords.map( record => record.date);
  var temp_data = props.inspectionRecords.map( record => record.withoutMaskRate );
  const bar_data = {
    labels: bar_labels,
    datasets: [{
      // label: 'My First Dataset',
      data: temp_data,
      backgroundColor: '#F17841'
    }]
  };
  return (
    <div class="mt-5">
      <Bar
      height={70}
      data ={bar_data}
      options ={options}
      >

        
      </Bar>
    </div>
  );
}