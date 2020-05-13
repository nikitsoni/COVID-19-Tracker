import React from 'react';
import { Bar } from 'react-chartjs-2';


const BarChart = (props) => {
    
    const {stateData} = props;
    return(
        <div className="container-fluid">
            <Bar
            data={{
                labels: ['Infected','Active','Recovered', 'Deaths'],
                datasets: [
                {
                    label: 'People',
                    backgroundColor: ['rgba(0, 0, 255, 0.5)','rgba(251, 197, 49,0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                    data: [stateData.confirmed, stateData.active, stateData.recovered, stateData.deaths],
                },
                ],
            }}
            options={{
                legend: { display: false },
                title: { display: true, text: `Current state in ${stateData.state}` },
            }}
            />
        </div>)
    
};

export default BarChart;