import React, {useEffect, useState} from 'react';
import BackButton from "../Components/backButton";
import BackPopUp from "../Components/backPopUp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import breakdownTable from "../Components/breakdownTable";
function BreakdownPage(props){
    const [objectData, setObjectData] = useState(null);
    const[marketPrices, setMarketPrices] = useState(null);

    useEffect(() => {
        if (props.responseData) {
            setObjectData(props.responseData)
        }
    }, [props.responseData, objectData])

    useEffect(() => {
        let x
        if (objectData) {
            x = objectData["Markets prices"]
            setMarketPrices(JSON.stringify(x))
        }
    }, [objectData])

    return (

        <div>
            <h3> Cost of Groceries: </h3>
            <p>{marketPrices}</p>
            <BackPopUp />

        </div>

    )
}

export default BreakdownPage;
