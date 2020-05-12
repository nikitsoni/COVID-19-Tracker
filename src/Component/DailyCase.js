import React, {useState} from 'react';

function DailyCase(props) {

    const {dailycase} = props;

    const [dailyData, setDailyData] = useState({
        dailyconfirmed: "",
        dailydeceased: "",
        dailyrecovered: "",
        date: "",
        totalconfirmed: "",
        totaldeceased: "",
        totalrecovered: ""
    })

    const handelChange = (event) => {
        const value = event.target.value;
        //console.log(value)
        //console.log("Yo", states[1].state)
        for (let x = 0; x < dailycase.length; x++) {
            if(dailycase[x].date === value ){
                setDailyData({...dailyData,
                    dailydeceased :dailycase[x].dailydeceased,
                    dailyrecovered: dailycase[x].dailyrecovered,
                    date: dailycase[x].date,
                    totalconfirmed: dailycase[x].totalconfirmed,
                    totaldeceased: dailycase[x].totaldeceased,
                    totalrecovered: dailycase[x].totalrecovered,
                    dailyconfirmed: dailycase[x].dailyconfirmed })
            }
        }
    }

    const displayData = () => {
        return(
            <div className="rowi">
                <div className=" text-center data">
                <h2>Confirmed</h2>
                <p>{dailyData.dailyconfirmed}</p>
                </div>
                <div className=" text-center data">
                <h2>Deceased</h2>
                <p>{dailyData.dailydeceased}</p>
                </div>
                <div className=" text-center data">
                <h2>Recovered</h2>
                <p>{dailyData.dailyrecovered}</p></div>
                <div className=" text-center data">
                <h2>Date</h2>
                <p>{dailyData.date}</p></div>
                <div className=" text-center data">
                <h2>Total Confirmed</h2>
                <p>{dailyData.totalconfirmed}</p></div>
                <div className=" text-center data">
                <h2>Total Deceased</h2>
                <p>{dailyData.totaldeceased}</p></div>
                <div className=" text-center data">
                <h2>Total Recovered</h2>
                <p>{dailyData.totalrecovered}</p></div>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="input-group">
                <h2 className="mb-3 myhead">Search Stats By Date</h2>
                <div className="input-group-prepend mb-3">
                    <label className="input-group-text" for="inputGroupSelect01">Date</label>
                </div>
                <select onChange={handelChange} className="custom-select mb-3" id="inputGroupSelect01">
                    {dailycase.map((data, i) => {
                    return(
                        <option key={i} value={data.date}>{data.date} </option>
                    )
                })}
                </select>
            </div>
            {
                dailyData.dailyconfirmed && (
                    <div className="container">{displayData()}</div>
    
                )
            }
            
        </div>
    );
}

export default DailyCase;