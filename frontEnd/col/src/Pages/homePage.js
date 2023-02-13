import React, { useState, useEffect } from "react";
import CitySelect from "../Components/dropDown";
import GoButton from "../Components/button";
import DisplayTable from "../Components/displayDataTable";
import CompareButton from "../Components/compareButton";
import BreakdownButton from "../Components/breakdownButton";
import ClearButton from "../Components/clearButton";
function HomePage(props) {

    const [selectedCity, setSelectedCity] = useState('');
    const [responseData, setResponseData] = useState(null);
    const [selectedCity2, setSelectedCity2] = useState('');
    const [responseData2, setResponseData2] = useState(null);
    const [clearStatus, setClear] = useState(false);
    const [originalOption, setOriginalOption] = useState("");

    const handleCitySelected = (city) => {
        setSelectedCity(city);
    }
    const handleCitySelected2 = (city) => {
        setSelectedCity2(city);
    }
    const handleButtonResponse = (dataObject) => {
        console.log((dataObject["Rent Per Month prices"]))
        setResponseData(dataObject);
        console.log("we are in handleButtonResponse")
        console.log(responseData)
    }

    useEffect (() => {props.onResponseData(responseData)
        console.log("we are in useEffect")
    console.log(responseData)}, [responseData])

    const handleButtonResponse2 = (dataObject) => {
        console.log((dataObject["Rent Per Month prices"]))
        setResponseData2(dataObject);
    }

    const clearSelections = () => {
        setClear(true);
    }

    useEffect (() => {
        setSelectedCity('');
        setSelectedCity2('');
        setResponseData(null);
        setResponseData2(null);
        setClear(false);
    }, [clearStatus])

    return (
        <>
        <div className="App">

            <h3>Apartment Cost and Living Costs Breakdown Finder</h3>
            <div>
                <CitySelect onCitySelected={handleCitySelected}  />
                <GoButton selectedCity={selectedCity} onResponse={handleButtonResponse} />
                {responseData && (
                    <DisplayTable responseObject={responseData} />
                )}

                <CitySelect onCitySelected={handleCitySelected2}  />
                <CompareButton selectedCity={selectedCity2} onResponse={handleButtonResponse2} />
                {responseData2 && (
                    <DisplayTable responseObject={responseData2} />
                )}
            </div>
            <BreakdownButton responseData={responseData}/>
            <div>
            <ClearButton clearSelections = {clearSelections} />
            </div>
        </div>
        </>
    );

}
export default HomePage;
