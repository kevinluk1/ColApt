import React, { useState, useEffect } from "react";
import CitySelect from "../Components/dropDown";
import JobSelect from "../Components/jobDropDown";
import GoButton from "../Components/button";
import SelectJobButton from "../Components/selectJobButton";
import DisplayTable from "../Components/displayDataTable";
import CompareButton from "../Components/compareButton";
import BreakdownButton from "../Components/breakdownButton";
import ClearButton from "../Components/clearButton";
import {Select} from "@mui/material";
function HomePage(props) {
    const [selectedCity, setSelectedCity] = useState('');
    const [responseData, setResponseData] = useState(null);
    const [selectedCity2, setSelectedCity2] = useState('');
    const [responseData2, setResponseData2] = useState(null);
    const [clearStatus, setClear] = useState(false);
    const [selectedJob, setSelectedJob] = useState("");
    const [jobResponseData, setJobResponseData] = useState(null);
    const [beerText, setBeerText] = useState(false);
    const [beerFactor, setBeerFactor] = useState(0);
    const [salary, setSalary] = useState(null);

    const handleCitySelected = (city) => {
        setSelectedCity(city);
    }
    const handleCitySelected2 = (city) => {
        setSelectedCity2(city);
    }
    const handleJobSelected = (job) => {
        setSelectedJob(job);
    }
    const handleButtonResponse = (dataObject) => {
        console.log((dataObject["Rent Per Month prices"]))
        setResponseData(dataObject);
        console.log("we are in handleButtonResponse")
        console.log(responseData)
    }
    const handleSelectJobButtonResponse = (dataObject) => {
        setJobResponseData(dataObject);
    }

    const handleButtonResponse2 = (dataObject) => {
        console.log((dataObject["Rent Per Month prices"]))
        setResponseData2(dataObject);
    }
    const clearSelections = () => {
        setClear(true);
    }

    const foo = () => {
        if(salary){
        console.log(salary[0]['Annual'])}
        if(responseData){
        console.log(responseData['Restaurants prices'][3]['Value'])}

        if (salary && responseData){
            let beerFactor1 = (parseInt(salary[0]['Annual'].replace(/,/g, ''))/parseInt(responseData['Restaurants prices'][3]['Value']))
            console.log(beerFactor1)
            setBeerFactor(beerFactor1)
        }
    }
    useEffect (() => {props.onResponseData(responseData)
        console.log("we are in useEffect")
        console.log(responseData)}, [responseData])
    useEffect (() => {
        setSelectedCity('');
        setSelectedCity2('');
        setResponseData(null);
        setResponseData2(null);
        setClear(false);
        setSelectedJob('');
        setJobResponseData(false);
    }, [clearStatus])

    useEffect(() => {
        console.log(jobResponseData)
        setSalary(jobResponseData)
        foo()

    },[jobResponseData])

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
            <div><BreakdownButton responseData={responseData}/></div>
            <div> <JobSelect onJobSelected={handleJobSelected}/></div>
            <SelectJobButton selectedJob={selectedJob} onResponse={handleSelectJobButtonResponse} />

            {beerFactor && (<p>The beer factor in your selected state is: {beerFactor} with a an average salary of {salary[0]['Annual']} </p>) }
            <div>
            <ClearButton clearSelections = {clearSelections} />
            </div>
        </div>
        </>
    );

}
export default HomePage;
