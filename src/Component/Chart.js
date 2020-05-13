import React from 'react';
import { Line } from 'react-chartjs-2';


const Chart = (props) => {

    const {dailycase} = props;

    //console.log(dailycase)

  //const [dailyData, setDailyData] = useState({});


  const lineChart = (
      <Line
        data={{
          labels: dailycase.map(({date}) => date),
          datasets: [{
            data: dailycase.map((data) => data.totalconfirmed),
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          }, {
            data: dailycase.map((data) => data.totaldeceased),
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          },
          {
            data: dailycase.map((data) => data.totalrecovered),
            label: 'Recovered',
            borderColor: 'green',
            backgroundColor: 'rgba(255, 255, 0, 0.5)',
            fill: true,
          }
          ],
        }}
      />
  );

  return (
    <div className="container-fluid">
      {lineChart}
    </div>
  );
};

export default Chart;
