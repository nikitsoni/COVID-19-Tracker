import React, { useEffect, useState } from 'react';
import StateWise from "./Component/StateWise";
import DailyCase from "./Component/DailyCase";
import Chart from './Component/Chart'
import "./style.css";
import Footer from './Component/Footer'


function App({state}) {

  const [states, setStates] = useState([])
  const [dailycase, setDailycase] = useState([])

  //console.log(dailycase)

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    const response = await fetch("https://api.covid19india.org/data.json");
    const data = await response.json();
    //console.log(data)
    setStates(data.statewise)    
    setDailycase(data.cases_time_series)    
  }


  return (
    <div className="App">
      <h1 className="head text-center">India COVID-19 Tracker</h1>
      <StateWise states={states} />
      <DailyCase dailycase={dailycase} />
      <Chart dailycase={dailycase} states={states}/>
      <Footer/>
    </div>
  );
}

export default App;

//git init
//git status
//git add .
//git commit -m ""
//git push -u origin master
//npm run deploy 