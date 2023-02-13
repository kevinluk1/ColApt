import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/homePage";
import React, {useEffect, useState} from "react";
import BreakdownPage from "./Pages/breakdownPage";


function App() {
    const [responseData, setResponseData] = useState(null);
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
