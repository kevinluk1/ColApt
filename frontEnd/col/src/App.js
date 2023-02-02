import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/homePage";
import breakdownPage from "./Pages/breakdownPage";
import React, {useEffect, useState} from "react";
import BreakdownPage from "./Pages/breakdownPage";


function App() {
    console.log("we are in app")
    const [responseData, setResponseData] = useState(null);
    // useEffect(()=> {setResponseData(responseData)})

    const updateResponseData = (dataObject) => {
        setResponseData(dataObject);
        console.log(dataObject)
    }

    useEffect (() => {

        console.log(responseData)}, [responseData])


    return (
        <div className="App">
            <Router>
            <Routes>
                <Route path="/" element={<HomePage onResponseData={updateResponseData} />} />
                <Route path="/breakdown" element ={<BreakdownPage responseData={responseData} />} />
            </Routes>
            </Router>
        </div>
    );
}

export default App;










        // import React, { useState, useEffect } from "react";
        // import CitySelect from "./Components/dropDown";
        // import GoButton from "./Components/button";
        // // import DisplayJson from "./Components/displayData";
        // import DisplayTable from "./Components/displayDataTable";
        // import CompareButton from "./Components/compareButton";
        // import BreakdownPage from "./Pages/breakdownPage";
        // import BreakdownButton from "./Components/breakdownButton";
        // import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
        // function HomePage() {
        //     const [selectedCity, setSelectedCity] = useState('');
        //     const [responseData, setResponseData] = useState(null);
        //     const [selectedCity2, setSelectedCity2] = useState('');
        //     const [responseData2, setResponseData2] = useState(null);
        //
        //     const handleCitySelected = (city) => {
        //         setSelectedCity(city);
        //     }
        //     const handleCitySelected2 = (city) => {
        //         setSelectedCity2(city);
        //     }
        //     const handleButtonResponse = (dataObject) => {
        //         console.log((dataObject["Rent Per Month prices"]))
        //         // console.log(JSON.stringify(dataObject))
        //         setResponseData(dataObject);
        //     }
        //     const handleButtonResponse2 = (dataObject) => {
        //         console.log((dataObject["Rent Per Month prices"]))
        //         // console.log(JSON.stringify(dataObject))
        //         setResponseData2(dataObject);
        //     }
        //     return (
        //         <div className="App">
        //             <Router>
        //                 <Routes>
        //                     <Route path="/breakdown">
        //                     </Route>
        //                 </Routes>
        //             </Router>
        //             <h3>Cost of Living Finder</h3>
        //             <div>
        //                 <CitySelect onCitySelected={handleCitySelected}  />
        //                 <GoButton selectedCity={selectedCity} onResponse={handleButtonResponse} />
        //                 {responseData && (
        //                     <DisplayTable responseObject={responseData} />
        //                 )}
        //
        //                 <CitySelect onCitySelected={handleCitySelected2}  />
        //                 <CompareButton selectedCity={selectedCity2} onResponse={handleButtonResponse2} />
        //                 {responseData2 && (
        //                     <DisplayTable responseObject={responseData2} />
        //                 )}
        //             </div>
        //             <BreakdownButton/>
        //         </div>
        //     );
        //
        // }
        // export default HomePage;
