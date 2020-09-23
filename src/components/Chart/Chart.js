import React, { useState, useEffect } from 'react';
import { fetchDailyData } from "../../api";
import { Line, Bar } from 'react-chartjs-2';
import "./Chart.css";

const Chart = ({data: {confirmed, active, recovered, deaths}, country}) => {
  const [dailyData, setDailyData] = useState([]);
  
  useEffect(() => {
    const fetchAPI = async() => {
      setDailyData(await fetchDailyData());
    }
    fetchAPI();
  },[]);

  const lineChart = (
    dailyData.length ? (
      <Line data = {{ 
        labels: dailyData.map(({ date }) => date), 
        datasets: [{
          data: dailyData.map(({ confirmed }) => confirmed), 
          label: 'Confirmed', 
          borderColor: '#3333ff', 
          backgroundColor: 'rgba(0, 0 , 255, 0.5)',
          fill: true,

        }, {
          data: dailyData.map(({ deaths }) => deaths), 
          label: 'Deceased', 
          borderColor: 'red', 
          backgroundColor: 'rgb(255, 0 , 0)', 
          fill: true,
        }], 
      }}
    />) : null
  );

  const barChart = (
    confirmed ? 
    ( 
      <Bar
        data={{
          labels: ['Confirmed', 'Active', 'Recovered', 'Deceased'],
          datasets: [{
            label: 'People',
            backgroundColor: ['rgba(255, 193, 7, 0.6)', 'rgba(0, 0, 255, 0.6)', 'rgba(0, 255, 0, 0.6)', 'rgba(220, 53, 69, 0.6)',],
            data: [confirmed, active, recovered, deaths],

          }]
        }}
        options={{
          legend: {display: false},
          title: {display: true, text: country },
        }} 
      />

    ) : null
  );

  return (
    <div className="container">
      {country ? barChart : lineChart }
    </div>
  )
}

export default Chart
