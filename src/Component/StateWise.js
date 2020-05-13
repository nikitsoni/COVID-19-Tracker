import React, { useState} from 'react';
import BarChart from "./BarChart"
import DistrictWise from './DistrictWise';

function StateWise(props) {
    
    const {states} = props;

    const [stateData, setstateData] = useState({
        active: "",
        confirmed: "",
        deaths: "",
        recovered: "",
        state: "",
        lastupdatedtime: ""
    })

    


    //console.log(stateData)

    



    const handelChange = (event) => {
        const value = event.target.value;
        //setName({name: value})
        //console.log(value)
        //console.log("Yo", states[1].state)
        for (let x = 0; x < states.length; x++) {
            if(states[x].state === value ){
                setstateData({...stateData,
                    active :states[x].active,
                    confirmed: states[x].confirmed,
                    recovered: states[x].recovered,
                    state: states[x].state,
                    deaths: states[x].deaths,
                    lastupdatedtime: states[x].lastupdatedtime })
            }
            else if(value === "total"){
                setstateData({...stateData,
                    active :states[0].active,
                    confirmed: states[0].confirmed,
                    recovered: states[0].recovered,
                    state: states[0].state,
                    deaths: states[0].deaths,
                    lastupdatedtime: states[0].lastupdatedtime })
            }
        }
        
    }


    

    const displayData = () => {
        return(
            <div className="rowi">
                <div className=" text-center data">
                <h2>State</h2>
                <p>{stateData.state}</p>
                </div>
                <div className=" text-center data">
                <h2>Active</h2>
                <p>{stateData.active}</p></div>
                <div className=" text-center data">
                <h2>Confirmed</h2>
                <p>{stateData.confirmed}</p></div>
                <div className=" text-center data">
                <h2>Deaths</h2>
                <p>{stateData.deaths}</p></div>
                <div className=" text-center data">
                <h2>Recovered</h2>
                <p>{stateData.recovered}</p></div>
                <div className=" text-center data">
                <h2>Last Updated</h2>
                <p>{stateData.lastupdatedtime}</p></div>
            </div>
        )
    }



        return (
            <div className="container">
                <div className="input-group ">
                <h2 className="mb-3 myhead">Search Stats By State Name</h2>
                    <div className="input-group-prepend mb-3">
                        <label className="input-group-text" for="inputGroupSelect01">States</label>
                    </div>
                    <select onChange={handelChange} className="custom-select mb-3" id="inputGroupSelect01">
                        {states.map((state, i) => {
                        return(
                            <option key={i} value={state.state}>{state.state} </option>
                        )
                    })}
                    </select>
                </div>
                { stateData.active && (<div>
                    <div className="container">{displayData()}</div>
                    <BarChart stateData= {stateData}/>
                    <DistrictWise stateData= {stateData}/>
                    </div>)
                }
            </div>
        );
    
}

export default StateWise;