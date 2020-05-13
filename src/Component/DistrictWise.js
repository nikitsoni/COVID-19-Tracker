import React, {useState, useEffect} from 'react';
import DistrictBar from './DistrictBar';
import '../style.css'


function DistrictWise(props) {

    const {stateData} = props;
    console.log(stateData.state)

    const [allDistrictData, setAllDistrictData] = useState([])
    const [districtDataOfState, setDistrictDataOfState] = useState([])
    const [districts, setDistricts] = useState({
        active: "",
        confirmed: "",
        deceased: "",
        recovered: "",    
        district: "",
    })  

    const getDistrictWiseData = async () => {
        const response = await fetch("https://api.covid19india.org/v2/state_district_wise.json");
        const data = await response.json();
        console.log(data)
        setAllDistrictData(data)
    }

    useEffect(() => {
        getDistrictWiseData()
    }, [stateData])

    const getDistrictOfThatState = () => {
        for (let x = 0; x < allDistrictData.length; x++) {
            if(stateData.state === allDistrictData[x].state){
                setDistrictDataOfState(allDistrictData[x].districtData)
                console.log(allDistrictData[x].state)
            }
            
        }
        console.log(districtDataOfState)
    }


    const handelChange = (event) => {
        const value = event.target.value;
        console.log(value)
        //setName({name: value})
        //console.log(value)
        //console.log("Yo", states[1].state)
        console.log(districtDataOfState[0].active)
        for (let x = 0; x < districtDataOfState.length; x++) {
            if(districtDataOfState[x].district === value ){
                console.log(districtDataOfState[x].district)
                setDistricts({...districts,
                    active : districtDataOfState[x].active,
                    confirmed: districtDataOfState[x].confirmed,
                    recovered: districtDataOfState[x].recovered,
                    district: districtDataOfState[x].district,
                    deceased: districtDataOfState[x].deceased,
                    success : true
                    })
            }
        }
    }

    const displayData = () => {
        return(
            <div className="rowi">
                <div className=" text-center data">
                <h2>District</h2>
                <p>{districts.district}</p>
                </div>
                <div className=" text-center data">
                <h2>Active</h2>
                <p>{districts.active}</p></div>
                <div className=" text-center data">
                <h2>Confirmed</h2>
                <p>{districts.confirmed}</p></div>
                <div className=" text-center data">
                <h2>Deaths</h2>
                <p>{districts.deceased}</p></div>
                <div className=" text-center data">
                <h2>Recovered</h2>
                <p>{districts.recovered}</p></div>
            </div>
        )
    }

    const display = () => {
        return(
            <div className="container">
            <button className="btn" onClick={getDistrictOfThatState}>Click To Add Districts of {stateData.state}</button>
                <div className="input-group ">
                <h2 className="mb-3 myhead">Search Stats By State District Name</h2>
                    <div className="input-group-prepend mb-3">
                        <label className="input-group-text" for="inputGroupSelect01">District</label>
                    </div>
                    <select onChange={handelChange} className="custom-select mb-3" id="inputGroupSelect01">
                        {districtDataOfState.map((district, i) => {
                        return(
                            <option key={i} value={district.district}>{district.district} </option>
                        )
                    })}
                    </select>
                </div>
            </div>
        )
    }
 

    return (
            <div className="container"> 
                {display()}     
                { districts.district && (
                <div>
                    <div className="container">{displayData()}</div>
                    <DistrictBar districts= {districts}/>
                </div>)
                }      
            </div>
        
    );
}

export default DistrictWise;