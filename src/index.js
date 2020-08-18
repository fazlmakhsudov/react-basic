import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


var charts = {
  chartData: {
    labels: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
    datasets: [
      {
        label: 'level of thickness',
        data: [32, 45, 12, 76, 69],
        backgroundColor: [
          'rgba(75, 100, 103, 0.6)'
        ],
        borderWidth: 4
      },
      {
        label: 'level of lengh',
        data: [11, 77, 44, 1, 56],
        backgroundColor: [
          'rgba(35, 11, 42, 0.6)'
        ],
        borderWidth: 4
      },
      {
        label: 'level of width',
        data: [1, 99, 3, 11, 77],
        backgroundColor: [
          'rgba(135, 211, 42, 0.5)'
        ],
        borderWidth: 4
      }
    ]
  },
  chartSetting: {
    title: "Dynamic chart",
    options: {
      responsive: true,
      title: { text: 'Ukraine Covid statistic', display: true },
      scales: {
        yAxes: [
          {
            ticks: {
              autoSkip: true,
              maxTicksLimit: 10,
              beginAtZero: true
            },
            gridLines: false,
          }
        ],
        xAxes: [
          {
            gridLines: false,
          }
        ]
      }
    },
  },
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
